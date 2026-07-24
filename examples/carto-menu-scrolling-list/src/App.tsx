import { Button, Menu } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ paddingTop: 16, display: "flex", justifyContent: "center" }}>
      <Menu
        trigger={<Button label="Options" variant="secondary" />}
        items={Array.from({ length: 20 }, (_, index) => ({
          id: `option-${index}`,
          label: `Option ${index + 1}`,
        }))}
        defaultOpen
      />
    </div>
  );
}

export default App;
