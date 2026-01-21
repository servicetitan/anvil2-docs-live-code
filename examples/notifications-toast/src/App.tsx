import { toast, ProgressBar } from "@servicetitan/anvil2";
import { useEffect, useRef } from "react";

function App() {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;

      toast.success({
        title: "Successful import",
        message: (
          <ProgressBar label="" max="100" value="100" />
        ) as unknown as string,
        actions: {
          primary: {
            label: "View Import",
          },
        },
      });
      toast.info({
        title: "Import adjustments",
        message: (
          <ProgressBar label="In progress" value="30" />
        ) as unknown as string,
        actions: {
          primary: {
            label: "Cancel",
          },
        },
      });
    }
  }, []);

  return <div style={{ width: "100%", height: "100%" }}></div>;
}

export default App;
