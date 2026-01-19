import { Button } from "@servicetitan/anvil2";
import Add from "@servicetitan/anvil2/assets/icons/material/round/add.svg";
import AddCircle from "@servicetitan/anvil2/assets/icons/material/round/add_circle.svg";

function App() {
  return (
    <span>
      <Button icon={Add} appearance="ghost">
        Add Object
      </Button>
      <Button icon={AddCircle} appearance="ghost">
        Add Thing
      </Button>
    </span>
  );
}

export default App;
