import {
  EditCard,
  Flex,
  Text,
  useEditCard,
  type EditCardState,
} from "@servicetitan/anvil2";

const bodyCopy: Record<EditCardState, string> = {
  "not started": "Not started.",
  "in progress": "Cancel returns this card to the state it had before editing.",
  error: "This card was already in error. Cancel after editing returns here.",
  complete: "This card is saved. Cancel after editing returns here.",
};

function ManagedCard({
  initialState,
  title,
}: {
  initialState: "complete" | "error";
  title: string;
}) {
  const { state, onStateChange } = useEditCard({ initialState });

  return (
    <EditCard
      headerText={{
        "not started": title,
        "in progress": `Editing ${title}`,
        error: `${title} needs attention`,
        complete: title,
      }}
      state={state}
      onStateChange={onStateChange}
    >
      <Text>{bodyCopy[state]}</Text>
    </EditCard>
  );
}

function App() {
  return (
    <Flex direction="column" gap="4">
      <ManagedCard initialState="complete" title="Primary contact" />
      <ManagedCard initialState="error" title="Billing contact" />
    </Flex>
  );
}

export default App;
