import type { ComponentType, SVGProps } from "react";
import {
  AnvilProvider,
  Chip,
  Flex,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import ResPropertyCareLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-property-care-first-use-light.svg";
import ResPropertyCareDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-property-care-first-use-dark.svg";
import ResExteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-exteriors-first-use-light.svg";
import ResExteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-exteriors-first-use-dark.svg";
import ResMechanicalLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-mechanical-first-use-light.svg";
import ResMechanicalDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-mechanical-first-use-dark.svg";
import ResEmergencyComplianceLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-emergency-compliance-first-use-light.svg";
import ResEmergencyComplianceDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-emergency-compliance-first-use-dark.svg";
import ResInteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-interiors-first-use-light.svg";
import ResInteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-interiors-first-use-dark.svg";
import ComPropertyCareLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-property-care-first-use-light.svg";
import ComPropertyCareDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-property-care-first-use-dark.svg";
import ComExteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-exteriors-first-use-light.svg";
import ComExteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-exteriors-first-use-dark.svg";
import ComMechanicalLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-mechanical-first-use-light.svg";
import ComMechanicalDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-mechanical-first-use-dark.svg";
import ComEmergencyComplianceLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-emergency-compliance-first-use-light.svg";
import ComEmergencyComplianceDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-emergency-compliance-first-use-dark.svg";
import ComInteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-interiors-first-use-light.svg";
import ComInteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-interiors-first-use-dark.svg";

// Matches the Chip fills from Figma; Chip derives the border and text
// colors from this background automatically via useAccessibleColor.
const RESIDENTIAL_CHIP_COLOR = "#e0f2ff";
const COMMERCIAL_CHIP_COLOR = "#f1edff";

type Trade = {
  label: string;
  Light: ComponentType<SVGProps<SVGSVGElement>>;
  Dark: ComponentType<SVGProps<SVGSVGElement>>;
};

const RESIDENTIAL_TRADES: Trade[] = [
  {
    label: "Property Care",
    Light: ResPropertyCareLight,
    Dark: ResPropertyCareDark,
  },
  { label: "Exteriors", Light: ResExteriorsLight, Dark: ResExteriorsDark },
  { label: "Mechanical", Light: ResMechanicalLight, Dark: ResMechanicalDark },
  {
    label: "Emergency & Compliance",
    Light: ResEmergencyComplianceLight,
    Dark: ResEmergencyComplianceDark,
  },
  { label: "Interiors", Light: ResInteriorsLight, Dark: ResInteriorsDark },
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
