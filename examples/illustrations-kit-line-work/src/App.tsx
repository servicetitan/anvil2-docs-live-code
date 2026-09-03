import type { ComponentType, SVGProps } from "react";
import {
  AnvilProvider,
  Flex,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import FirstUseLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-first-use-light.svg";
import FirstUseDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-first-use-dark.svg";
import UserClearedLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-user-cleared-light.svg";
import UserClearedDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-user-cleared-dark.svg";
import ErrorStateLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-error-light.svg";
import ErrorStateDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-error-dark.svg";

const ILLUSTRATION_WIDTH = 215;
const ILLUSTRATION_HEIGHT = 180;
const CALLOUT_COLOR = "var(--a2-color-green-500)";

type CalloutPosition = { top: number; left: number };

function Callout({ top, left }: CalloutPosition) {
  return (
    <Flex
      alignItems="center"
      gap={1}
      style={{ position: "absolute", top, left }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: CALLOUT_COLOR,
        }}
      />
      <div style={{ width: 56, borderTop: `2px dashed ${CALLOUT_COLOR}` }} />
      <span style={{ color: CALLOUT_COLOR, fontStyle: "italic", fontSize: 12 }}>
        2pt
      </span>
    </Flex>
  );
}

function IllustrationWithCallouts({
  Illustration,
  callouts,
}: {
  Illustration: ComponentType<SVGProps<SVGSVGElement>>;
  callouts: CalloutPosition[];
}) {
  return (
    <div
      style={{
        position: "relative",
        width: ILLUSTRATION_WIDTH + 100,
        height: ILLUSTRATION_HEIGHT,
      }}
    >
      <Illustration
        aria-hidden="true"
        width={ILLUSTRATION_WIDTH}
        height={ILLUSTRATION_HEIGHT}
      />
      {callouts.map((callout) => (
        <Callout key={callout.top} {...callout} />
      ))}
    </div>
  );
}

function App() {
  const { mode } = usePrefersColorScheme();

  const FirstUse = mode === "dark" ? FirstUseDark : FirstUseLight;
  const UserCleared = mode === "dark" ? UserClearedDark : UserClearedLight;
  const ErrorState = mode === "dark" ? ErrorStateDark : ErrorStateLight;

  return (
    <AnvilProvider themeData={{ mode }}>
      <Flex gap={6} wrap="wrap">
        <IllustrationWithCallouts
          Illustration={FirstUse}
          callouts={[
            { top: 67, left: 181 },
            { top: 110, left: 172 },
          ]}
        />
        <IllustrationWithCallouts
          Illustration={UserCleared}
          callouts={[
            { top: 41, left: 147 },
            { top: 97, left: 94 },
            { top: 116, left: 177 },
          ]}
        />
        <IllustrationWithCallouts
          Illustration={ErrorState}
          callouts={[
            { top: 95, left: 93 },
            { top: 122, left: 149 },
          ]}
        />
      </Flex>
    </AnvilProvider>
  );
}

export default App;
