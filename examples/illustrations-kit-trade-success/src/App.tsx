import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  AnvilProvider,
  Chip,
  Flex,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import {
  EmptyStateCommercialEvergreenSuccess,
  EmptyStateResidentialEvergreenSuccess,
} from "@servicetitan/anvil2-illustrations";

// Matches the Chip fills from Figma; Chip derives the border and text
// colors from this background automatically via useAccessibleColor.
const RESIDENTIAL_CHIP_COLOR = "#e0f2ff";
const COMMERCIAL_CHIP_COLOR = "#f1edff";

const TRADES_LABEL =
  "Property Care, Exteriors, Mechanical, Emergency & Compliance, Interiors";

function IllustrationBox({
  Illustration,
}: {
  Illustration: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <div
      style={{
        height: 116,
        width: 170,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Illustration
        aria-hidden="true"
        style={{ maxWidth: 170, maxHeight: 116, width: "auto", height: "auto" }}
      />
    </div>
  );
}

function TradeLabel({ children }: { children: ReactNode }) {
  return (
    <Text
      subdued
      style={{
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: "0.02em",
        textAlign: "center",
      }}
    >
      {children}
    </Text>
  );
}

function App() {
  const { mode } = usePrefersColorScheme();

  return (
    <AnvilProvider themeData={{ mode }}>
      <Flex direction="column" gap={6}>
        <Flex direction="column" gap={3} style={{ width: "fit-content" }}>
          <Chip
            label="Residential"
            size="small"
            color={RESIDENTIAL_CHIP_COLOR}
          />
          <Flex direction="column" alignItems="center" gap={2}>
            <IllustrationBox
              Illustration={EmptyStateResidentialEvergreenSuccess}
            />
            <TradeLabel>{TRADES_LABEL}</TradeLabel>
          </Flex>
        </Flex>
        <Flex direction="column" gap={3} style={{ width: "fit-content" }}>
          <Chip label="Commercial" size="small" color={COMMERCIAL_CHIP_COLOR} />
          <Flex direction="column" alignItems="center" gap={2}>
            <IllustrationBox
              Illustration={EmptyStateCommercialEvergreenSuccess}
            />
            <TradeLabel>{TRADES_LABEL}</TradeLabel>
          </Flex>
        </Flex>
      </Flex>
    </AnvilProvider>
  );
}

export default App;
