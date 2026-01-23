import { Tab } from "@servicetitan/anvil2";

function App() {
  return (
    <Tab defaultIndex={0} style={{ minWidth: "55rem" }}>
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
  );
}

export default App;
