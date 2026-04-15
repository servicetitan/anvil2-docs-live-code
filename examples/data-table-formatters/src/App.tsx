import {
  DataTable,
  createColumnHelper,
  booleanFormatter,
  currencyFormatter,
  dateFormatter,
  numberFormatter,
  percentFormatter,
  timeFormatter,
  type TableRow,
} from "@servicetitan/anvil2/beta";

type ProductData = {
  id: string;
  is_active: boolean;
  quantity: number;
  amount_due: number;
  paid_percent: number;
  order_date: string;
  start_time: string;
};

const data: TableRow<ProductData>[] = [
  {
    id: "PRD-001",
    is_active: true,
    quantity: 1250,
    amount_due: 2450.75,
    paid_percent: 0.85,
    order_date: "2024-09-15",
    start_time: "08:30:00",
  },
  {
    id: "PRD-002",
    is_active: false,
    quantity: 340,
    amount_due: 15750.0,
    paid_percent: 0.42,
    order_date: "2024-09-18",
    start_time: "14:15:00",
  },
  {
    id: "PRD-003",
    is_active: true,
    quantity: 89,
    amount_due: 89.99,
    paid_percent: 1.0,
    order_date: "2024-09-20",
    start_time: "09:00:00",
  },
  {
    id: "PRD-004",
    is_active: true,
    quantity: 5600,
    amount_due: 1200.5,
    paid_percent: 0.0,
    order_date: "2024-09-12",
    start_time: "17:45:00",
  },
];

const createColumn = createColumnHelper<ProductData>();

const columns = [
  createColumn("id", {
    header: { label: "Product ID" },
    minWidth: 100,
  }),
  createColumn("is_active", {
    header: { label: "Active" },
    renderCell: (value) => booleanFormatter(value),
    minWidth: 80,
  }),
  createColumn("quantity", {
    header: { label: "Quantity" },
    renderCell: (value) => numberFormatter(value),
    minWidth: 100,
  }),
  createColumn("amount_due", {
    header: { label: "Amount Due" },
    renderCell: (value) => currencyFormatter(value),
    minWidth: 120,
  }),
  createColumn("paid_percent", {
    header: { label: "Paid %" },
    renderCell: (value) => percentFormatter(value),
    minWidth: 80,
  }),
  createColumn("order_date", {
    header: { label: "Order Date" },
    renderCell: (value: string) => dateFormatter(value),
    minWidth: 130,
  }),
  createColumn("start_time", {
    header: { label: "Start Time" },
    renderCell: (value: string) => timeFormatter(value),
    minWidth: 110,
  }),
];

function App() {
  return <DataTable data={data} columns={columns} />;
}

export default App;
