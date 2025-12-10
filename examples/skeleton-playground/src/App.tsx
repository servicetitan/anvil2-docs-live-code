import { Skeleton, Flex, Card, Avatar, Text } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const fakeParagraph =
    "Anim quis quis sunt esse Lorem Lorem qui aliqua aute dolor excepteur. Adipisicing sit aliqua et laborum sit non aliqua. Ullamco sunt nostrud non mollit nisi.";

  return (
    <Flex direction="column" gap="4">
      {loading ? (
        <Flex direction="row" gap="3">
          <Card flexGrow="1" flexDirection="column" gap="2">
            <Skeleton.Circle diameter="3rem" />
            <Skeleton.Text variant="headline" />
            <Skeleton.Text rows={3} />
          </Card>
          <Card flexGrow="1" flexDirection="column" gap="2">
            <Skeleton.Circle diameter="3rem" />
            <Skeleton.Text variant="headline" />
            <Skeleton.Text rows={3} />
          </Card>
          <Card flexGrow="1" flexDirection="column" gap="2">
            <Skeleton.Circle diameter="3rem" />
            <Skeleton.Text variant="headline" />
            <Skeleton.Text rows={3} />
          </Card>
        </Flex>
      ) : (
        <Flex direction="row" gap="3">
          <Card flexGrow="1" flexDirection="column" gap="2">
            <Avatar name="Ben Ho" size="large" />
            <Text variant="headline" el="h6" size="small">
              Ben Ho
            </Text>
            <Text>{fakeParagraph}</Text>
          </Card>
          <Card flexGrow="1" flexDirection="column" gap="2">
            <Avatar name="James Coyle" size="large" />
            <Text variant="headline" el="h6" size="small">
              James Coyle
            </Text>
            <Text>{fakeParagraph}</Text>
          </Card>
          <Card flexGrow="1" flexDirection="column" gap="2">
            <Avatar name="Nick Sands" size="large" />
            <Text variant="headline" el="h6" size="small">
              Nick Sands
            </Text>
            <Text>{fakeParagraph}</Text>
          </Card>
        </Flex>
      )}
      <button
        style={{ alignSelf: "start" }}
        onClick={() => setLoading(!loading)}
      >
        Toggle loading
      </button>
    </Flex>
  );
}

export default App;
