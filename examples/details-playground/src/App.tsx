import { Details } from "@servicetitan/anvil2";

function App() {
  return (
    <>
      <Details>
        <Details.Summary>Click to see details.</Details.Summary>
        <Details.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Details.Content>
      </Details>
      <Details>
        <Details.Summary>Click to see details.</Details.Summary>
        <Details.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Details.Content>
      </Details>
    </>
  );
}

export default App;
