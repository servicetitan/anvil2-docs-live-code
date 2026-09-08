import type { ComponentType, SVGProps } from "react";
import {
  AnvilProvider,
  Flex,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import {
  EmptyStateError,
  EmptyStateFirstUse,
  EmptyStateUserCleared,
} from "@servicetitan/anvil2-illustrations";

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

  return (
    <AnvilProvider themeData={{ mode }}>
      <Flex gap={6} wrap="wrap">
        <IllustrationWithCallouts
          Illustration={EmptyStateFirstUse}
          callouts={[
            { top: 67, left: 181 },
            { top: 110, left: 172 },
          ]}
        />
        <IllustrationWithCallouts
          Illustration={EmptyStateUserCleared}
          callouts={[
            { top: 41, left: 147 },
            { top: 97, left: 94 },
            { top: 116, left: 177 },
          ]}
        />
        <IllustrationWithCallouts
          Illustration={EmptyStateError}
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
