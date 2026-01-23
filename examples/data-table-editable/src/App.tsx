import {
  DataTable,
  createColumnHelper,
  chipsFormatter,
  type TableRow,
} from "@servicetitan/anvil2/beta";

import { useState } from "react";

type Status = "pending" | "shipped" | "processing" | "completed" | "cancelled";
type PaymentType =
  | "credit_card"
  | "cash"
  | "bank_transfer"
  | "check"
  | "paypal";
type Category = "electronics" | "clothing" | "home" | "garden" | "other";

type OrderData = {
  id: string;
  customer_name: string;
  status?: Status[];
  payment_type: PaymentType;
  categories: Category[];
};

const initialData: TableRow<OrderData>[] = [
  {
    id: "ORD-2024-001",
    customer_name: "Sophia Rodriguez",
    status: ["completed"],
    payment_type: "credit_card",
    categories: ["electronics", "home"],
  },
  {
    id: "ORD-2024-002",
    customer_name: "TechCorp Solutions",
    status: ["shipped"],
    payment_type: "bank_transfer",
    categories: ["electronics"],
  },
  {
    id: "ORD-2024-003",
    customer_name: "Ahmed Hassan",
    status: ["pending"],
    payment_type: "paypal",
    categories: ["clothing", "other"],
  },
  {
    id: "ORD-2024-004",
    customer_name: "Maria Gonzalez",
    status: ["processing"],
    payment_type: "credit_card",
    categories: ["home", "garden"],
  },
  {
    id: "ORD-2024-005",
    customer_name: "Chen Wei",
    status: ["cancelled"],
    payment_type: "credit_card",
    categories: ["electronics", "clothing"],
  },
  {
    id: "ORD-2024-006",
    customer_name: "Green Valley Farms",
    status: ["completed"],
    payment_type: "check",
    categories: ["garden"],
  },
  {
    id: "ORD-2024-007",
    customer_name: "Jennifer Kim",
    status: ["shipped"],
    payment_type: "cash",
    categories: ["clothing", "home"],
  },
  {
    id: "ORD-2024-008",
    customer_name: "Roberto Silva",
    status: ["processing"],
    payment_type: "bank_transfer",
    categories: ["electronics", "other"],
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const createColumn = createColumnHelper<OrderData>();

  const columns = [
    createColumn("id", {
      headerLabel: "Order ID",
      sortable: true,
      resizable: true,
      minWidth: 130,
      editMode: "text",
      onChange: (value, rowId) => {
        setData((prev) =>
          prev.map((row) =>
            row.id === rowId ? { ...row, id: value as string } : row,
          ),
        );
      },
    }),
    createColumn("customer_name", {
      headerLabel: "Customer",
      sortable: true,
      resizable: true,
      editMode: "text",
      onChange: (value, rowId) => {
        setData((prev) =>
          prev.map((row) =>
            row.id === rowId ? { ...row, customer_name: value as string } : row,
          ),
        );
      },
    }),
    createColumn("categories", {
      headerLabel: "Categories",
      editMode: "multiselect",
      minWidth: 180,
      resizable: true,
      options: [
        { value: "electronics" as Category, label: "Electronics" },
        { value: "clothing" as Category, label: "Clothing" },
        { value: "home" as Category, label: "Home" },
        { value: "garden" as Category, label: "Garden" },
        { value: "other" as Category, label: "Other" },
      ],
      renderCell: (value) =>
        chipsFormatter(
          value?.map((val) => ({
            label: val.charAt(0).toUpperCase() + val.slice(1),
          })),
          { truncateChips: true },
        ),
      onChange: (value, rowId) => {
        setData((prev) =>
          prev.map((row) =>
            row.id === rowId ? { ...row, categories: value } : row,
          ),
        );
      },
    }),
    createColumn("status", {
      headerLabel: "Status",
      resizable: true,
      editMode: "multiselect",
      options: [
        { value: "pending" as Status, label: "Pending" },
        { value: "shipped" as Status, label: "Shipped" },
        { value: "processing" as Status, label: "Processing" },
        { value: "completed" as Status, label: "Completed" },
        { value: "cancelled" as Status, label: "Cancelled" },
      ],
      onChange: (value, rowId) => {
        setData((prev) =>
          prev.map((row) =>
            row.id === rowId ? { ...row, status: value } : row,
          ),
        );
      },
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
      sortable: (valueA, valueB) => {
        const statusOrder = {
          pending: 1,
          processing: 2,
          shipped: 3,
          completed: 4,
          cancelled: 5,
        } as const;

        const statusA =
          valueA && valueA.length > 0 ? statusOrder[valueA[0]] : 999;

        const statusB =
          valueB && valueB.length > 0 ? statusOrder[valueB[0]] : 999;

        return statusA - statusB;
      },
    }),
    createColumn("payment_type", {
      headerLabel: "Payment Type",
      editMode: "select",
      options: [
        { value: "credit_card" as PaymentType, label: "Credit Card" },
        { value: "cash" as PaymentType, label: "Cash" },
        { value: "bank_transfer" as PaymentType, label: "Bank Transfer" },
        { value: "check" as PaymentType, label: "Check" },
        { value: "paypal" as PaymentType, label: "PayPal" },
      ],
      onChange: (value, rowId) => {
        setData((prev) =>
          prev.map((row) =>
            row.id === rowId ? { ...row, payment_type: value } : row,
          ),
        );
      },
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
      minWidth: 180,
    }),
  ];

  return <DataTable data={data} columns={columns} />;
}

export default App;
