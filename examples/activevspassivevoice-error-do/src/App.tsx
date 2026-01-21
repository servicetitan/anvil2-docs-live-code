import { toast } from "@servicetitan/anvil2";
import { useEffect, useRef } from "react";

function App() {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;

      toast.danger({
        title: "We couldn't process your payment.",
        message: "Please check your payment method details and try again.",
      });
    }
  }, []);

  return <div style={{ height: "300px" }}></div>;
}

export default App;
