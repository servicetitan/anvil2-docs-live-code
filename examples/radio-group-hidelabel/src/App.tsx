import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Payment method" hideLabel flexDirection="row">
      <Radio name="payment" value="cc" label="Credit card" />
      <Radio name="payment" value="bank" label="Bank transfer" />
      <Radio name="payment" value="paypal" label="PayPal" />
    </Radio.Group>
  );
}

export default App;
