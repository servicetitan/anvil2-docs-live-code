import {
  AgentMessage,
  CartoTheme,
  Markdown,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const source = `### Agreement review

I reviewed the **service agreement** and found *two items* that need attention. The source is available in the [customer record](https://example.com/customer-record).

> The renewal window closes in 14 days.

#### Review checklist

- [x] Confirm payment terms
- [x] Compare the current arrival window
- [ ] Send the renewal notice

#### Risk summary

| Area | Status | Detail |
| --- | --- | --- |
| Payment | Clear | Net 30 terms |
| Renewal | Review | Notice required |
| Schedule | Updated | 9–11 AM |

1. Confirm the proposed schedule.
2. Notify the customer.
3. Archive the previous version.

The current setting is \`autoRenewal: true\`.

\`\`\`json
{
  "arrivalWindow": "9–11 AM",
  "noticeRequired": true
}
\`\`\`

~~No follow-up needed.~~ **Follow-up is required.**

Visit https://example.com/agreements for the full policy.

---`;

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <AgentMessage
          content={<Markdown source={source} />}
          copyText={source}
          timestamp={new Date(2026, 3, 1, 16, 40)}
          onLike={() => {}}
          onDislike={() => {}}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
