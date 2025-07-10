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

## Configure GPU

Note: this assumes you are configuring a server that is built of gaming computer parts. So consumer GPUs like GeForce. This means you might need to disable SecureBoot.

If you have an NVDIA GPU you can do the following `sudo ubuntu-drivers autoinstall` and then reboot your server with `sudo reboot`. Then you can confirm that it works by running `nvidia-smi` and should return something like the following.

```
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 570.133.07             Driver Version: 570.133.07     CUDA Version: 12.8     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce GTX 1050 Ti     Off |   00000000:01:00.0 Off |                  N/A |
|  0%   32C    P8            N/A  /   95W |       3MiB /   4096MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|  No running processes found                                                             |
+-----------------------------------------------------------------------------------------+
```

## Development

### Configure Tmux 

Tmux lets you create panes, manage layouts, and resume terminal sessions even across reboots.

1. Install with `sudo apt install tmux`
2. Create a new tmux conf in home dir with `touch ~/.tmux.conf`
3. Clone the repo to `~/.tmux/plugins/tpm` via `git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm`

Finally, add your tmux config to `~/.tmux.conf` and if you are using `tpm` don't forget to run `Prefix + I` to install the plugins. 

### Configure Git

Set up the ssh key
    a. `ssh-keygen -t ed25519 -C "your_email@example.com"`
    b. `cat ~/.ssh/<key-name>.pub`
    c. create new key in github
    d. test with `ssh -T git@github.com`

### Install Node

1. install nvm `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
2. exit ssh session and log back in
3. `nvm install 22` or the latest node version
4. `nvm alias default 22`

You can test with `node -v`.

### Install pnpm

`npm install -g pnpm@latest-10`

You can test with `pnpm -v`














