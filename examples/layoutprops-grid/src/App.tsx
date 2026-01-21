import { Grid, Flex, Text, Card, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid rowGap="2" columnGap="3" templateColumns="8rem repeat(3,1fr)">
      <Flex direction="column" gridColumn="1/5">
        <Text variant="headline" el="h2" size="large">
          Summary
        </Text>
        <Text>See more details below.</Text>
      </Flex>
      <Card gridArea="2/1/3/2" flexDirection="column" gap="2">
        <Text variant="headline" el="h3">
          Card 1
        </Text>
        <Card background="stronger" />
        <Card background="stronger" />
      </Card>
      <Card gridArea="2/2/3/5" flexDirection="column">
        <Text variant="headline" el="h3">
          Card 2
        </Text>
        <Text flexGrow={1}>Lorem ipsum dolor sit amet.</Text>
        <Button alignSelf="flex-end">Share</Button>
      </Card>
    </Grid>
  );
}

export default App;
