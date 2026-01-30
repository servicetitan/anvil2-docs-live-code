import { Header } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      padding="0"
      style={{ width: "388px" }}
    >
      <Header
        title="Atlas"
        onBack={() => console.log("back clicked")}
        onClose={() => console.log("close clicked")}
        onViewHistory={() => console.log("view history clicked")}
        onFullscreen={() => console.log("fullscreen clicked")}
        onCreateNewChat={() => console.log("new chat clicked")}
      />
    </Card>
  );
}

export default App;
