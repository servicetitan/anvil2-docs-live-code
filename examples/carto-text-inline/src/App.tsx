import { Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div>
      <Text inline text="Inline body fragment, " />
      <Text inline size="featured" text="featured-size inline, " />
      <Text inline size="compact" text="and a compact inline." />
    </div>
  );
}

export default App;
