import { Avatar, ButtonCompound } from "@servicetitan/anvil2";

function App() {
  return (
    <ButtonCompound shape="circular" onClick={() => alert("Clicked!")}>
      <Avatar name="Rose Tico" size="large" status="online" />
    </ButtonCompound>
  );
}

export default App;
