import { useState } from "react";
import { Tab, Button, Flex } from "@servicetitan/anvil2";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Flex direction="column" gap="4" style={{ minWidth: "55rem" }}>
      <Flex gap="2">
        <Button onClick={() => setActiveIndex(0)}>Show Invoices</Button>
        <Button onClick={() => setActiveIndex(1)}>Show Payments</Button>
        <Button onClick={() => setActiveIndex(2)}>Show Vendor Bills</Button>
      </Flex>
      <Tab index={activeIndex} onIndexChange={setActiveIndex}>
        <Tab.List>
          <Tab.Button id="t-invoices" controls="p-invoices">
            Invoices
          </Tab.Button>
          <Tab.Button id="t-payments" controls="p-payments">
            Payments
          </Tab.Button>
          <Tab.Button id="t-vendor-bills" controls="p-vendor-bills">
            Vendor Bills
          </Tab.Button>
        </Tab.List>
        <Tab.Panel id="p-invoices">Invoices Content...</Tab.Panel>
        <Tab.Panel id="p-payments">Payments Content...</Tab.Panel>
        <Tab.Panel id="p-vendor-bills">Vendor Bills Content...</Tab.Panel>
      </Tab>
    </Flex>
  );
}

export default App;
