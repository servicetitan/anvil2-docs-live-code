import { Button } from "@servicetitan/anvil2-ai-kit";
import { IconPlus } from "@servicetitan/anvil2-icons";

function App() {
  return (
    <Button
      variant="primary"
      size="medium"
      label="Add item"
      icon={{ icon: <IconPlus />, position: "left" }}
      onPress={() => console.log("pressed")}
    />
  );
}

export default App;
