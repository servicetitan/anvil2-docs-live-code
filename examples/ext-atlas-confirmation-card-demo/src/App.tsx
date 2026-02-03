import { ConfirmationCard } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <ConfirmationCard
        recommendationId="confirmation-example"
        message="Schedule Emergency Service"
        description="This will schedule an emergency service call within 2 hours. Additional fees may apply."
        actions={[
          { id: "confirm", name: "Schedule Now", type: "primary" },
          { id: "cancel", name: "Cancel", type: "secondary" },
        ]}
        onSubmit={(data) => console.log("submitted:", data)}
      />
    </Card>
  );
}

export default App;
