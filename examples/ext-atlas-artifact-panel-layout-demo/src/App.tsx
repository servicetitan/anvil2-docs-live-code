import {
  ArtifactCard,
  ArtifactPanel,
  ArtifactPanelLayout,
} from "@servicetitan/anvil2-ext-atlas";
import { Flex, Text } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <Flex direction="column" style={{ width: "1000px", height: "500px" }}>
      <ArtifactPanelLayout style={{ flex: 1, minHeight: 0 }}>
        <Flex
          direction="column"
          gap={3}
          style={{ flex: 1, padding: 16, minWidth: 0 }}
        >
          <Text>
            I checked invoice 10492 against the service agreement and technician
            notes. One thing to flag: labor came in 1.5 hours over the approved
            estimate.
          </Text>
          <ArtifactCard
            title="Insights for Invoice #10492"
            description="Single-visit industrial install, closed under quote with a 40% margin."
            artifactId="insight-1"
            active={activeId === "insight-1"}
            onClick={() => setActiveId("insight-1")}
          />
        </Flex>
        <ArtifactPanel
          isOpen={activeId !== null}
          onOpenChange={(open: boolean) => {
            if (!open) setActiveId(null);
          }}
          position="right"
          title="Supplemental info"
          description="Variance details for invoice 10492"
          triggerKey={activeId ?? undefined}
        >
          Resize the surrounding viewport to see the panel switch between inline
          and overlay modes.
        </ArtifactPanel>
      </ArtifactPanelLayout>
    </Flex>
  );
}

export default App;
