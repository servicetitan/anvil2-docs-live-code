import type { ComponentType, SVGProps } from "react";
import {
  AnvilProvider,
  Chip,
  Flex,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import ResidentialLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-evergreen-user-cleared-light.svg";
import ResidentialDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-evergreen-user-cleared-dark.svg";
import ComPropertyCareLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-property-care-user-cleared-light.svg";
import ComPropertyCareDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-property-care-user-cleared-dark.svg";
import ComExteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-exteriors-user-cleared-light.svg";
import ComExteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-exteriors-user-cleared-dark.svg";
import ComMechanicalLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-mechanical-user-cleared-light.svg";
import ComMechanicalDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-mechanical-user-cleared-dark.svg";
import ComEmergencyComplianceLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-emergency-compliance-user-cleared-light.svg";
import ComEmergencyComplianceDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-emergency-compliance-user-cleared-dark.svg";
import ComInteriorsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-interiors-user-cleared-light.svg";
import ComInteriorsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-interiors-user-cleared-dark.svg";

// Matches the Chip fills from Figma; Chip derives the border and text
// colors from this background automatically via useAccessibleColor.
const RESIDENTIAL_CHIP_COLOR = "#e0f2ff";
const COMMERCIAL_CHIP_COLOR = "#f1edff";

type Trade = {
  label: string;
  Light: ComponentType<SVGProps<SVGSVGElement>>;
  Dark: ComponentType<SVGProps<SVGSVGElement>>;
};

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

function TradeLabel({ children }: { children: string }) {
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

  const Residential = mode === "dark" ? ResidentialDark : ResidentialLight;

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
            <IllustrationBox Illustration={Residential} />
            <TradeLabel>
              Property Care, Exteriors, Mechanical, Emergency & Compliance,
              Interiors
            </TradeLabel>
          </Flex>
        </Flex>
        <Flex direction="column" gap={3} style={{ width: "fit-content" }}>
          <Chip label="Commercial" size="small" color={COMMERCIAL_CHIP_COLOR} />
          <Flex gap={3} alignItems="flex-start">
            {COMMERCIAL_TRADES.map(({ label, Light, Dark }) => {
              const Illustration = mode === "dark" ? Dark : Light;
              return (
                <Flex
                  key={label}
                  direction="column"
                  alignItems="center"
                  gap={2}
                >
                  <IllustrationBox Illustration={Illustration} />
                  <TradeLabel>{label}</TradeLabel>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </AnvilProvider>
  );
}

export default App;
