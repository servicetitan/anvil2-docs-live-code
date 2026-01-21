import { Tooltip, Flex, Text, Grid } from "@servicetitan/anvil2";

const darkGuidance = "Works with white text or background";
const lightGuidance = "Works with black text or background";

const colors = {
  oranges: {
    Orange100: {
      hexCode: "#FFECCC",
      hsl: "hsl(36, 100%, 90%)",
      description: lightGuidance,
      token: "Orange100",
    },
    Orange200: {
      hexCode: "#FDD291",
      hsl: "hsl(36, 97%, 78%)",
      description: lightGuidance,
      token: "Orange200",
    },
    Orange300: {
      hexCode: "#FFA037",
      hsl: "hsl(33, 100%, 62%)",
      description: lightGuidance,
      token: "Orange300",
    },
    Orange400: {
      hexCode: "#E46F00",
      hsl: "hsl(30, 100%, 45%)",
      description: darkGuidance,
      token: "Orange400",
    },
    Orange500: {
      hexCode: "#B14C00",
      hsl: "hsl(30, 100%, 35%)",
      description: darkGuidance,
      token: "Orange500",
    },
    Orange600: {
      hexCode: "#7A2F00",
      hsl: "hsl(30, 100%, 24%)",
      description: darkGuidance,
      token: "Orange600",
    },
  },
};

type TooltipTriggerProps = {
  color: {
    cssVariable?: string;
    description?: string;
    hexCode: string;
    name?: string;
    token: string;
  };
};

function App() {
  const TooltipTrigger = ({ color }: TooltipTriggerProps) => (
    <div
      style={{
        backgroundColor: color.hexCode,
        boxSizing: "border-box",
        padding: "16px",
        borderColor: "#DFE0E1",
        width: "100%",
        height: "140px",
        borderRadius: "12px",
        marginBottom: "16px",
        borderWidth: "1px",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "start",
      }}
    >
      {color.description && (
        <Tooltip>
          <Tooltip.Trigger>
            <div
              style={{
                borderRadius: "100%",
                width: "24px",
                height: "24px",
                backgroundColor:
                  color.description === darkGuidance ? "white" : "black",
              }}
            />
          </Tooltip.Trigger>
          <Tooltip.Content>{color.description}</Tooltip.Content>
        </Tooltip>
      )}
    </div>
  );

  interface CardLockupProps extends TooltipTriggerProps {
    key: React.Key;
  }

  const CardLockup = ({ color, key }: CardLockupProps) => (
    <div key={key}>
      <TooltipTrigger color={color} />
      <Flex gap="2" direction="column">
        <Text variant="body" inline style={{ fontWeight: 700 }}>
          {color.name}
        </Text>
        <Flex gap="4">
          <Text>{color.token}</Text>
          <Text variant="body" subdued>
            {color.hexCode}
          </Text>
        </Flex>
      </Flex>
    </div>
  );

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="4">
      {Object.entries(colors.oranges).map(([key, color]) => (
        <CardLockup key={key} color={color} />
      ))}
    </Grid>
  );
}

export default App;
