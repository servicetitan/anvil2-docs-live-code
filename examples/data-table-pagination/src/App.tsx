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

type StatusValue = OrderData["status"];

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
];

const createColumn = createColumnHelper<OrderData>();

const formatStatus = (value: StatusValue) =>
  chipsFormatter(
    value?.map((status) => ({
      label: status.charAt(0).toUpperCase() + status.slice(1),
      color:
        status === "pending"
          ? "#f59e0b"
          : status === "shipped"
            ? "#8b5cf6"
            : status === "processing"
              ? "#3b82f6"
              : status === "completed"
                ? "#10b981"
                : "#ef4444",
    })),
  );

const formatPaymentType = (value: PaymentType) => (
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
);

const columns = [
  createColumn("id", {
    header: { label: "Order ID" },
    sortable: true,
    resizable: true,
    minWidth: 130,
  }),
  createColumn("customer_name", {
    header: { label: "Customer" },
    sortable: true,
    resizable: true,
  }),
  createColumn("amount", {
    header: { label: "Amount" },
    renderCell: (value: OrderData["amount"]) => currencyFormatter(value),
    sortable: true,
  }),
  createColumn("status", {
    header: { label: "Status" },
    resizable: true,
    renderCell: (value: StatusValue) => formatStatus(value),
  }),
  createColumn("order_date", {
    header: { label: "Order Date" },
    sortable: true,
  }),
  createColumn("payment_type", {
    header: { label: "Payment Type" },
    renderCell: (value: PaymentType) => formatPaymentType(value),
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
