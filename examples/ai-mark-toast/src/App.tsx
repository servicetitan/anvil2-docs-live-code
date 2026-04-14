import { toast, Flex, Grid, Button } from "@servicetitan/anvil2";

function App() {
  const config = {
    title: "AI dispatch digest",
    message:
      "Today: 6 jobs—2 AC tune-ups, 2 drain calls, 1 heat-pump startup, and 1 panel inspection. Two are marked urgent.",
    duration: 8000,
    aiMark: true,
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <Flex justifyContent="center">
        <Grid templateColumns="repeat(2, 12rem)" gap="2">
          <Button onClick={() => toast.info(config)} style={{ width: "100%" }}>
            Show info toast
          </Button>
          <Button
            onClick={() => toast.success(config)}
            style={{ width: "100%" }}
          >
            Show success toast
          </Button>
          <Button
            onClick={() => toast.warning(config)}
            style={{ width: "100%" }}
          >
            Show warning toast
          </Button>
          <Button
            onClick={() => toast.danger(config)}
            style={{ width: "100%" }}
          >
            Show danger toast
          </Button>
        </Grid>
      </Flex>
    </div>
  );
}

export default App;
