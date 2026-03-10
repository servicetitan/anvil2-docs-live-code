import { Text, Flex, Link } from "@servicetitan/anvil2";
import { DataTable, createColumnHelper } from "@servicetitan/anvil2/beta";
import NoSearchResultsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-light.svg";
import NoSearchResultsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-dark.svg";

type Invoice = {
  invoiceNumber: string;
  date: string;
  description: string;
  total: number;
  paid: number;
};

const createColumn = createColumnHelper<Invoice>();

const columns = [
  createColumn("invoiceNumber", {
    headerLabel: "Invoice #",
  }),
  createColumn("date", {
    headerLabel: "Date",
  }),
  createColumn("description", {
    headerLabel: "Description",
  }),
  createColumn("total", {
    headerLabel: "Total",
  }),
  createColumn("paid", {
    headerLabel: "Paid",
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
