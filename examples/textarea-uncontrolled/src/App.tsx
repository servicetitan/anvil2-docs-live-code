import { Textarea, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(((e.target as HTMLFormElement)[0] as HTMLInputElement).value);
      }}
    >
      <Flex direction="column" gap="2">
        <Textarea
          label="Comment"
          description="Tell us your thoughts!"
          name="comment"
        />
        <Flex alignSelf="flex-end" gap="2">
          <Button type="reset" size="small">
            Clear
          </Button>
          <Button type="submit" size="small" appearance="primary">
            Leave comment
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}

export default App;
