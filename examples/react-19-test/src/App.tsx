import { Avatar, Flex } from "@servicetitan/anvil2";
import {
  useRef,
  useLayoutEffect,
  useState,
  useOptimistic,
  type ComponentPropsWithRef,
} from "react";

function MyInput({ ref, ...props }: ComponentPropsWithRef<"input">) {
  return <input {...props} ref={ref} />;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentName, setCurrentName] = useState("Derek Watson");
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const submitAction = async (formData: FormData) => {
    const newName = (formData.get("name") ?? "") as string;
    setOptimisticName(newName);
    const updatedName = await new Promise<string>((res) =>
      setTimeout(() => res(newName), 500),
    );
    setCurrentName(updatedName);
  };

  return (
    <form action={submitAction}>
      <Flex direction="column" gap={4}>
        <Avatar
          name={currentName}
          color="#e41c38"
          status="online"
          size="large"
        />
        <MyInput
          ref={inputRef}
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
          defaultValue={optimisticName}
        />
      </Flex>
    </form>
  );
}

export default App;
