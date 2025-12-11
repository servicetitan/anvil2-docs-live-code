import { toast, Flex, Button } from "@servicetitan/anvil2";

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
      <Flex gap="2">
        <Button onClick={() => toast.info(config)} appearance="primary">
          Show toast
        </Button>
        <Button onClick={() => toast.dismiss()}>Dismiss</Button>
      </Flex>
    </div>
  );
}

export default App;
