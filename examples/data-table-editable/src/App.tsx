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
];

function App() {
  const [data, setData] = useState(initialData);

  const createColumn = createColumnHelper<OrderData>();

  const columns = [
    createColumn("id", {
      header: { label: "Order ID" },
      sortable: true,
      resizable: true,
      minWidth: 130,
      editConfig: {
        mode: "text",
        onChange: (value, rowId) => {
          setData((prev) =>
            prev.map((row) =>
              row.id === rowId ? { ...row, id: value as string } : row,
            ),
          );
        },
      },
    }),
    createColumn("customer_name", {
      header: { label: "Customer" },
      sortable: true,
      resizable: true,
      editConfig: {
        mode: "text",
        onChange: (value, rowId) => {
          setData((prev) =>
            prev.map((row) =>
              row.id === rowId
                ? { ...row, customer_name: value as string }
                : row,
            ),
          );
        },
      },
    }),
    createColumn("categories", {
      header: { label: "Categories" },
      minWidth: 180,
      resizable: true,
      renderCell: (value: Category[]) =>
        chipsFormatter(
          value?.map((val: Category) => ({
            label: val.charAt(0).toUpperCase() + val.slice(1),
          })),
          { truncateChips: true },
        ),
      editConfig: {
        mode: "multiselect",
        options: [
          { id: "electronics", label: "Electronics" },
          { id: "clothing", label: "Clothing" },
          { id: "home", label: "Home" },
          { id: "garden", label: "Garden" },
          { id: "other", label: "Other" },
        ],
        onChange: (options, rowId) => {
          const value = options.map((o) => String(o.id)) as Category[];
          setData((prev) =>
            prev.map((row) =>
              row.id === rowId ? { ...row, categories: value } : row,
            ),
          );
        },
      },
    }),
    createColumn("status", {
      header: { label: "Status" },
      resizable: true,
      renderCell: (value: Status[] | undefined) =>
        chipsFormatter(
          value?.map((val: Status) => ({
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
      sortable: (
        valueA: Status[] | undefined,
        valueB: Status[] | undefined,
      ) => {
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
      editConfig: {
        mode: "multiselect",
        options: [
          { id: "pending", label: "Pending" },
          { id: "shipped", label: "Shipped" },
          { id: "processing", label: "Processing" },
          { id: "completed", label: "Completed" },
          { id: "cancelled", label: "Cancelled" },
        ],
        onChange: (options, rowId) => {
          const value = options.map((o) => String(o.id)) as Status[];
          setData((prev) =>
            prev.map((row) =>
              row.id === rowId ? { ...row, status: value } : row,
            ),
          );
        },
      },
    }),
    createColumn("payment_type", {
      header: { label: "Payment Type" },
      renderCell: (value: PaymentType) => (
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
      editConfig: {
        mode: "select",
        options: [
          { id: "credit_card", label: "Credit Card" },
          { id: "cash", label: "Cash" },
          { id: "bank_transfer", label: "Bank Transfer" },
          { id: "check", label: "Check" },
          { id: "paypal", label: "PayPal" },
        ],
        onChange: (option, rowId) => {
          if (option) {
            setData((prev) =>
              prev.map((row) =>
                row.id === rowId
                  ? { ...row, payment_type: String(option.id) as PaymentType }
                  : row,
              ),
            );
          }
        },
      },
    }),
  ];

  return <DataTable data={data} columns={columns} />;
}

export default App;
