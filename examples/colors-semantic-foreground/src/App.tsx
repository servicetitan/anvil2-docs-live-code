import { Tooltip, Flex, Text, Grid } from "@servicetitan/anvil2";

const darkGuidance = "Works with white text or background";
const lightGuidance = "Works with black text or background";

const colors = {
  foregroundColors: {
    default: {
      name: "Default",
      token: "Foreground/Color/Default",
      hexCode: "#141414",
      cssVariable: "--foreground-color",
      description: darkGuidance,
    },
    primary: {
      name: "Primary",
      token: "Foreground/Color/Primary",
      hexCode: "#0265DC",
      cssVariable: "--foreground-color-primary",
      description: darkGuidance,
    },
    subdued: {
      name: "Subdued",
      token: "Foreground/Color/Subdued",
      hexCode: "#737475",
      cssVariable: "--foreground-color-subdued",
      description: darkGuidance,
    },
    danger: {
      name: "Danger",
      token: "Foreground/Color/Danger",
      hexCode: "#E13212",
      cssVariable: "--foreground-color-danger",
      description: darkGuidance,
    },
    inverted: {
      name: "Inverted",
      token: "Foreground/Color/Inverted",
      hexCode: "#FFFFFF",
      cssVariable: "--foreground-color-inverted",
      description: lightGuidance,
    },
    onPrimary: {
      name: "On-Primary",
      token: "Foreground/Color/On-Primary",
      hexCode: "#FFFFFF",
      cssVariable: "--foreground-color-on-primary",
      description: lightGuidance,
    },
    onDanger: {
      name: "On-Danger",
      token: "Foreground/Color/On-Danger",
      hexCode: "#737475",
      cssVariable: "--foreground-color-on-danger",
      description: darkGuidance,
    },
    onWarning: {
      name: "On-Warning",
      token: "Foreground/Color/On-Warning",
      hexCode: "#141414",
      cssVariable: "--foreground-color-on-warning",
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
      {Object.entries(colors.foregroundColors).map(([key, color]) => (
        <CardLockup key={key} color={color} />
      ))}
    </Grid>
  );
}

export default App;
