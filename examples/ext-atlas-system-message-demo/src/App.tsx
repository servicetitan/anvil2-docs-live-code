import { SystemMessage } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <SystemMessage
        message="Please select an action to continue:"
        radioOptions={[
          {
            label: "Option 1",
            description: "This is the first option",
            value: "option1",
          },
          {
            label: "Option 2",
            description: "This is the second option",
            value: "option2",
          },
          {
            label: "Option 3",
            description: "This is the third option",
            value: "option3",
          },
        ]}
        selectedValue={selectedValue}
        onRadioChange={(value) => setSelectedValue(value)}
        buttonText="Continue"
        onSubmit={() => console.log("submitted:", selectedValue)}
      />
    </Card>
  );
}

export default App;
