import { FieldMessage } from "@servicetitan/anvil2";

function App() {
  return (
    <FieldMessage
      hint="Hint text"
      description="Description text, can be max 3 lines explaining what the purpose of the field is to the user"
      error="Field message in error state"
      warning="This email is associated with another account"
    />
  );
}

export default App;
