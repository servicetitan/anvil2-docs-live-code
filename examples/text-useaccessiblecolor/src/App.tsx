import { Text, Flex, Card, useAccessibleColor } from "@servicetitan/anvil2";

function App() {
  const { foreground: fg1, background: bg1 } = useAccessibleColor("#0066CC");

  const { foreground: fg2, background: bg2 } =
    useAccessibleColor("hsl(339,100,94)");

  return (
    <Flex gap="2">
      <Card style={{ backgroundColor: bg1 }}>
        <Text style={{ color: fg1 }} inline>
          This is accessible 🎉
        </Text>
      </Card>
      <Card style={{ backgroundColor: bg2 }}>
        <Text style={{ color: fg2 }} inline>
          This is accessible 🎉
        </Text>
      </Card>
    </Flex>
  );
}

export default App;
