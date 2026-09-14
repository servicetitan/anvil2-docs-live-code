import { Card, Chip, Divider, Flex, Text } from "@servicetitan/anvil2";
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

type LineItem = {
  name: string;
  description: string;
  hours: number;
  rate: number;
};

const lineItems: LineItem[] = [
  {
    name: "Logo redesign",
    description: "New logo and digital asset playbook.",
    hours: 20,
    rate: 100,
  },
  {
    name: "Website redesign",
    description: "Design and program new company website.",
    hours: 52,
    rate: 100,
  },
  {
    name: "Business cards",
    description: 'Design and print of 3.5" x 2.0" business cards.',
    hours: 12,
    rate: 100,
  },
];

const currency = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const invoicePreview = (
  <Card flexDirection="column" gap={6} style={{ maxWidth: 900, width: "100%" }}>
    <Text variant="headline" el="h3" size="small">
      Invoice
    </Text>
    <Flex justifyContent="space-between" style={{ width: "100%" }}>
      <Text subdued>
        Issued on <b>January 23, 2024</b>
      </Text>
      <Text subdued>
        Due on <b>January 31, 2024</b>
      </Text>
    </Flex>
    <Divider />
    <Flex justifyContent="space-between" style={{ width: "100%" }}>
      <Flex direction="column" gap={1}>
        <Text style={{ fontWeight: 600 }}>From</Text>
        <Text subdued>Acme, Inc.</Text>
        <Text subdued>7452 Cynthia Pass</Text>
        <Text subdued>Toronto, ON N3Y 4H8</Text>
      </Flex>
      <Flex direction="column" gap={1}>
        <Text style={{ fontWeight: 600 }}>To</Text>
        <Text subdued>Tuple, Inc</Text>
        <Text subdued>8865 Walter Street</Text>
        <Text subdued>New York, NY 10019</Text>
      </Flex>
    </Flex>
    <Flex direction="column" gap={3} style={{ width: "100%" }}>
      <Flex
        justifyContent="space-between"
        style={{ width: "100%", fontWeight: 600 }}
      >
        <Text style={{ fontWeight: 600 }}>Projects</Text>
        <Flex gap={8}>
          <Text style={{ fontWeight: 600, width: 60 }}>Hours</Text>
          <Text style={{ fontWeight: 600, width: 70 }}>Rate</Text>
          <Text style={{ fontWeight: 600, width: 80 }}>Price</Text>
        </Flex>
      </Flex>
      {lineItems.map((item) => (
        <Flex
          key={item.name}
          justifyContent="space-between"
          style={{ width: "100%" }}
        >
          <Flex direction="column">
            <Text style={{ fontWeight: 600 }}>{item.name}</Text>
            <Text subdued size="small">
              {item.description}
            </Text>
          </Flex>
          <Flex gap={8}>
            <Text subdued style={{ width: 60 }}>
              {item.hours.toFixed(1)}
            </Text>
            <Text subdued style={{ width: 70 }}>
              {currency(item.rate)}
            </Text>
            <Text subdued style={{ width: 80 }}>
              {currency(item.hours * item.rate)}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Card>
);

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
    subComponent: invoicePreview,
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
  },
];

const createColumn = createColumnHelper<Order>();

const columns = [
  createColumn("id", { header: { label: "Order ID" }, minWidth: 160 }),
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
        defaultExpandedRowIds={["ORD-2024-003"]}
        style={{ width: "100%" }}
      />
    </Flex>
  );
}

export default App;
