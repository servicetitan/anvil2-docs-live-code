import { Avatar, Flex, Text } from "@servicetitan/anvil2";
import { DataTable, createColumnHelper } from "@servicetitan/anvil2/beta";

type AuditEntry = {
  id: string;
  dateTime: string;
  username: string;
  deactivated?: boolean;
  action: string;
  visitLocation: string;
  field: string;
  before: string;
  after: string;
};

const entries: AuditEntry[] = [
  {
    id: "1",
    dateTime: "05/12/2024 10:15 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Billing Address",
    before: "–",
    after: "600 World Way, Los Angeles, CA 90045 USA",
  },
  {
    id: "2",
    dateTime: "05/12/2024 10:15 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Payment Method",
    before: "–",
    after: "Cash / Check",
  },
  {
    id: "3",
    dateTime: "05/12/2024 10:15 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Payment Terms",
    before: "–",
    after: "Due Upon Receipt",
  },
  {
    id: "4",
    dateTime: "05/12/2024 10:15 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Billing Schedule",
    before: "–",
    after: "Time of Service",
  },
  {
    id: "5",
    dateTime: "05/12/2024 10:13 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Markup Value: Material Cost",
    before: "–",
    after: "6%",
  },
  {
    id: "6",
    dateTime: "05/12/2024 10:13 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Markup Value: Labor Cost",
    before: "–",
    after: "10%",
  },
  {
    id: "7",
    dateTime: "05/12/2024 10:05 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Visit",
    before: "–",
    after: "–",
  },
  {
    id: "8",
    dateTime: "05/12/2024 10:03 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "Visit 1 at Location #3",
    field: "Visit",
    before: "–",
    after: "–",
  },
  {
    id: "9",
    dateTime: "05/12/2024 10:01 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "Visit 2 at Location #1",
    field: "Visit",
    before: "–",
    after: "–",
  },
  {
    id: "10",
    dateTime: "05/12/2024 9:53 AM",
    username: "amyho",
    deactivated: true,
    action: "Added",
    visitLocation: "Visit 1 at Location #1",
    field: "Equipment",
    before: "–",
    after: "E1000 E1002 (Deactivated) E1005",
  },
  {
    id: "11",
    dateTime: "05/12/2024 9:50 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Payment Method",
    before: "–",
    after: "Credit Card",
  },
  {
    id: "12",
    dateTime: "05/12/2024 9:48 AM",
    username: "mhyatt",
    action: "Added",
    visitLocation: "–",
    field: "Business Unit",
    before: "–",
    after: "HVAC Install",
  },
  {
    id: "13",
    dateTime: "05/12/2024 9:45 AM",
    username: "amyho",
    deactivated: true,
    action: "Added",
    visitLocation: "–",
    field: "Customer Type",
    before: "–",
    after: "Commercial",
  },
];

const createColumn = createColumnHelper<AuditEntry>();

const columns = [
  createColumn("dateTime", { header: { label: "Date & Time" }, minWidth: 170 }),
  createColumn("username", {
    header: { label: "Username" },
    minWidth: 160,
    renderCell: (
      value: AuditEntry["username"],
      { row }: { row: AuditEntry },
    ) => (
      <Flex alignItems="center" gap={2}>
        <Avatar name={value} size="small" />
        <Text inline subdued={row?.deactivated}>
          {value}
          {row?.deactivated ? " (Deactivated)" : ""}
        </Text>
      </Flex>
    ),
  }),
  createColumn("action", { header: { label: "Action" }, minWidth: 100 }),
  createColumn("visitLocation", {
    header: { label: "Visit / Location" },
    minWidth: 170,
  }),
  createColumn("field", { header: { label: "Field" }, minWidth: 190 }),
  createColumn("before", { header: { label: "Before" }, minWidth: 90 }),
  createColumn("after", { header: { label: "After" }, minWidth: 220 }),
];

function App() {
  return (
    <Flex style={{ padding: "2rem", width: "100%" }}>
      <DataTable
        data={entries}
        columns={columns}
        pagination={{ rowsPerPage: 10, showCount: true }}
        style={{ width: "100%" }}
      />
    </Flex>
  );
}

export default App;
