import { DaysOfTheWeek } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "20.5rem" }}>
      <DaysOfTheWeek
        selectedDays={[2]} // Tuesday is selected
        disabled={[6]} // Saturday is disabled
        firstDay={1} // Monday is the first day shown
      />
    </div>
  );
}

export default App;
