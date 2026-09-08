import type { ComponentType, SVGProps } from "react";
import {
  AnvilProvider,
  Chip,
  Flex,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import {
  EmptyStateCommercialEmergencyComplianceError,
  EmptyStateCommercialExteriorsError,
  EmptyStateCommercialInteriorsError,
  EmptyStateCommercialMechanicalError,
  EmptyStateCommercialPropertyCareError,
  EmptyStateResidentialEmergencyComplianceError,
  EmptyStateResidentialExteriorsError,
  EmptyStateResidentialInteriorsError,
  EmptyStateResidentialMechanicalError,
  EmptyStateResidentialPropertyCareError,
} from "@servicetitan/anvil2-illustrations";

// Matches the Chip fills from Figma; Chip derives the border and text
// colors from this background automatically via useAccessibleColor.
const RESIDENTIAL_CHIP_COLOR = "#e0f2ff";
const COMMERCIAL_CHIP_COLOR = "#f1edff";

type Trade = {
  label: string;
  Illustration: ComponentType<SVGProps<SVGSVGElement>>;
};

const RESIDENTIAL_TRADES: Trade[] = [
  {
    label: "Property Care",
    Illustration: EmptyStateResidentialPropertyCareError,
  },
  { label: "Exteriors", Illustration: EmptyStateResidentialExteriorsError },
  { label: "Mechanical", Illustration: EmptyStateResidentialMechanicalError },
  {
    label: "Emergency & Compliance",
    Illustration: EmptyStateResidentialEmergencyComplianceError,
  },
  { label: "Interiors", Illustration: EmptyStateResidentialInteriorsError },
];

const COMMERCIAL_TRADES: Trade[] = [
  {
    label: "Property Care",
    Illustration: EmptyStateCommercialPropertyCareError,
  },
  { label: "Exteriors", Illustration: EmptyStateCommercialExteriorsError },
  { label: "Mechanical", Illustration: EmptyStateCommercialMechanicalError },
  {
    label: "Emergency & Compliance",
    Illustration: EmptyStateCommercialEmergencyComplianceError,
  },
  { label: "Interiors", Illustration: EmptyStateCommercialInteriorsError },
];

function TradeRow({
  chipLabel,
  chipColor,
  trades,
}: {
  chipLabel: string;
  chipColor: string;
  trades: Trade[];
}) {
  return (
    <Flex direction="column" gap={3} style={{ width: "fit-content" }}>
      <Chip label={chipLabel} size="small" color={chipColor} />
      <Flex gap={3} alignItems="flex-start">
        {trades.map(({ label, Illustration }) => (
          <Flex key={label} direction="column" alignItems="center" gap={2}>
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
                style={{
                  maxWidth: 170,
                  maxHeight: 116,
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
            <Text
              subdued
              style={{
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

function App() {
  const { mode } = usePrefersColorScheme();

  return (
    <AnvilProvider themeData={{ mode }}>
      <Flex direction="column" gap={6}>
        <TradeRow
          chipLabel="Residential"
          chipColor={RESIDENTIAL_CHIP_COLOR}
          trades={RESIDENTIAL_TRADES}
        />
        <TradeRow
          chipLabel="Commercial"
          chipColor={COMMERCIAL_CHIP_COLOR}
          trades={COMMERCIAL_TRADES}
        />
      </Flex>
    </AnvilProvider>
  );
}

export default App;
