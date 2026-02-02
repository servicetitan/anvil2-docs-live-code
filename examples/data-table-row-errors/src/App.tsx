import {
  DataTable,
  createColumnHelper,
  currencyFormatter,
  type TableRow,
} from "@servicetitan/anvil2/beta";

type OrderData = {
  id: string;
  customer_name: string;
  amount: number;
  status: string;
};

const createColumn = createColumnHelper<OrderData>();

// Data with row-level errors
// Use string error messages to provide context about what's wrong with the entire row
const data: TableRow<OrderData>[] = [
  {
    id: "ORD-001",
    customer_name: "Sophia Rodriguez",
    amount: 2450.75,
    status: "completed",
    // String error message provides accessible context
    meta: { rowError: "This order has validation issues that need review" },
  } as TableRow<OrderData>,
  {
    id: "ORD-002",
    customer_name: "TechCorp Solutions",
    amount: 15750.0,
    status: "shipped",
    // No error on this row
  },
  {
    id: "ORD-003",
    customer_name: "Ahmed Hassan",
    amount: 89.99,
    status: "pending",
    meta: { rowError: "Missing required shipping information" },
  } as TableRow<OrderData>,
  {
    id: "ORD-004",
    customer_name: "Maria Gonzalez",
    amount: 1200.5,
    status: "processing",
    // No error on this row
  },
  {
    id: "ORD-005",
    customer_name: "Chen Wei",
    amount: 0.0,
    status: "cancelled",
    meta: { rowError: "Order was cancelled due to payment failure" },
  } as TableRow<OrderData>,
];

const columns = [
  createColumn("id", {
    headerLabel: "Order ID",
    minWidth: 120,
  }),
  createColumn("customer_name", {
    headerLabel: "Customer Name",
    minWidth: 180,
  }),
  createColumn("amount", {
    headerLabel: "Amount",
    renderCell: (value) => currencyFormatter(value),
    minWidth: 100,
  }),
  createColumn("status", {
    headerLabel: "Status",
    minWidth: 100,
  }),
];

function App() {
  return <DataTable data={data} columns={columns} />;
}

export default App;
