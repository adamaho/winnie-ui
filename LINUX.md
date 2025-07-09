- Create a new server
- Follow the prompts with the defaults and no disk encryption
- No need for a proxy to access external internet

## Configuring the server

### Disable root login over ssh
- in `/etc/ssh/sshd_config` find `PermitRootLogin` and change its value to `no`. Note it might be commented out.
- restart ssh service in systemd `sudo systemctl restart ssh.service`
- in another terminal confirm that you get `Permission Denied` error by trying to ssh as root via `ssh root@<server-ip>`
- `exit` session in both terminals and try logging in with `ssh <user>@<server-ip>`

### Upgrade Deps

```
sudo apt update && sudo apt upgrade
```

### Change GRUB Settings

By default GRUB will open when the server reboots. We want to auto-select `ubuntu`. Modify the `/etc/default/grub` config with `sudo` the following:

```sh
GRUB_TIMEOUT_STYLE=menu
GRUB_TIMEOUT=5
GRUB_TERMINAL=console
```

Then run `sudo update-grub` to pull in the latest changes and `sudo reboot` to test to make sure it works. You'll know it works if you can ssh back in after a minute or so.

### Install and Configure Tailscale

Tailscale provides an all-in-one vpn solution. This will allow my devices to talk to the server from outside of my home network. Visit https://tailscale.com/kb/1031/install-linux and install for your version of linux. Then install tailscale on any of the devices you plan to connect to the server with. P.S Tailscale is GOATED.

Now you can access your server from within the tailscale network. Try a couple commands out:

```sh
ping <server-name> (winston)
ssh <username>@<server-name>
```

### Configure Firewall

We only need to allow traffic into the server for a for development. Now that we have tailscale configured we can add firewall rules to only allow traffic into the server that comes from tailscale.

First we need to ssh to the server over tailscale with `ssh <username>@<100.x.y.z>`. The IP address comes from the server in the tailscale dashboard.

```sh
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow in on tailscale0
sudo ufw reload
sudo service ssh restart
```

Verify the configuration with `sudo ufw status` and you should see something like:

```
Status: active

To                         Action      From
--                         ------      ----
Anywhere on tailscale0     ALLOW       Anywhere
Anywhere (v6) on tailscale0 ALLOW       Anywhere (v6)
```




