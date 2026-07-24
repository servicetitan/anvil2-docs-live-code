import { AppShell, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ width: "70rem", height: 400 }}>
      <AppShell
        chat={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: 24,
              backgroundColor: "#eeeeee",
            }}
          >
            <Text text="Chat region" />
          </div>
        }
      />
    </div>
  );
}

export default App;
