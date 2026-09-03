import {
  AnvilProvider,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import SuccessLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-success-light.svg";
import SuccessDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-success-dark.svg";

const ILLUSTRATION_WIDTH = 167;
const ILLUSTRATION_HEIGHT = 140;
const SWATCH_WIDTH = 90;
const SWATCH_HEIGHT = 34;
const SWATCH_OFFSET = 24;
const CALLOUT_COLOR = "var(--a2-color-green-500)";

const SWATCH_COLORS = {
  light: { base: "#113064", overlay: "#B5DEFF" },
  dark: { base: "#D6E5FF", overlay: "#0265DC" },
};

function Dot({ top, left }: { top: number; left: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top: top - 3,
        left: left - 3,
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: CALLOUT_COLOR,
      }}
    />
  );
}

function App() {
  const { mode } = usePrefersColorScheme();

  const Success = mode === "dark" ? SuccessDark : SuccessLight;
  const swatchColors = SWATCH_COLORS[mode];

  const illustrationDot = { top: 66, left: 68 };
  const swatchDot = { top: 17, left: 57 };
  const bridgeTop = 0;

  return (
    <AnvilProvider themeData={{ mode }}>
      <div style={{ position: "relative", width: 460, height: 160 }}>
        <Success
          aria-hidden="true"
          width={ILLUSTRATION_WIDTH}
          height={ILLUSTRATION_HEIGHT}
          style={{ position: "absolute", top: 20, left: 0 }}
        />
        <div
          style={{
            position: "absolute",
            top: 20 + swatchDot.top - SWATCH_HEIGHT / 2,
            left: 175,
            width: SWATCH_WIDTH + SWATCH_OFFSET,
            height: SWATCH_HEIGHT,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: SWATCH_OFFSET,
              width: SWATCH_WIDTH,
              height: SWATCH_HEIGHT,
              background: swatchColors.base,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: SWATCH_WIDTH,
              height: SWATCH_HEIGHT,
              background: swatchColors.overlay,
              opacity: 0.5,
            }}
          />
        </div>
        <Text
          subdued
          style={{
            position: "absolute",
            top: 20 + swatchDot.top + SWATCH_HEIGHT / 2 + 8,
            left: 175,
            width: 210,
            fontStyle: "italic",
            fontSize: 12,
          }}
        >
          Layering two colors with top layer at 50% opacity to create
          depth/shading
        </Text>
        <div
          style={{
            position: "absolute",
            top: 20 + bridgeTop,
            left: 20 + illustrationDot.left,
            width: 1,
            height: 20 + illustrationDot.top - (20 + bridgeTop),
            borderLeft: `1px dashed ${CALLOUT_COLOR}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20 + bridgeTop,
            left: 20 + illustrationDot.left,
            width: 175 + swatchDot.left - (20 + illustrationDot.left),
            height: 1,
            borderTop: `1px dashed ${CALLOUT_COLOR}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20 + bridgeTop,
            left: 175 + swatchDot.left,
            width: 1,
            height: 20 + swatchDot.top - (20 + bridgeTop),
            borderLeft: `1px dashed ${CALLOUT_COLOR}`,
          }}
        />
        <Dot top={20 + illustrationDot.top} left={20 + illustrationDot.left} />
        <Dot top={20 + swatchDot.top} left={175 + swatchDot.left} />
      </div>
    </AnvilProvider>
  );
}

export default App;
