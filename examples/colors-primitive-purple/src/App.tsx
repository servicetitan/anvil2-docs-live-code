import { Tooltip, Flex, Text, Grid } from "@servicetitan/anvil2";

const darkGuidance = "Works with white text or background";
const lightGuidance = "Works with black text or background";

const colors = {
  purples: {
    Purple100: {
      hexCode: "#F1EDFF",
      description: lightGuidance,
      token: "Purple100",
    },
    Purple200: {
      hexCode: "#C1B6F2",
      description: lightGuidance,
      token: "Purple200",
    },
    Purple300: {
      hexCode: "#8772E5",
      description: darkGuidance,
      token: "Purple300",
    },
    Purple400: {
      hexCode: "#6954C0",
      description: darkGuidance,
      token: "Purple400",
    },
    Purple500: {
      hexCode: "#4F3A9E",
      description: darkGuidance,
      token: "Purple500",
    },
    Purple600: {
      hexCode: "#422799",
      description: darkGuidance,
      token: "Purple600",
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
      {Object.entries(colors.purples).map(([key, color]) => (
        <CardLockup key={key} color={color} />
      ))}
    </Grid>
  );
}

export default App;
