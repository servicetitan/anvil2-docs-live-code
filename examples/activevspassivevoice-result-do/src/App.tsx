import { toast } from "@servicetitan/anvil2";
import { useEffect, useRef } from "react";

function App() {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;

      toast.success({
        title: "Registration Successful",
        message: "Your account has been created.",
      });
    }
  }, []);

  return <div style={{ height: "300px" }}></div>;
}

export default App;
