import { Tooltip, Flex, Text, Grid } from "@servicetitan/anvil2";

const darkGuidance = "Works with white text or background";
const lightGuidance = "Works with black text or background";

const colors = {
  yellows: {
    Yellow100: {
      hexCode: "#FFF9E2",
      description: lightGuidance,
      token: "Yellow100",
    },
    Yellow200: {
      hexCode: "#FFF0B1",
      description: lightGuidance,
      token: "Yellow200",
    },
    Yellow300: {
      hexCode: "#FFE278",
      description: lightGuidance,
      token: "Yellow300",
    },
    Yellow400: {
      hexCode: "#FFC902",
      description: lightGuidance,
      token: "Yellow400",
    },
    Yellow500: {
      hexCode: "#FFBE00",
      description: lightGuidance,
      token: "Yellow500",
    },
    Yellow600: {
      hexCode: "#DE9500",
      description: lightGuidance,
      token: "Yellow600",
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
      {Object.entries(colors.yellows).map(([key, color]) => (
        <CardLockup key={key} color={color} />
      ))}
    </Grid>
  );
}

export default App;
