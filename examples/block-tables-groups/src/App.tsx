import { Chip, Flex } from "@servicetitan/anvil2";
import { DataTable, createColumnHelper } from "@servicetitan/anvil2/beta";

type Order = {
  id: string;
  customerName: string;
  amount: number | null;
  items: number;
  status: string;
  orderDate: string;
  paymentType: string;
  note: string;
};

const orders: Order[] = [
  {
    id: "ORD-2024-001",
    customerName: "Sophia Rodriguez",
    amount: 2450.75,
    items: 12,
    status: "Completed",
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "Bulk order for office supplies",
  },
  {
    id: "ORD-2024-002",
    customerName: "TechCorp Solutions",
    amount: 15750.0,
    items: 45,
    status: "Shipped",
    orderDate: "10/02/25",
    paymentType: "Bank transfer",
    note: "–",
  },
  {
    id: "ORD-2024-003",
    customerName: "Ahmed Hassan",
    amount: 89.99,
    items: 2,
    status: "Pending",
    orderDate: "10/02/25",
    paymentType: "Paypal",
    note: "–",
  },
  {
    id: "ORD-2024-004",
    customerName: "Maria Gonzalez",
    amount: 1200.5,
    items: 8,
    status: "Processing",
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "Rush delivery requested",
  },
  {
    id: "ORD-2024-005",
    customerName: "Chen Wei",
    amount: null,
    items: 1,
    status: "Cancelled",
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "Customer cancelled before payment",
  },
  {
    id: "ORD-2024-006",
    customerName: "Green Valley Farms",
    amount: 8925.0,
    items: 156,
    status: "Completed",
    orderDate: "10/02/25",
    paymentType: "Check",
    note: "–",
  },
  {
    id: "ORD-2024-007",
    customerName: "Jennifer Kim",
    amount: 45.99,
    items: 1,
    status: "Shipped",
    orderDate: "10/02/25",
    paymentType: "Cash",
    note: "–",
  },
  {
    id: "ORD-2024-008",
    customerName: "Roberto Silva",
    amount: 3780.25,
    items: 23,
    status: "Processing",
    orderDate: "10/02/25",
    paymentType: "Bank transfer",
    note: "International shipping",
  },
  {
    id: "ORD-2024-009",
    customerName: "Emily Watson",
    amount: 156.78,
    items: 4,
    status: "Completed",
    orderDate: "10/02/25",
    paymentType: "Paypal",
    note: "–",
  },
  {
    id: "ORD-2024-010",
    customerName: "Moonlight Café",
    amount: 2100.0,
    items: 35,
    status: "Cancelled",
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "Monthly coffee order",
  },
];

const currency = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const createColumn = createColumnHelper<Order>();

const orderInfoColumns = [
  createColumn("id", {
    header: { label: "Order ID" },
    sortable: true,
    minWidth: 130,
  }),
  createColumn("customerName", {
    header: { label: "Customer Name" },
    sortable: true,
  }),
  createColumn("amount", {
    header: { label: "Amount" },
    align: "end",
    sortable: true,
    renderCell: (value: Order["amount"]) =>
      value == null ? "–" : currency(value),
  }),
];

const purchaseDetailsColumns = [
  createColumn("items", {
    header: { label: "Items" },
    align: "end",
    sortable: true,
    minWidth: 80,
  }),
  createColumn("status", {
    header: { label: "Status" },
    renderCell: (value: Order["status"]) => <Chip label={value} size="small" />,
  }),
  createColumn("orderDate", {
    header: { label: "Order Date" },
    sortable: true,
  }),
  createColumn("paymentType", {
    header: { label: "Payment Type" },
    minWidth: 150,
  }),
  createColumn("note", { header: { label: "Note" }, minWidth: 220 }),
];

const columns = [
  createColumn(
    { group: "order-info" },
    { header: { label: "Order Info" }, columns: orderInfoColumns },
  ),
  createColumn(
    { group: "purchase-details" },
    { header: { label: "Purchase Details" }, columns: purchaseDetailsColumns },
  ),
];

function App() {
  return (
    <Flex style={{ padding: "2rem", width: "100%" }}>
      <DataTable
        data={orders}
        columns={columns}
        pagination={{ rowsPerPage: 10, showCount: true }}
        style={{ width: "100%" }}
      />
    </Flex>
  );
}

export default App;
