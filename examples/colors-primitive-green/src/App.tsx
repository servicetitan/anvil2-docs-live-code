import { Tooltip, Flex, Text, Grid } from "@servicetitan/anvil2";

const darkGuidance = "Works with white text or background";
const lightGuidance = "Works with black text or background";

const colors = {
  greens: {
    Green100: {
      hexCode: "#CEF8E0",
      hsl: "hsl(144, 78%, 85%)",
      description: lightGuidance,
      token: "Green100",
    },
    Green200: {
      hexCode: "#89ECBC",
      hsl: "hsl(152, 72%, 72%)",
      description: lightGuidance,
      token: "Green200",
    },
    Green300: {
      hexCode: "#49CC93",
      hsl: "hsl(152, 55%, 54%)",
      description: lightGuidance,
      token: "Green300",
    },
    Green400: {
      hexCode: "#15A46E",
      hsl: "hsl(156, 78%, 36%)",
      description: darkGuidance,
      token: "Green400",
    },
    Green500: {
      hexCode: "#007A4D",
      hsl: "hsl(164, 100%, 24%)",
      description: darkGuidance,
      token: "Green500",
    },
    Green600: {
      hexCode: "#005132",
      hsl: "hsl(164, 100%, 16%)",
      description: darkGuidance,
      token: "Green600",
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
      {Object.entries(colors.greens).map(([key, color]) => (
        <CardLockup key={key} color={color} />
      ))}
    </Grid>
  );
}

export default App;
