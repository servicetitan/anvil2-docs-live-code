import { toast, Button } from "@servicetitan/anvil2";

function App() {
  const config = {
    title: "Title",
    message: "Lorem ipsum dolor sit amet.",
    actions: {
      primary: {
        label: "Primary",
        appearance: "primary" as const,
      },
      secondary: {
        label: "Secondary",
      },
    },
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <Button onClick={() => toast.info(config)}>Show toast</Button>
    </div>
  );
}

export default App;
