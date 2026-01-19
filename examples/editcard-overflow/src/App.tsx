import { EditCard } from "@servicetitan/anvil2";

function App() {
  return (
    <EditCard
      style={{ maxWidth: 325 }}
      flexGrow="1"
      headerText="An Edit Card title will wrap when not enough space is available for it."
      state="not started"
    >
      Content inside the Edit Card will overflow depending on how it is
      implemented, with the most typical being wrapping.
    </EditCard>
  );
}

export default App;
