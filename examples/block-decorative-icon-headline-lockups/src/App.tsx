import { Flex, Icon, Text, type Svg } from "@servicetitan/anvil2";
import Face2 from "@servicetitan/anvil2/assets/icons/material/round/face_2.svg";

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

type HeadlineLockup =
  | {
      decorativeSize: DecorativeIconSize;
      variant: "headline";
      el: "h1" | "h2" | "h3" | "h4";
      size: DecorativeIconSize;
      label: string;
    }
  | {
      decorativeSize: DecorativeIconSize;
      variant: "eyebrow";
      size: "medium";
      label: string;
    };

const headlineLockups: HeadlineLockup[] = [
  {
    decorativeSize: "xlarge",
    variant: "headline",
    el: "h1",
    size: "xlarge",
    label: "This is a headline!",
  },
  {
    decorativeSize: "large",
    variant: "headline",
    el: "h2",
    size: "large",
    label: "This is a headline!",
  },
  {
    decorativeSize: "medium",
    variant: "headline",
    el: "h3",
    size: "medium",
    label: "This is a headline!",
  },
  {
    decorativeSize: "small",
    variant: "headline",
    el: "h4",
    size: "small",
    label: "This is a headline!",
  },
  {
    decorativeSize: "small",
    variant: "eyebrow",
    size: "medium",
    label: "This is a label!",
  },
];

function App() {
  return (
    <Flex direction="column" gap={6} alignItems="start">
      {headlineLockups.map((lockup) => (
        <Flex
          key={`${lockup.variant}-${lockup.decorativeSize}-${lockup.label}`}
          alignItems="center"
          gap={4}
        >
          <DecorativeIcon svg={Face2} size={lockup.decorativeSize} />
          {lockup.variant === "headline" ? (
            <Text variant="headline" el={lockup.el} size={lockup.size}>
              {lockup.label}
            </Text>
          ) : (
            <Text variant="eyebrow" size={lockup.size}>
              {lockup.label}
            </Text>
          )}
        </Flex>
      ))}
    </Flex>
  );
}

export default App;
