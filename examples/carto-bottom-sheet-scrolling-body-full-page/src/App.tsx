import { BottomSheet, Button, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <BottomSheet
      title="Terms of service"
      content={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {Array.from({ length: 12 }, (_, i) => (
            <Text
              key={i}
              text={`Section ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            />
          ))}
        </div>
      }
      defaultOpen
      trigger={<Button label="Open sheet" variant="secondary" />}
    />
  );
}

export default App;
