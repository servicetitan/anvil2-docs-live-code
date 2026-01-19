import { ProgressBar } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ maxWidth: "250px" }}>
      <ProgressBar
        label="Text overflow of the label that will wrap when not enough space is present"
        value="50"
      />
    </div>
  );
}

export default App;
