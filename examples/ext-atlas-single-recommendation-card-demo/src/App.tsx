import { SingleRecommendationCard } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <SingleRecommendationCard
        message="Which service would you like to schedule?"
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
        ]}
        actions={[
          {
            id: "confirm",
            name: "Confirm Selection",
            type: "primary",
          },
        ]}
        onSubmit={(data) => console.log("submitted:", data)}
      />
    </Card>
  );
}

export default App;
