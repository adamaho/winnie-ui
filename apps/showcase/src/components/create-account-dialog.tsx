import {
  Button,
  ButtonKbd,
  ButtonLabel,
  ButtonShortcut,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  FieldLabel,
  NumberField,
  NumberGroup,
  NumberInput,
  NumberStepper,
} from "@winnie-ui/react";

export function CreateAccountDialog() {
  return (
    <Dialog width="1" data-placement="center">
      <DialogTitle>New Account</DialogTitle>
      <DialogDescription>
        Track your daily poker sessions and monitor your balance over time.
      </DialogDescription>
      <form>
        <DialogContent className="flex flex-col gap-6">
          <NumberField>
            <FieldLabel>Website</FieldLabel>
            <NumberGroup>
              <NumberInput />
            </NumberGroup>
          </NumberField>
          <NumberField>
            <FieldLabel>Nickname</FieldLabel>
            <NumberGroup>
              <NumberInput />
            </NumberGroup>
          </NumberField>
          <NumberField
            formatOptions={{
              style: "currency",
              currency: "USD",
            }}
          >
            <FieldLabel>Balance</FieldLabel>
            <NumberGroup className="max-w-[50%]">
              <NumberInput placeholder="$0" />
              <NumberStepper />
            </NumberGroup>
          </NumberField>
        </DialogContent>
        <DialogFooter>
          {(state) => {
            return (
              <>
                <Button
                  color="grey"
                  variant="outlined"
                  data-slot="cancel"
                  onPress={state.close}
                >
                  <ButtonLabel>Cancel</ButtonLabel>
                  <ButtonShortcut>
                    <ButtonKbd>Esc</ButtonKbd>
                  </ButtonShortcut>
                </Button>
                <Button data-slot="action" onPress={state.close}>
                  <ButtonLabel>Create session</ButtonLabel>
                  <ButtonShortcut>
                    <ButtonKbd>⌘</ButtonKbd>
                    <ButtonKbd>⮐</ButtonKbd>
                  </ButtonShortcut>
                </Button>
              </>
            );
          }}
        </DialogFooter>
      </form>
    </Dialog>
  );
}
