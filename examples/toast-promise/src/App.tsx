import { toast, Flex, Button } from "@servicetitan/anvil2";

function App() {
  const config = {
    loading: {
      title: "Loading...",
      message: "This is loading!",
    },
    success: (data: string) => ({
      title: "Success!",
      message: data,
    }),
    error: (error: string) => ({
      title: "Error!",
      message: `${error}`,
    }),
  };

  const promiseResolved: () => Promise<string> = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Promised message!"), 2000);
    });
  };

  const promiseRejected: () => Promise<string> = async () => {
    return new Promise((_, reject) => {
      setTimeout(() => reject("The promise was rejected."), 2000);
    });
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <Flex gap="2">
        <Button
          onClick={() => {
            toast.promise(promiseResolved(), config);
          }}
        >
          Resolve
        </Button>
        <Button
          onClick={() => {
            toast.promise(promiseRejected(), config);
          }}
        >
          Reject
        </Button>
      </Flex>
    </div>
  );
}

export default App;
