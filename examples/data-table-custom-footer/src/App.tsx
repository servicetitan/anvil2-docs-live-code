import {
  DataTable,
  createColumnHelper,
  currencyFormatter,
  type TableRow,
} from "@servicetitan/anvil2/beta";

type InvoiceData = {
  id: string;
  customer_name: string;
  service: string;
  amount: number;
  tax: number;
  total: number;
};

const data: TableRow<InvoiceData>[] = [
  {
    id: "INV-001",
    customer_name: "Jose Ramirez",
    service: "HVAC Repair",
    amount: 450.0,
    tax: 36.0,
    total: 486.0,
  },
  {
    id: "INV-002",
    customer_name: "Sophia Rodriguez",
    service: "Plumbing Install",
    amount: 1200.0,
    tax: 96.0,
    total: 1296.0,
  },
  {
    id: "INV-003",
    customer_name: "TechCorp Solutions",
    service: "Electrical Inspection",
    amount: 275.0,
    tax: 22.0,
    total: 297.0,
  },
  {
    id: "INV-004",
    customer_name: "Ahmed Hassan",
    service: "HVAC Maintenance",
    amount: 350.0,
    tax: 28.0,
    total: 378.0,
  },
];

const createColumn = createColumnHelper<InvoiceData>();

const columns = [
  createColumn("id", {
    headerLabel: "Invoice ID",
    minWidth: 100,
  }),
  createColumn("customer_name", {
    headerLabel: "Customer",
    minWidth: 150,
  }),
  createColumn("service", {
    headerLabel: "Service",
    minWidth: 150,
  }),
  createColumn("amount", {
    headerLabel: "Amount",
    renderCell: (value) => currencyFormatter(value),
    minWidth: 100,
  }),
  createColumn("tax", {
    headerLabel: "Tax",
    renderCell: (value) => currencyFormatter(value),
    minWidth: 80,
  }),
  createColumn("total", {
    headerLabel: "Total",
    renderCell: (value) => currencyFormatter(value),
    minWidth: 100,
  }),
];

const totalAmount = data.reduce((acc, row) => acc + row.amount, 0);
const totalTax = data.reduce((acc, row) => acc + row.tax, 0);
const grandTotal = data.reduce((acc, row) => acc + row.total, 0);

function App() {
  return (
    <DataTable
      data={data}
      columns={columns}
      customFooter={[
        [
          { content: <b>Totals</b>, colSpan: 3 },
          { content: currencyFormatter(totalAmount), colSpan: 1 },
          { content: currencyFormatter(totalTax), colSpan: 1 },
          { content: <b>{currencyFormatter(grandTotal)}</b>, colSpan: 1 },
        ],
      ]}
    />
  );
}

export default App;
