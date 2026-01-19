import { Details } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ maxWidth: "23rem" }}>
      <Details>
        <Details.Summary>
          This is a very long Details heading that will wrap when there is not
          enough room for it to be on one line.
        </Details.Summary>
        <Details.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Details.Content>
      </Details>
    </div>
  );
}

export default App;
