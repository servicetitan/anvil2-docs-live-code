import {
  DataTable,
  createColumnHelper,
  currencyFormatter,
  percentFormatter,
  type TableRow,
} from "@servicetitan/anvil2/beta";

type CustomerRow = {
  id: string;
  customer_name: string;
  address: string;
  status: string;
  amount_due: number;
  paid_percent: number;
};

const data: TableRow<CustomerRow>[] = [
  {
    id: "CUST-001",
    customer_name: "Jose Ramirez",
    address: "2401 Ontario Street, Cleveland, OH",
    status: "Active",
    amount_due: 1276.43,
    paid_percent: 0.61,
  },
  {
    id: "CUST-002",
    customer_name: "Sophia Rodriguez",
    address: "742 Evergreen Terrace, Springfield, IL",
    status: "Active",
    amount_due: 3450.0,
    paid_percent: 0.85,
  },
  {
    id: "CUST-003",
    customer_name: "TechCorp Solutions",
    address: "100 Innovation Drive, Austin, TX",
    status: "Inactive",
    amount_due: 890.5,
    paid_percent: 1.0,
  },
  {
    id: "CUST-004",
    customer_name: "Ahmed Hassan",
    address: "55 Market Street, San Francisco, CA",
    status: "Active",
    amount_due: 5120.0,
    paid_percent: 0.23,
  },
  {
    id: "CUST-005",
    customer_name: "Green Valley Farms",
    address: "800 Rural Route 3, Des Moines, IA",
    status: "Active",
    amount_due: 2100.75,
    paid_percent: 0.5,
  },
];

const createColumn = createColumnHelper<CustomerRow>();

const columns = [
  createColumn("id", {
    headerLabel: "Customer ID",
    sortable: true,
    resizable: true,
    minWidth: 100,
    maxWidth: 400,
  }),
  createColumn("customer_name", {
    headerLabel: "Name",
    sortable: true,
    resizable: true,
    minWidth: 150,
  }),
  createColumn("address", {
    headerLabel: "Address",
    resizable: true,
    minWidth: 200,
  }),
  createColumn("status", {
    headerLabel: "Status",
    resizable: true,
  }),
  createColumn("amount_due", {
    headerLabel: "Amount Due",
    renderCell: (value) => currencyFormatter(value),
    minWidth: 100,
    maxWidth: 100,
  }),
  createColumn("paid_percent", {
    headerLabel: "Paid %",
    renderCell: (value) => percentFormatter(value),
    minWidth: 100,
    maxWidth: 100,
  }),
];

function App() {
  return <DataTable data={data} columns={columns} />;
}

export default App;
