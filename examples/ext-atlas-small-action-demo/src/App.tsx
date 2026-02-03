import { SmallAction } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <SmallAction
        recommendationId="rec-123"
        message="Would you like to proceed with this action?"
        description="This action will update your account settings."
        onReject={() => console.log("rejected")}
        onAccept={() => console.log("accepted")}
      />
    </Card>
  );
}

export default App;
