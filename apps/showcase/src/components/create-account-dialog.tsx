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
    <Dialog width="sm" data-placement="center">
      <DialogTitle>New Account</DialogTitle>
      <DialogDescription>
        Track your daily poker sessions and monitor your balance over time.
      </DialogDescription>
      <form>
        <DialogContent>
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
          <NumberField>
            <FieldLabel>Balance</FieldLabel>
            <NumberGroup size="lg">
              <NumberInput />
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
