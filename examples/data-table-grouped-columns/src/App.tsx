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
  payment_type: PaymentType;
};

const data: TableRow<OrderData>[] = [
  {
    id: "ORD-2024-001",
    amount: 2450.75,
    status: ["completed"],
    order_date: "09/15/2024",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-002",
    amount: 15750.0,
    status: ["shipped"],
    order_date: "09/18/2024",
    payment_type: "bank_transfer",
  },
  {
    id: "ORD-2024-003",
    amount: 89.99,
    status: ["pending"],
    order_date: "09/20/2024",
    payment_type: "paypal",
  },
  {
    id: "ORD-2024-004",
    amount: 1200.5,
    status: ["processing"],
    order_date: "09/12/2024",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-005",
    amount: 0.0,
    status: ["cancelled"],
    order_date: "09/10/2024",
    payment_type: "credit_card",
  },
  {
    id: "ORD-2024-006",
    amount: 8925.0,
    status: ["completed"],
    order_date: "08/28/2024",
    payment_type: "check",
  },
  {
    id: "ORD-2024-007",
    amount: 45.99,
    status: ["shipped"],
    order_date: "09/21/2024",
    payment_type: "cash",
  },
];

const createColumn = createColumnHelper<OrderData>();

const statusOrder: Record<Status, number> = {
  pending: 1,
  processing: 2,
  shipped: 3,
  completed: 4,
  cancelled: 5,
};

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

const sortStatus = (valueA: StatusValue, valueB: StatusValue) => {
  const statusA = valueA && valueA.length > 0 ? statusOrder[valueA[0]] : 999;
  const statusB = valueB && valueB.length > 0 ? statusOrder[valueB[0]] : 999;

  return statusA - statusB;
};

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

// Define individual columns that will be grouped
const orderInfoColumns = [
  createColumn("id", {
    header: {
      label: "Order ID",
      required: true,
      moreInfo: "Unique order identifier used in downstream workflows.",
    },
    sortable: true,
    resizable: true,
    minWidth: 130,
    footerContent: (
      <span>
        <b>Total:</b> {data.length}
      </span>
    ),
  }),
  createColumn("order_date", {
    header: { label: "Order Date" },
    sortable: true,
  }),
  createColumn("status", {
    header: { label: "Status" },
    resizable: true,
    renderCell: (value: StatusValue) => formatStatus(value),
    sortable: sortStatus,
  }),
];

const paymentColumns = [
  createColumn("amount", {
    header: { label: "Amount" },
    renderCell: (value: OrderData["amount"]) => currencyFormatter(value),
    sortable: true,
    footerContent: [
      <span key="total">
        {currencyFormatter(data.reduce((acc, row) => acc + row.amount, 0))}
      </span>,
      <span key="average">
        {currencyFormatter(
          data.reduce((acc, row) => acc + row.amount, 0) / data.length,
        )}{" "}
        (avg)
      </span>,
    ],
  }),
  createColumn("payment_type", {
    header: { label: "Payment Type" },
    renderCell: (value: PaymentType) => formatPaymentType(value),
    sortable: true,
    minWidth: 150,
  }),
];

// Create grouped columns using the group syntax
const groupedColumns = [
  createColumn(
    { group: "order_info" },
    {
      header: {
        label: "Order Info",
        required: true,
        moreInfo: "Columns describing the order record.",
      },
      columns: orderInfoColumns,
    },
  ),
  createColumn(
    { group: "payment_details" },
    {
      header: { label: "Payment Details" },
      columns: paymentColumns,
    },
  ),
];

function App() {
  return <DataTable data={data} columns={groupedColumns} />;
}

export default App;
