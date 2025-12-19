import { DataTable, createColumnHelper } from "@servicetitan/anvil2/beta";

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
    // Currently, we don't have a way to add empty state to the DataTable component
    <DataTable data={[]} columns={columns} />
    // TODO: Add empty state to the DataTable component
    // <Flex
    //   alignItems="center"
    //   direction="column"
    //   gap={2}
    //   style={{ maxWidth: "420px" }}
    // >
    //   <Icon
    //     svg={NotInterested}
    //     size="xlarge"
    //     color={core.semantic.ForegroundColorDanger.value}
    //   />
    //   <Text subdued size="small" style={{ textAlign: "center" }}>
    //     No results found. Try another search or{" "}
    //     <Link href="#">create a new report</Link>.
    //   </Text>
    // </Flex>
  );
}

export default App;
