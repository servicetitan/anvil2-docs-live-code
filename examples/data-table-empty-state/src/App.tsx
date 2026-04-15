import { Text, Flex, Link } from "@servicetitan/anvil2";
import { DataTable, createColumnHelper } from "@servicetitan/anvil2/beta";
import NoSearchResultsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-light.svg";
import NoSearchResultsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-dark.svg";

type OrderData = {
  id: string;
  customer: string;
  amount: number;
  status: string;
};

const createColumn = createColumnHelper<OrderData>();

const columns = [
  createColumn("id", {
    header: { label: "Order ID" },
  }),
  createColumn("customer", {
    header: { label: "Customer" },
  }),
  createColumn("amount", {
    header: { label: "Amount" },
  }),
  createColumn("status", {
    header: { label: "Status" },
  }),
];

function App() {
  return (
    <DataTable
      data={[]}
      columns={columns}
      emptyState={{
        svg: { light: NoSearchResultsLight, dark: NoSearchResultsDark },
        content: (
          <Flex
            alignItems="center"
            direction="column"
            gap={2}
            style={{ maxWidth: "420px" }}
          >
            <Text subdued size="small" style={{ textAlign: "center" }}>
              No results found. Try another search or{" "}
              <Link href="#">create a new report</Link>.
            </Text>
          </Flex>
        ),
      }}
    />
  );
}

export default App;
