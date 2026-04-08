import { toast, Flex, Button } from "@servicetitan/anvil2";
import { useEffect, useRef, useState } from "react";

function App() {
  const [toastId, setToastId] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const startProgress = () => {
    let progress = 0;

    const id = toast.info({
      title: "Uploading file...",
      message: "Your file is being uploaded.",
      duration: false,
      progress,
      onDismiss: () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setToastId(null);
      },
    });

    setToastId(id);

    intervalRef.current = setInterval(() => {
      progress += 10;
      toast.update(id, { progress });

      if (progress >= 100) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        toast.update(id, {
          title: "Upload complete",
          message: "Your file has been uploaded successfully.",
          status: "success",
          progress: 100,
          duration: 5000,
        });
        setToastId(null);
      }
    }, 400);
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <Flex gap="2">
        <Button
          onClick={startProgress}
          appearance="primary"
          disabled={toastId !== null}
        >
          Upload file
        </Button>
      </Flex>
    </div>
  );
}

export default App;
