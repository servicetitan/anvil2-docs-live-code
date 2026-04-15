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

// Data with cell-level warnings
// Use string warning messages to provide context about advisory issues
const data: TableRow<OrderData>[] = [
  {
    id: "ORD-001",
    customer_name: "Sophia Rodriguez",
    amount: 2450.75,
    status: "completed",
    note: "Regular order",
    // String warning message provides accessible context
    meta: { warnings: { customer_name: "Customer name may be incomplete" } },
  } as TableRow<OrderData>,
  {
    id: "ORD-002",
    customer_name: "TechCorp Solutions",
    amount: 15750.0,
    status: "shipped",
    note: "Priority shipment",
    // No warnings on this row
  },
  {
    id: "ORD-003",
    customer_name: "Ahmed Hassan",
    amount: 89.99,
    status: "pending",
    note: "",
    // Multiple cells can have warnings
    meta: {
      warnings: {
        amount: "Amount is below the typical order minimum",
        note: "Consider adding a note for pending orders",
      },
    },
  } as TableRow<OrderData>,
  {
    id: "ORD-004",
    customer_name: "Maria Gonzalez",
    amount: 1200.5,
    status: "processing",
    note: "This is an extremely long note that may exceed the recommended character limit for this field",
    meta: { warnings: { note: "Note is approaching the 100 character limit" } },
  } as TableRow<OrderData>,
];

const columns = [
  createColumn("id", {
    header: { label: "Order ID" },
    minWidth: 100,
  }),
  createColumn("customer_name", {
    header: { label: "Customer Name" },
    minWidth: 150,
  }),
  createColumn("amount", {
    header: { label: "Amount" },
    renderCell: (value) => currencyFormatter(value),
    minWidth: 100,
  }),
  createColumn("status", {
    header: { label: "Status" },
    minWidth: 100,
  }),
  createColumn("note", {
    header: { label: "Note" },
    minWidth: 200,
  }),
];

function App() {
  return <DataTable data={data} columns={columns} />;
}

export default App;
