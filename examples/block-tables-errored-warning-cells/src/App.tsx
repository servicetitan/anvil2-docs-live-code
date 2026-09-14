import { Chip, Flex } from "@servicetitan/anvil2";
import {
  DataTable,
  createColumnHelper,
  type TableRow,
} from "@servicetitan/anvil2/beta";

type Order = {
  id: string;
  customerName: string;
  amount: number | null;
  items: number;
  orderDate: string;
  paymentType: string;
  note: string;
  status: string;
};

const orders: TableRow<Order>[] = [
  {
    id: "ORD-2024-003",
    customerName: "Ahmed Hassan",
    amount: 89.99,
    items: 2,
    orderDate: "10/02/25",
    paymentType: "Paypal",
    note: "–",
    status: "Pending",
  },
  {
    id: "ORD-2024-020",
    customerName: "Anna Kowalski",
    amount: 89.95,
    items: 2,
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "Duplicate order",
    status: "Pending",
  },
  {
    id: "ORD-2024-019",
    customerName: "Blue Ocean Seafood",
    amount: 12300.0,
    items: 234,
    orderDate: "10/02/25",
    paymentType: "Check",
    note: "Weekly seafood delivery",
    status: "Pending",
    meta: {
      errors: {
        amount: "Amount exceeds the customer's approved credit limit",
      },
    },
  },
  {
    id: "ORD-2024-005",
    customerName: "Chen Wei",
    amount: null,
    items: 1,
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "Customer cancelled before payment",
    status: "Processing",
    meta: {
      warnings: {
        orderDate: "Order date is more than 90 days old",
      },
    },
  },
  {
    id: "ORD-2024-011",
    customerName: "David Thompson",
    amount: 750.0,
    items: 6,
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "Product out of stock",
    status: "Processing",
    meta: {
      errors: {
        customerName: "Customer name could not be verified",
      },
    },
  },
  {
    id: "ORD-2024-009",
    customerName: "Emily Watson",
    amount: 156.78,
    items: 4,
    orderDate: "10/02/25",
    paymentType: "Paypal",
    note: "–",
    status: "Processing",
  },
  {
    id: "ORD-2024-018",
    customerName: "Fatima Al-Zahra",
    amount: 567.89,
    items: 9,
    orderDate: "10/02/25",
    paymentType: "Paypal",
    note: "Gift wrap requested",
    status: "Processing",
  },
  {
    id: "ORD-2024-006",
    customerName: "Green Valley Farms",
    amount: 8925.0,
    items: 156,
    orderDate: "10/02/25",
    paymentType: "Check",
    note: "–",
    status: "Shipped",
  },
  {
    id: "ORD-2024-015",
    customerName: "Hiroshi Tanaka",
    amount: 4950.0,
    items: 18,
    orderDate: "10/02/25",
    paymentType: "Paypal",
    note: "Electronics bundle",
    status: "Shipped",
  },
  {
    id: "ORD-2024-031",
    customerName: "Ian Wright",
    amount: 220.0,
    items: 3,
    orderDate: "10/02/25",
    paymentType: "Credit card",
    note: "–",
    status: "Shipped",
  },
];

const currency = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const createColumn = createColumnHelper<Order>();

const columns = [
  createColumn("id", { header: { label: "Order ID" }, minWidth: 140 }),
  createColumn("customerName", {
    header: { label: "Customer Name" },
    minWidth: 170,
  }),
  createColumn("amount", {
    header: { label: "Amount" },
    align: "end",
    minWidth: 110,
    renderCell: (value: Order["amount"]) =>
      value == null ? "–" : currency(value),
  }),
  createColumn("items", {
    header: { label: "Items" },
    align: "end",
    minWidth: 80,
  }),
  createColumn("orderDate", { header: { label: "Order Date" }, minWidth: 110 }),
  createColumn("paymentType", {
    header: { label: "Payment Type" },
    minWidth: 150,
  }),
  createColumn("note", { header: { label: "Note" }, minWidth: 260 }),
  createColumn("status", {
    header: { label: "Status" },
    minWidth: 120,
    renderCell: (value: Order["status"]) => <Chip label={value} size="small" />,
  }),
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
