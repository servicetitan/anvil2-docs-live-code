import { Tooltip, Flex, Text, Grid } from "@servicetitan/anvil2";

const darkGuidance = "Works with white text or background";
const lightGuidance = "Works with black text or background";

const colors = {
  neutrals: {
    Neutral0: {
      hexCode: "#FFFFFF",
      token: "Neutral0",
      description: lightGuidance,
    },
    Neutral10: {
      hexCode: "#FCFCFC",
      token: "Neutral10",
      description: lightGuidance,
    },
    Neutral20: {
      hexCode: "#FAFAFA",
      token: "Neutral20",
      description: lightGuidance,
    },
    Neutral30: {
      hexCode: "#F7F7F7",
      token: "Neutral30",
      description: lightGuidance,
    },
    Neutral40: {
      hexCode: "#F5F5F5",
      token: "Neutral40",
      description: lightGuidance,
    },
    Neutral50: {
      hexCode: "#EEEEEE",
      token: "Neutral50",
      description: lightGuidance,
    },
    Neutral60: {
      hexCode: "#DFE0E1",
      token: "Neutral60",
      description: lightGuidance,
    },
    Neutral70: {
      hexCode: "#BCBCBD",
      token: "Neutral70",
      description: lightGuidance,
    },
    Neutral80: {
      hexCode: "#949596",
      token: "Neutral80",
      description: darkGuidance,
    },
    Neutral90: {
      hexCode: "#737475",
      token: "Neutral90",
      description: darkGuidance,
    },
    Neutral100: {
      hexCode: "#606162",
      token: "Neutral100",
      description: darkGuidance,
    },
    Neutral200: {
      hexCode: "#444445",
      token: "Neutral200",
      description: darkGuidance,
    },
    Neutral300: {
      hexCode: "#2D2E31",
      token: "Neutral300",
      description: darkGuidance,
    },
    Neutral400: {
      hexCode: "#141414",
      token: "Neutral400",
      description: darkGuidance,
    },
    Neutral500: {
      hexCode: "#040404",
      token: "Neutral500",
      description: darkGuidance,
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
    <Grid templateColumns="repeat(4, 1fr)" gap="4">
      {Object.entries(colors.neutrals).map(([key, color]) => (
        <CardLockup key={key} color={color} />
      ))}
    </Grid>
  );
}

export default App;
