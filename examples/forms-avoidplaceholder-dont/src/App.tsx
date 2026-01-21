import { TextField, Icon } from "@servicetitan/anvil2";
import Person from "@servicetitan/anvil2/assets/icons/material/round/person.svg";

function App() {
  return (
    <TextField
      placeholder="Full name"
      prefix={
        (
          <Icon aria-label="search icon" svg={Person} size="large" />
        ) as unknown as string
      }
    />
  );
}

export default App;
