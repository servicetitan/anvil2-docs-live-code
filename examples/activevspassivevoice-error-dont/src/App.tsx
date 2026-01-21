import { toast } from "@servicetitan/anvil2";
import { useEffect, useRef } from "react";

function App() {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;

      toast.danger({
        title: "Request failed",
        message: "Your payment couldn't be processed.",
      });
    }
  }, []);

  return <div style={{ height: "300px" }}></div>;
}

export default App;
