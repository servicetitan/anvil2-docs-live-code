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
  note: string;
};

const createColumn = createColumnHelper<OrderData>();

// Data with cell-level errors
// Use string error messages to provide context about what's wrong
const data: TableRow<OrderData>[] = [
  {
    id: "ORD-001",
    customer_name: "",
    amount: 2450.75,
    status: "completed",
    note: "Regular order",
    // String error message provides accessible context
    meta: { errors: { customer_name: "Customer name is required" } },
  } as TableRow<OrderData>,
  {
    id: "ORD-002",
    customer_name: "TechCorp Solutions",
    amount: 15750.0,
    status: "shipped",
    note: "Priority shipment",
    // No errors on this row
  },
  {
    id: "ORD-003",
    customer_name: "Ahmed Hassan",
    amount: -50.0,
    status: "pending",
    note: "",
    // Multiple cells can have errors
    meta: {
      errors: {
        amount: "Amount must be positive",
        note: "Note is required for pending orders",
      },
    },
  } as TableRow<OrderData>,
  {
    id: "ORD-004",
    customer_name: "Maria Gonzalez",
    amount: 1200.5,
    status: "processing",
    note: "This is an extremely long note that exceeds the maximum allowed character limit for this field",
    meta: { errors: { note: "Note exceeds 100 character limit" } },
  } as TableRow<OrderData>,
];

const columns = [
  createColumn("id", {
    headerLabel: "Order ID",
    minWidth: 100,
  }),
  createColumn("customer_name", {
    headerLabel: "Customer Name",
    minWidth: 150,
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
  createColumn("note", {
    headerLabel: "Note",
    minWidth: 200,
  }),
];

function App() {
  return <DataTable data={data} columns={columns} />;
}

export default App;
