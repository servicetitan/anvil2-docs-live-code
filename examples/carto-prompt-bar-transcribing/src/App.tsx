import { useState } from "react";
import { PromptBar } from "@servicetitan/carto-react-kit";

function App() {
  const [value, setValue] = useState("");
  const [draftValue, setDraftValue] = useState(
    "What's the weather like in San Francisco today?",
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Active transcription with a live waveform */}
      <PromptBar
        value={value}
        onChange={setValue}
        transcription={{
          active: true,
          source: { type: "preset", name: "speaking" },
        }}
        onCancelTranscription={() => {}}
        onConfirmTranscription={() => {}}
      />

      {/* Text in the prompt — no transcription active */}
      <PromptBar
        value={draftValue}
        onChange={setDraftValue}
        onSend={() => {}}
      />

      {/* Transcription error */}
      <PromptBar
        value={value}
        onChange={setValue}
        transcription={{ active: true, error: "Unable to access microphone" }}
        onCancelTranscription={() => {}}
        onConfirmTranscription={() => {}}
      />
    </div>
  );
}

export default App;
