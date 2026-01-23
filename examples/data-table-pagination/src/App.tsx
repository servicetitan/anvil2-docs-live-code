import {
  DataTable,
  createColumnHelper,
  chipsFormatter,
  currencyFormatter,
  type TableRow,
} from "@servicetitan/anvil2/beta";

type Status = "pending" | "shipped" | "processing" | "completed" | "cancelled";
type PaymentType =
  | "credit_card"
  | "cash"
  | "bank_transfer"
  | "check"
  | "paypal";

type OrderData = {
  id: string;
  amount: number;
  status?: Status[];
  order_date: string;
  customer_name: string;
  payment_type: PaymentType;
};

const data: TableRow<OrderData>[] = [
  {
    id: "ORD-2024-001",
    amount: 2450.75,
    status: ["completed"],
    order_date: "09/15/2024",
    customer_name: "Sophia Rodriguez",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-002",
    amount: 15750.0,
    status: ["shipped"],
    order_date: "09/18/2024",
    customer_name: "TechCorp Solutions",
    payment_type: "bank_transfer",
  },
  {
    id: "ORD-2024-003",
    amount: 89.99,
    status: ["pending"],
    order_date: "09/20/2024",
    customer_name: "Ahmed Hassan",
    payment_type: "paypal",
  },
  {
    id: "ORD-2024-004",
    amount: 1200.5,
    status: ["processing"],
    order_date: "09/12/2024",
    customer_name: "Maria Gonzalez",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-005",
    amount: 0.0,
    status: ["cancelled"],
    order_date: "09/10/2024",
    customer_name: "Chen Wei",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-006",
    amount: 8925.0,
    status: ["completed"],
    order_date: "08/28/2024",
    customer_name: "Green Valley Farms",
    payment_type: "check",
  },
  {
    id: "ORD-2024-007",
    amount: 45.99,
    status: ["shipped"],
    order_date: "09/21/2024",
    customer_name: "Jennifer Kim",
    payment_type: "cash",
  },
  {
    id: "ORD-2024-008",
    amount: 3780.25,
    status: ["processing"],
    order_date: "09/19/2024",
    customer_name: "Roberto Silva",
    payment_type: "bank_transfer",
  },
  {
    id: "ORD-2024-009",
    amount: 156.78,
    status: ["completed"],
    order_date: "09/14/2024",
    customer_name: "Emily Watson",
    payment_type: "paypal",
  },
  {
    id: "ORD-2024-010",
    amount: 2100.0,
    status: ["shipped", "cancelled"],
    order_date: "09/22/2024",
    customer_name: "Moonlight Café",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-011",
    amount: 567.0,
    status: ["pending"],
    order_date: "09/23/2024",
    customer_name: "James Miller",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-012",
    amount: 4320.5,
    status: ["completed"],
    order_date: "09/24/2024",
    customer_name: "Sarah Johnson",
    payment_type: "bank_transfer",
  },
  {
    id: "ORD-2024-013",
    amount: 890.0,
    status: ["shipped"],
    order_date: "09/25/2024",
    customer_name: "David Lee",
    payment_type: "paypal",
  },
  {
    id: "ORD-2024-014",
    amount: 1250.75,
    status: ["processing"],
    order_date: "09/26/2024",
    customer_name: "Lisa Anderson",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-015",
    amount: 3400.0,
    status: ["completed"],
    order_date: "09/27/2024",
    customer_name: "Michael Brown",
    payment_type: "check",
  },
];

const createColumn = createColumnHelper<OrderData>();

const columns = [
  createColumn("id", {
    headerLabel: "Order ID",
    sortable: true,
    resizable: true,
    minWidth: 130,
  }),
  createColumn("customer_name", {
    headerLabel: "Customer",
    sortable: true,
    resizable: true,
  }),
  createColumn("amount", {
    headerLabel: "Amount",
    renderCell: (value) => currencyFormatter(value),
    sortable: true,
  }),
  createColumn("status", {
    headerLabel: "Status",
    resizable: true,
    renderCell: (value) =>
      chipsFormatter(
        value?.map((val) => ({
          label: val.charAt(0).toUpperCase() + val.slice(1),
          color:
            val === "pending"
              ? "#f59e0b"
              : val === "shipped"
                ? "#8b5cf6"
                : val === "processing"
                  ? "#3b82f6"
                  : val === "completed"
                    ? "#10b981"
                    : "#ef4444",
        })),
      ),
  }),
  createColumn("order_date", {
    headerLabel: "Order Date",
    sortable: true,
  }),
  createColumn("payment_type", {
    headerLabel: "Payment Type",
    renderCell: (value) => (
      <span>
        {value === "credit_card"
          ? "Credit Card"
          : value === "cash"
            ? "Cash"
            : value === "bank_transfer"
              ? "Bank Transfer"
              : value === "check"
                ? "Check"
                : value === "paypal"
                  ? "PayPal"
                  : value}
      </span>
    ),
    sortable: true,
    minWidth: 150,
  }),
];

function App() {
  return (
    <DataTable
      data={data}
      columns={columns}
      pagination={{
        rowsPerPage: 5,
        defaultPageIndex: 0,
        showCount: true,
      }}
    />
  );
}

export default App;
