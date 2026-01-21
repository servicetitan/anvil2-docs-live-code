import { Alert, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8">
      <Alert title="Fix before posting to batch" status="danger">
        You cannot post invoice #2345 because it has an outdated application for
        payment. Please update all applications in this series and then try
        again.{" "}
      </Alert>
      <Alert
        title="Update your existing applications for payment before adding more."
        status="warning"
      />
      <Alert title="Update the invoice" status="warning">
        Please save the invoice to reflect the changes you made to the
        Application for Payment.
        <Flex gap="3">
          <Button>Save invoice</Button>
          <Button>Not now</Button>
        </Flex>
      </Alert>
    </Flex>
  );
}

export default App;
