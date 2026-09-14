import { Flex, Icon, Text, type Svg } from "@servicetitan/anvil2";
import { InteractiveCard } from "@servicetitan/anvil2/beta";
import Appointments from "@servicetitan/anvil2/assets/icons/st/appointments.svg";

type DecorativeIconSize = "small" | "medium" | "large" | "xlarge";

const decorativeIconCircleSize: Record<DecorativeIconSize, string> = {
  small: "var(--a2-size-6, 24px)",
  medium: "var(--a2-size-8, 32px)",
  large: "var(--a2-size-10, 40px)",
  xlarge: "var(--a2-size-12, 48px)",
};

function DecorativeIcon({
  svg,
  size = "medium",
}: {
  svg: Svg;
  size?: DecorativeIconSize;
}) {
  return (
    <Icon
      svg={svg}
      size={size}
      color="var(--a2-color-blue-700)"
      aria-hidden
      style={{
        alignItems: "center",
        background: "var(--a2-color-blue-100)",
        borderRadius: "50%",
        display: "inline-flex",
        flexShrink: 0,
        height: decorativeIconCircleSize[size],
        justifyContent: "center",
        width: decorativeIconCircleSize[size],
      }}
    />
  );
}

function App() {
  return (
    <InteractiveCard
      wrapperProps={{ "aria-label": "Appointments card" }}
      actionProps={{
        "aria-label": "Appointments",
        onClick: () => console.log("Appointments"),
      }}
      contentProps={{
        padding: "medium",
        style: { width: "min(446px, 100%)", boxSizing: "border-box" },
      }}
    >
      <Flex alignItems="center" gap={4}>
        <DecorativeIcon svg={Appointments} size="large" />
        <Text variant="headline" el="h3" size="small">
          Appointments
        </Text>
      </Flex>
    </InteractiveCard>
  );
}

export default App;
