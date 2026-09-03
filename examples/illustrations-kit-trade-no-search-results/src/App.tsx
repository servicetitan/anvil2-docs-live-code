import type { ComponentType, SVGProps } from "react";
import {
  AnvilProvider,
  Chip,
  Flex,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import ResPropertyCareLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-property-care-no-search-results-light.svg";
import ResPropertyCareDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-property-care-no-search-results-dark.svg";
import ResMechanicalLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-mechanical-no-search-results-light.svg";
import ResMechanicalDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-mechanical-no-search-results-dark.svg";
import ResEvergreenLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-evergreen-no-search-results-light.svg";
import ResEvergreenDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-evergreen-no-search-results-dark.svg";
import ComPropertyCareLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-property-care-no-search-results-light.svg";
import ComPropertyCareDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-property-care-no-search-results-dark.svg";
import ComExteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-exteriors-no-search-results-light.svg";
import ComExteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-exteriors-no-search-results-dark.svg";
import ComMechanicalLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-mechanical-no-search-results-light.svg";
import ComMechanicalDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-mechanical-no-search-results-dark.svg";
import ComEmergencyComplianceLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-emergency-compliance-no-search-results-light.svg";
import ComEmergencyComplianceDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-emergency-compliance-no-search-results-dark.svg";
import ComInteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-interiors-no-search-results-light.svg";
import ComInteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-interiors-no-search-results-dark.svg";

// Matches the Chip fills from Figma; Chip derives the border and text
// colors from this background automatically via useAccessibleColor.
const RESIDENTIAL_CHIP_COLOR = "#e0f2ff";
const COMMERCIAL_CHIP_COLOR = "#f1edff";

type Trade = {
  label: string;
  Light: ComponentType<SVGProps<SVGSVGElement>>;
  Dark: ComponentType<SVGProps<SVGSVGElement>>;
};

// Exteriors, Emergency & Compliance, and Interiors share the generic
// residential no-search-results illustration in Figma.
const RESIDENTIAL_TRADES: Trade[] = [
  {
    label: "Property Care",
    Light: ResPropertyCareLight,
    Dark: ResPropertyCareDark,
  },
  { label: "Mechanical", Light: ResMechanicalLight, Dark: ResMechanicalDark },
  {
    label: "Exteriors, Emergency & Compliance, Interiors",
    Light: ResEvergreenLight,
    Dark: ResEvergreenDark,
  },
];

const COMMERCIAL_TRADES: Trade[] = [
  {
    label: "Property Care",
    Light: ComPropertyCareLight,
    Dark: ComPropertyCareDark,
  },
  { label: "Exteriors", Light: ComExteriorsLight, Dark: ComExteriorsDark },
  { label: "Mechanical", Light: ComMechanicalLight, Dark: ComMechanicalDark },
  {
    label: "Emergency & Compliance",
    Light: ComEmergencyComplianceLight,
    Dark: ComEmergencyComplianceDark,
  },
  { label: "Interiors", Light: ComInteriorsLight, Dark: ComInteriorsDark },
];

function TradeRow({
  chipLabel,
  chipColor,
  trades,
  mode,
}: {
  chipLabel: string;
  chipColor: string;
  trades: Trade[];
  mode: "light" | "dark";
}) {
  return (
    <Flex direction="column" gap={3} style={{ width: "fit-content" }}>
      <Chip label={chipLabel} size="small" color={chipColor} />
      <Flex gap={3} alignItems="flex-start">
        {trades.map(({ label, Light, Dark }) => {
          const Illustration = mode === "dark" ? Dark : Light;
          return (
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
                  textAlign: "center",
                }}
              >
                {label}
              </Text>
            </Flex>
          );
        })}
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
          mode={mode}
        />
        <TradeRow
          chipLabel="Commercial"
          chipColor={COMMERCIAL_CHIP_COLOR}
          trades={COMMERCIAL_TRADES}
          mode={mode}
        />
      </Flex>
    </AnvilProvider>
  );
}

export default App;
