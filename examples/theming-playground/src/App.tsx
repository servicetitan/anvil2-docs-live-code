import { ThemeProvider, Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card gap="2">
      This card will default to the page&apos;s theme.
      <ThemeProvider mode="dark">
        <Card>
          This card will change color based on the ThemeProvider.mode!
        </Card>
      </ThemeProvider>
    </Card>
  );
}

export default App;
