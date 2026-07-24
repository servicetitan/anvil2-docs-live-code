import { DiffValue } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "28rem" }}>
      <DiffValue
        from="Standard repair visit with one replacement part."
        to="Extended repair visit including compressor diagnostics, refrigerant recharge, and replacement of the contactor and capacitor per technician notes."
        layout="block"
      />
    </div>
  );
}

export default App;
