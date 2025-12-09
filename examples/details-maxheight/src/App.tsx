import { Details } from "@servicetitan/anvil2";

function App() {
  return (
    <>
      <Details defaultExpanded>
        <Details.Summary>
          <code>maxHeight=&quot;5rem&quot;</code>
        </Details.Summary>
        <Details.Content maxHeight="5rem">
          This container scrolls! <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Details.Content>
      </Details>
      <Details defaultExpanded>
        <Details.Summary>
          <code>maxHeight={80}</code>
        </Details.Summary>
        <Details.Content maxHeight={80}>
          This container shrinks to fit content under <code>80px</code>.
        </Details.Content>
      </Details>
    </>
  );
}

export default App;
