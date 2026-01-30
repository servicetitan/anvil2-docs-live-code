import { MultipleRecommendationCard } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <MultipleRecommendationCard
        message="Select all services you need:"
        options={[
          {
            id: "option1",
            label: "HVAC Maintenance",
            description: "Regular maintenance check for your HVAC system",
          },
          {
            id: "option2",
            label: "Plumbing Repair",
            description: "Fix any plumbing issues in your home",
          },
          {
            id: "option3",
            label: "Electrical Work",
            description: "Electrical repairs and installations",
          },
        ]}
        actions={[
          { id: "confirm", name: "Confirm", type: "primary" },
          { id: "cancel", name: "Cancel", type: "secondary" },
        ]}
        onSubmit={(data) => console.log("submitted:", data)}
      />
    </Card>
  );
}

export default App;
