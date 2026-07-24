import { Text, Window } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#e9ecf1" }}>
      <Window
        chat={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text text="Chat content" />
          </div>
        }
      />
    </div>
  );
}

export default App;
