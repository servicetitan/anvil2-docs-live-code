import { Overflow, Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Overflow
      direction="column"
      gap="4"
      height={200}
      truncate={{
        expandText: "Show more...",
        collapseText: "Show less...",
      }}
    >
      <Radio.Group legend="Choose fruit(s)" required>
        <Radio name="fruit" value="Citron" label="Citron" />
        <Radio name="fruit" value="Clementine" label="Clementine" />
        <Radio name="fruit" value="Grapefruit" label="Grapefruit" />
        <Radio name="fruit" value="Kumquat" label="Kumquat" />
        <Radio name="fruit" value="Lemon" label="Lemon" />
        <Radio name="fruit" value="Lime" label="Lime" />
        <Radio name="fruit" value="Minneola" label="Minneola" />
        <Radio name="fruit" value="Orange" label="Orange" />
        <Radio name="fruit" value="Pomelo" label="Pomelo" />
        <Radio name="fruit" value="Satsuma" label="Satsuma" />
        <Radio name="fruit" value="Tangerine" label="Tangerine" />
        <Radio name="fruit" value="Tangelo" label="Tangelo" />
        <Radio name="fruit" value="Ugli" label="Ugli" />
        <Radio name="fruit" value="Tangor" label="Tangor" />
        <Radio name="fruit" value="Yuzu" label="Yuzu" />
      </Radio.Group>
    </Overflow>
  );
}

export default App;
