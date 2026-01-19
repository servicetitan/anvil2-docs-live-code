import { ProgressBar } from "@servicetitan/anvil2";

function App() {
  return (
    <>
      <style>
        {`
      .dontDoThis ::-webkit-progress-value {
          background: #ffbe00 !important;
      }
      `}
      </style>

      <ProgressBar label="Label" value="40" className="dontDoThis" />
    </>
  );
}

export default App;
