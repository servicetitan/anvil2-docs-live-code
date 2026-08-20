import { StepperBase, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "55rem" }}>
      <StepperBase defaultIndex={0}>
        <StepperBase.List>
          <StepperBase.Step id="account" state="started">
            Account
          </StepperBase.Step>
          <StepperBase.Step id="profile">Profile</StepperBase.Step>
        </StepperBase.List>
        <StepperBase.Panel step="account">
          <Text>Account details</Text>
        </StepperBase.Panel>
        <StepperBase.Panel step="profile">
          <Text>Profile details</Text>
        </StepperBase.Panel>
      </StepperBase>
    </div>
  );
}

export default App;
