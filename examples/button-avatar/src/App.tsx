import { ButtonCompound, Avatar } from "@servicetitan/anvil2";

function App() {
  return (
    <ButtonCompound shape="circular" onClick={console.log}>
      <Avatar name="Rose Tico" size="large" status="online" />
    </ButtonCompound>
  );
}

export default App;
