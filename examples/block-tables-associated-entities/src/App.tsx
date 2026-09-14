import { Avatar, Chip, Flex, Text } from "@servicetitan/anvil2";
import { DataTable, createColumnHelper } from "@servicetitan/anvil2/beta";

type Call = {
  id: string;
  status: string;
  date: string;
  duration: string;
  account: string;
  customer: string;
  queue: string;
  campaign: string;
  calls: string;
};

const calls: Call[] = [
  {
    id: "1",
    status: "Contact Attempted",
    date: "2026-04-16 3:00 PM",
    duration: "1m",
    account: "EverTemp HVAC",
    customer: "Wade Warren",
    queue: "Front Line",
    campaign: "Google",
    calls: "2 abandoned calls",
  },
  {
    id: "2",
    status: "New",
    date: "2026-04-16 2:00 PM",
    duration: "4m",
    account: "Automated Mechanical",
    customer: "Sadie Lewis",
    queue: "Front Line",
    campaign: "Yelp",
    calls: "–",
  },
  {
    id: "3",
    status: "New",
    date: "2026-04-16 12:00 PM",
    duration: "12s",
    account: "Enopia Solutions",
    customer: "Marvin McKinney",
    queue: "Overflow",
    campaign: "Facebook",
    calls: "–",
  },
  {
    id: "4",
    status: "New",
    date: "2026-04-16 11:00 AM",
    duration: "7m",
    account: "Stark Industries",
    customer: "Wade Warren",
    queue: "After Hours",
    campaign: "Direct Mail",
    calls: "–",
  },
  {
    id: "5",
    status: "New",
    date: "2026-04-16 11:00 AM",
    duration: "2m",
    account: "Massive Dynamic",
    customer: "Floyd Miles",
    queue: "Front Line",
    campaign: "Referral",
    calls: "3 abandoned calls",
  },
  {
    id: "6",
    status: "New",
    date: "2026-04-16 11:00 AM",
    duration: "45s",
    account: "Dach Group",
    customer: "Jerome Bell",
    queue: "Overflow",
    campaign: "Angi",
    calls: "–",
  },
  {
    id: "7",
    status: "New",
    date: "2026-04-16 11:00 AM",
    duration: "3m",
    account: "Hearty Home Décor",
    customer: "Arlene McCoy",
    queue: "After Hours",
    campaign: "Google",
    calls: "–",
  },
  {
    id: "8",
    status: "New",
    date: "2026-04-16 11:00 AM",
    duration: "1m",
    account: "The Sleek Apple",
    customer: "Bessie Cooper",
    queue: "Front Line",
    campaign: "Nextdoor",
    calls: "2 abandoned calls",
  },
  {
    id: "9",
    status: "New",
    date: "2026-04-16 11:00 AM",
    duration: "6m",
    account: "Ollivander's Wands",
    customer: "Darlene Robertson",
    queue: "Overflow",
    campaign: "Yelp",
    calls: "–",
  },
  {
    id: "10",
    status: "New",
    date: "2026-04-16 1:00 PM",
    duration: "28s",
    account: "The Showroom",
    customer: "Theresa Webb",
    queue: "Front Line",
    campaign: "Referral",
    calls: "–",
  },
];

const createColumn = createColumnHelper<Call>();

const columns = [
  createColumn("status", { header: { label: "Status" }, minWidth: 150 }),
  createColumn("date", {
    header: { label: "Date" },
    sortable: true,
    minWidth: 150,
  }),
  createColumn("duration", { header: { label: "Duration" }, minWidth: 90 }),
  createColumn("account", {
    header: { label: "Account" },
    minWidth: 190,
    renderCell: (value: Call["account"]) => <Chip label={value} size="small" />,
  }),
  createColumn("customer", {
    header: { label: "Customer" },
    minWidth: 170,
    renderCell: (value: Call["customer"]) => (
      <Flex alignItems="center" gap={2}>
        <Avatar name={value} size="small" />
        <Text inline>{value}</Text>
      </Flex>
    ),
  }),
  createColumn("queue", { header: { label: "Queue" }, minWidth: 110 }),
  createColumn("campaign", {
    header: { label: "Campaign" },
    minWidth: 110,
    renderCell: (value: Call["campaign"]) => (
      <Chip label={value} size="small" />
    ),
  }),
  createColumn("calls", { header: { label: "Calls" }, minWidth: 160 }),
];

function App() {
  return (
    <Flex style={{ padding: "2rem", width: "100%" }}>
      <DataTable
        data={calls}
        columns={columns}
        pagination={{ rowsPerPage: 10, showCount: true }}
        style={{ width: "100%" }}
      />
    </Flex>
  );
}

export default App;
