import {
  Skeleton,
  Button,
  Flex,
  Card,
  Avatar,
  Text,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Flex direction="column" gap="4">
      <Card
        flexGrow="1"
        flexDirection="column"
        gap="2"
        style={{ width: "200px" }}
      >
        {loading ? (
          <>
            <Skeleton.Circle diameter="3rem" />
            <Skeleton.Text variant="headline" />
            <Skeleton.Text rows={2} />
          </>
        ) : (
          <>
            <Avatar name="Ben Ho" size="large" />
            <Text variant="headline" el="h6" size="small">
              Ben Ho
            </Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </>
        )}
      </Card>
      <Button
        style={{ alignSelf: "start" }}
        onClick={() => setLoading(!loading)}
      >
        Toggle loading
      </Button>
    </Flex>
  );
}

export default App;
