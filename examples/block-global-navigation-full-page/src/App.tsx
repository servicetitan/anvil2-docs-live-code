import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  Badge,
  Button,
  Chip,
  Dialog,
  Divider,
  Flex,
  Icon,
  SearchField,
  Text,
  type Svg,
} from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";
import IconGnavMessages from "@servicetitan/anvil2/assets/icons/st/gnav_messages_inactive.svg";
import IconGnavMessagesActive from "@servicetitan/anvil2/assets/icons/st/gnav_messages_active.svg";
import IconGnavDashboard from "@servicetitan/anvil2/assets/icons/st/gnav_dashboard_inactive.svg";
import IconGnavDashboardActive from "@servicetitan/anvil2/assets/icons/st/gnav_dashboard_active.svg";
import IconGnavTitanAdvisor from "@servicetitan/anvil2/assets/icons/st/gnav_titan_advisor_inactive.svg";
import IconGnavTitanAdvisorActive from "@servicetitan/anvil2/assets/icons/st/gnav_titan_advisor_active.svg";
import IconGnavCommandCenter from "@servicetitan/anvil2/assets/icons/st/gnav_command_center_inactive.svg";
import IconGnavCommandCenterActive from "@servicetitan/anvil2/assets/icons/st/gnav_command_center_active.svg";

import IconGnavTasks from "@servicetitan/anvil2/assets/icons/st/gnav_tasks_inactive.svg";
import IconGnavTasksActive from "@servicetitan/anvil2/assets/icons/st/gnav_tasks_active.svg";
import IconGnavCalls from "@servicetitan/anvil2/assets/icons/st/gnav_calls_inactive.svg";
import IconGnavCallsActive from "@servicetitan/anvil2/assets/icons/st/gnav_calls_active.svg";
import IconGnavSchedule from "@servicetitan/anvil2/assets/icons/st/gnav_schedule_inactive.svg";
import IconGnavScheduleActive from "@servicetitan/anvil2/assets/icons/st/gnav_schedule_active.svg";
import IconGnavDispatch from "@servicetitan/anvil2/assets/icons/st/gnav_dispatch_inactive.svg";
import IconGnavDispatchActive from "@servicetitan/anvil2/assets/icons/st/gnav_dispatch_active.svg";
import IconGnavAccounting from "@servicetitan/anvil2/assets/icons/st/gnav_accounting_inactive.svg";
import IconGnavAccountingActive from "@servicetitan/anvil2/assets/icons/st/gnav_accounting_active.svg";
import IconGnavInventory from "@servicetitan/anvil2/assets/icons/st/gnav_inventory_inactive.svg";
import IconGnavInventoryActive from "@servicetitan/anvil2/assets/icons/st/gnav_inventory_active.svg";
import IconGnavFollowUp from "@servicetitan/anvil2/assets/icons/st/gnav_follow_up_inactive.svg";
import IconGnavFollowUpActive from "@servicetitan/anvil2/assets/icons/st/gnav_follow_up_active.svg";
import IconGnavAccount from "@servicetitan/anvil2/assets/icons/st/gnav_account_inactive.svg";
import IconGnavAccountActive from "@servicetitan/anvil2/assets/icons/st/gnav_account_active.svg";
import IconGnavReports from "@servicetitan/anvil2/assets/icons/st/gnav_reports_inactive.svg";
import IconGnavReportsActive from "@servicetitan/anvil2/assets/icons/st/gnav_reports_active.svg";
import IconGnavMarketing from "@servicetitan/anvil2/assets/icons/st/gnav_marketing_inactive.svg";
import IconGnavMarketingActive from "@servicetitan/anvil2/assets/icons/st/gnav_marketing_active.svg";
import IconGnavFleetPro from "@servicetitan/anvil2/assets/icons/st/gnav_fleet_pro_inactive.svg";
import IconGnavFleetProActive from "@servicetitan/anvil2/assets/icons/st/gnav_fleet_pro_active.svg";
import IconGnavPricebook from "@servicetitan/anvil2/assets/icons/st/gnav_pricebook_inactive.svg";
import IconGnavPricebookActive from "@servicetitan/anvil2/assets/icons/st/gnav_pricebook_active.svg";
import IconGnavFieldPro from "@servicetitan/anvil2/assets/icons/st/gnav_field_pro_inactive.svg";
import IconGnavFieldProActive from "@servicetitan/anvil2/assets/icons/st/gnav_field_pro_active.svg";
import IconGnavProjects from "@servicetitan/anvil2/assets/icons/st/gnav_projects_inactive.svg";
import IconGnavProjectsActive from "@servicetitan/anvil2/assets/icons/st/gnav_projects_active.svg";
import IconGnavProductionQueue from "@servicetitan/anvil2/assets/icons/st/gnav_production_work_queue_inactive.svg";
import IconGnavProductionQueueActive from "@servicetitan/anvil2/assets/icons/st/gnav_production_work_queue_active.svg";
import IconGnavInsuranceQueue from "@servicetitan/anvil2/assets/icons/st/gnav_insurance_work_queue_inactive.svg";
import IconGnavInsuranceQueueActive from "@servicetitan/anvil2/assets/icons/st/gnav_insurance_work_queue_active.svg";
import IconGnavMenuExpand from "@servicetitan/anvil2/assets/icons/st/gnav_menu_expand.svg";
import IconGnavMenuCollapse from "@servicetitan/anvil2/assets/icons/st/gnav_menu_collapse.svg";
import IconChevronDown from "@servicetitan/anvil2/assets/icons/material/round/keyboard_arrow_down.svg";
import IconChevronUp from "@servicetitan/anvil2/assets/icons/material/round/keyboard_arrow_up.svg";
import IconUnfoldMore from "@servicetitan/anvil2/assets/icons/material/round/unfold_more.svg";
import IconSearch from "@servicetitan/anvil2/assets/icons/material/round/search.svg";
import IconStar from "@servicetitan/anvil2/assets/icons/material/round/star.svg";
import IconStarBorder from "@servicetitan/anvil2/assets/icons/material/round/star_border.svg";
import IconLock from "@servicetitan/anvil2/assets/icons/material/round/lock.svg";

const NAV_BG = "var(--a2-color-blue-grey-900, #192329)";
const NAV_DIVIDER_COLOR = "var(--a2-border-color-subdued)";
const DIVIDER_STYLE = {
  "--a2-mod-divider-border-color": NAV_DIVIDER_COLOR,
} as CSSProperties;
const NAV_WHITE = "#FFFFFF";
const SECTION_LABEL_COLOR = "#8C9CA5";
const NAV_WIDTH = 226;
const COLLAPSED_NAV_WIDTH = 60;
const ITEM_FG_DEFAULT = "var(--a2-foreground-color-default)";
const ITEM_FG_SUBDUED = "var(--a2-foreground-color-subdued)";
const ITEM_FG_SELECTED = "var(--a2-foreground-color-primary)";
const ITEM_BG_HOVER = "var(--a2-background-color-secondary)";
const ITEM_BG_SELECTED = "var(--a2-background-color-primary-subdued)";

type NavSection = {
  label?: string;
  items: string[];
};

type NavModule = {
  name: string;
  svg: Svg;
  activeSvg: Svg;
  expandable?: boolean;
  dividerAfter?: boolean;
  sections?: NavSection[];
};

const MAIN_NAV: NavModule[] = [
  {
    name: "Dashboard",
    svg: IconGnavDashboard,
    activeSvg: IconGnavDashboardActive,
    expandable: true,
    sections: [
      {
        items: [
          "Overview",
          "Dashboards",
          "Intelligence Center",
          "Dictionary",
          "Schedules",
        ],
      },
    ],
  },
  {
    name: "Messages",
    svg: IconGnavMessages,
    activeSvg: IconGnavMessagesActive,
    dividerAfter: true,
  },
  {
    name: "Communications",
    svg: IconGnavCalls,
    activeSvg: IconGnavCallsActive,
    expandable: true,
    sections: [
      {
        items: ["Calls", "Bookings", "Call Analytics", "Insights"],
      },
    ],
  },
  {
    name: "Schedule",
    svg: IconGnavSchedule,
    activeSvg: IconGnavScheduleActive,
    expandable: true,
    sections: [
      {
        items: ["Calendar", "Capacity Planning", "Capacity Reporting"],
      },
    ],
  },
  {
    name: "Dispatch",
    svg: IconGnavDispatch,
    activeSvg: IconGnavDispatchActive,
    expandable: true,
    sections: [
      {
        label: "Boards",
        items: ["Daily Dispatch Board", "Weekly Dispatch Board"],
      },
      {
        label: "Tools",
        items: ["Crew Scheduling", "Map"],
      },
      {
        label: "Dispatch Pro",
        items: ["Console", "Supervisor Console"],
      },
    ],
  },
  {
    name: "Accounting",
    svg: IconGnavAccounting,
    activeSvg: IconGnavAccountingActive,
    expandable: true,
    sections: [
      {
        label: "Financials",
        items: ["Financial Sheets", "Journal Entries", "Accounting Periods"],
      },
      {
        label: "Accounts Receivable",
        items: [
          "Batch/Export Transactions",
          "AR Management",
          "Invoices",
          "Customer Payments",
          "Bank Deposits",
          "Purchase Ordering",
        ],
      },
      {
        label: "Accounts Payable",
        items: ["Inbox", "Bills", "Credits", "Statements", "Payments"],
      },
      {
        label: "Financing",
        items: ["Dashboard", "Application Management"],
      },
      {
        label: "Others",
        items: ["Accounting Audit Trail"],
      },
    ],
  },
  {
    name: "Inventory",
    svg: IconGnavInventory,
    activeSvg: IconGnavInventoryActive,
    expandable: true,
    sections: [
      {
        label: "Overview",
        items: ["Items", "Inventory Locations"],
      },
      {
        label: "Requisition",
        items: ["Item", "Install", "Service", "Warranty Tracking"],
      },
      {
        label: "Purchase",
        items: ["Replenishment", "Purchase Orders", "Receipts", "Returns"],
      },
      {
        label: "Manage",
        items: [
          "Adjustments",
          "Transfers",
          "Inventory Counts",
          "Technician Returns",
          "Picklist",
        ],
      },
    ],
  },
  {
    name: "Follow Up",
    svg: IconGnavFollowUp,
    activeSvg: IconGnavFollowUpActive,
    expandable: true,
    sections: [
      {
        items: [
          "Unsold Estimates",
          "Sold Estimates",
          "Surveys",
          "Recurring Service Events",
          "Expiring Memberships",
          "Expiring Credit Cards",
          "Leads",
          "Service Agreements",
          "Receipts",
        ],
      },
    ],
  },
  {
    name: "Reports",
    svg: IconGnavReports,
    activeSvg: IconGnavReportsActive,
    expandable: true,
    sections: [
      {
        label: "General",
        items: ["All Reports", "Scheduled Reports", "Bookmarks", "Recommended"],
      },
      {
        label: "Information",
        items: ["Templates Dictionary", "Legacy Reports"],
      },
    ],
  },
  {
    name: "Pricebook",
    svg: IconGnavPricebook,
    activeSvg: IconGnavPricebookActive,
    expandable: true,
    sections: [
      {
        items: [
          "Services",
          "Materials",
          "Equipment",
          "Discounts & Fees",
          "Categories",
          "Price Setup",
          "History",
          "Pricing Builder",
          "Templates",
          "Import/Export",
        ],
      },
      {
        label: "Pricebook Connect",
        items: ["Catalogs", "Updates"],
      },
    ],
  },
  {
    name: "Projects",
    svg: IconGnavProjects,
    activeSvg: IconGnavProjectsActive,
  },
  {
    name: "Virtual Agents",
    svg: IconGnavTitanAdvisor,
    activeSvg: IconGnavTitanAdvisorActive,
    expandable: true,
    sections: [
      {
        items: [
          "Agent Settings",
          "Agent Workflows",
          "Dashboard",
          "Interactions",
        ],
      },
    ],
  },
  {
    name: "Command Center",
    svg: IconGnavCommandCenter,
    activeSvg: IconGnavCommandCenterActive,
    expandable: true,
    sections: [
      {
        items: ["My Command Center", "Business Goals"],
      },
    ],
  },
  { name: "Automation", svg: IconGnavTasks, activeSvg: IconGnavTasksActive },
  {
    name: "CRM",
    svg: IconGnavAccount,
    activeSvg: IconGnavAccountActive,
    expandable: true,
    sections: [
      {
        items: ["Opportunities", "Leads"],
      },
      {
        label: "Financials",
        items: [
          "Pipeline Metrics",
          "Leads Metrics",
          "Sales Team Activity",
          "My Metrics",
          "Tasks",
          "Plays",
          "Workflows",
          "Contacts",
          "Customers",
          "Locations",
        ],
      },
    ],
  },
  {
    name: "Marketing",
    svg: IconGnavMarketing,
    activeSvg: IconGnavMarketingActive,
    expandable: true,
    sections: [
      {
        label: "Analytics",
        items: [
          "Marketing Overview",
          "One-Time Campaigns",
          "Automated Campaigns",
          "Data Exports",
          "Ads",
          "Attributed Leads",
        ],
      },
      {
        label: "Campaigns",
        items: [
          "Campaign Manager",
          "Email Templates",
          "Autopilot Campaigns",
          "Ads Optimizer",
        ],
      },
      {
        label: "Audiences",
        items: [
          "Acquisition Segments",
          "Retention Segments",
          "Contacts",
          "Suppression",
          "Audiences",
        ],
      },
      {
        label: "Reputation",
        items: ["Activate Reputation"],
      },
    ],
  },
  {
    name: "Fleet Pro",
    svg: IconGnavFleetPro,
    activeSvg: IconGnavFleetProActive,
  },
  {
    name: "Field Pro",
    svg: IconGnavFieldPro,
    activeSvg: IconGnavFieldProActive,
    expandable: true,
    sections: [
      {
        items: [
          "Recordings",
          "Insights",
          "Scorecards",
          "Comments",
          "Equipment Hub",
        ],
      },
    ],
  },
  {
    name: "Production Queue",
    svg: IconGnavProductionQueue,
    activeSvg: IconGnavProductionQueueActive,
  },
  {
    name: "Insurance Queue",
    svg: IconGnavInsuranceQueue,
    activeSvg: IconGnavInsuranceQueueActive,
  },
];

const GO_TO_COLUMNS: { title: string; moduleNames: string[] }[] = [
  {
    title: "Scheduling & Dispatch",
    moduleNames: [
      "Dashboard",
      "Messages",
      "Communications",
      "Schedule",
      "Dispatch",
    ],
  },
  {
    title: "Accounting & Reporting",
    moduleNames: [
      "Accounting",
      "Inventory",
      "Follow Up",
      "Reports",
      "Pricebook",
    ],
  },
  {
    title: "Demand",
    moduleNames: [
      "Projects",
      "Virtual Agents",
      "Command Center",
      "Automation",
      "CRM",
    ],
  },
  {
    title: "Projects & Field",
    moduleNames: [
      "Marketing",
      "Fleet Pro",
      "Field Pro",
      "Production Queue",
      "Insurance Queue",
    ],
  },
];

const GO_TO_LOCKED = new Set(["Dashboard"]);
const NAV_BADGES: Record<string, string> = {
  Calls: "1",
  Messages: "1",
};
const STAR_COLOR = "var(--a2-color-yellow-400, #f5c518)";
const MODULE_BY_NAME = Object.fromEntries(
  MAIN_NAV.map((module) => [module.name, module]),
);
const SIDEBAR_NAV: NavModule[] = MAIN_NAV;

function destinationId(moduleName: string, item: string) {
  return `${moduleName}::${item}`;
}

function nestedDestinationIds(module: NavModule) {
  return (module.sections ?? []).flatMap((section) =>
    section.items.map((item) => destinationId(module.name, item)),
  );
}

function starrableIdsForModule(module: NavModule) {
  const nested = nestedDestinationIds(module);
  return nested.length > 0 ? nested : [module.name];
}

function allStarrableIds() {
  return MAIN_NAV.flatMap(starrableIdsForModule);
}

const DEFAULT_UNSTARRED_MODULES = [
  "Fleet Pro",
  "Production Queue",
  "Insurance Queue",
];
const DEFAULT_UNSTARRED_SECTIONS: Record<string, string[]> = {
  Marketing: ["Audiences"],
  Reports: ["Information"],
  Accounting: ["Financials"],
  CRM: ["Financials"],
  Dispatch: ["Dispatch Pro"],
};
const DEFAULT_UNSTARRED_ITEMS = [
  destinationId("Schedule", "Capacity Reporting"),
  destinationId("Virtual Agents", "Agent Settings"),
  destinationId("Dashboard", "Dictionary"),
  destinationId("Accounting", "Journal Entries"),
];

function defaultUnstarredIds() {
  const ids = new Set<string>(DEFAULT_UNSTARRED_ITEMS);
  for (const name of DEFAULT_UNSTARRED_MODULES) {
    const module = MODULE_BY_NAME[name];
    if (module) {
      starrableIdsForModule(module).forEach((id) => ids.add(id));
    }
  }
  for (const [moduleName, labels] of Object.entries(
    DEFAULT_UNSTARRED_SECTIONS,
  )) {
    const module = MODULE_BY_NAME[moduleName];
    const labelSet = new Set(labels);
    for (const section of module?.sections ?? []) {
      if (section.label && labelSet.has(section.label)) {
        section.items.forEach((item) =>
          ids.add(destinationId(moduleName, item)),
        );
      }
    }
  }
  return ids;
}

function defaultStarredIds() {
  const unstarred = defaultUnstarredIds();
  return new Set(allStarrableIds().filter((id) => !unstarred.has(id)));
}

function moduleStarState(module: NavModule, starred: Set<string>) {
  const ids = starrableIdsForModule(module);
  const count = ids.filter((id) => starred.has(id)).length;
  if (count === 0) {
    return "none" as const;
  }
  if (count === ids.length) {
    return "all" as const;
  }
  return "some" as const;
}

function isModuleVisibleInNav(module: NavModule, starred: Set<string>) {
  return starrableIdsForModule(module).some((id) => starred.has(id));
}

function visibleSections(module: NavModule, starred: Set<string>) {
  return (module.sections ?? [])
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        starred.has(destinationId(module.name, item)),
      ),
    }))
    .filter((section) => section.items.length > 0);
}

function selectionAfterStarChange(
  starred: Set<string>,
  active: string,
  activeSubitem: string,
  openItem: string | null,
): {
  active: string;
  activeSubitem: string;
  openItem: string | null;
} | null {
  const current = MODULE_BY_NAME[active];
  if (current && isModuleVisibleInNav(current, starred)) {
    if (!current.expandable) {
      return activeSubitem ? { active, activeSubitem: "", openItem } : null;
    }
    const subitemVisible = visibleSections(current, starred).some((section) =>
      section.items.includes(activeSubitem),
    );
    if (!activeSubitem || subitemVisible) {
      return null;
    }
    return { active, activeSubitem: "", openItem };
  }

  const currentIndex = SIDEBAR_NAV.findIndex((item) => item.name === active);
  const firstVisible = (items: NavModule[]) =>
    items.find((item) => isModuleVisibleInNav(item, starred));
  const fallback =
    firstVisible(SIDEBAR_NAV.slice(currentIndex + 1)) ??
    firstVisible(SIDEBAR_NAV.slice(0, Math.max(currentIndex, 0)).reverse());
  if (!fallback) {
    if (!active && !activeSubitem && openItem === null) {
      return null;
    }
    return { active: "", activeSubitem: "", openItem: null };
  }

  const fallbackSubitem = fallback.expandable
    ? (visibleSections(fallback, starred).flatMap(
        (section) => section.items,
      )[0] ?? "")
    : "";

  return {
    active: fallback.name,
    activeSubitem: fallbackSubitem,
    openItem:
      openItem === active
        ? fallback.expandable
          ? fallback.name
          : null
        : openItem,
  };
}

function nestedNotificationCount(
  module: NavModule,
  starred: Set<string>,
): string | undefined {
  const total = (module.sections ?? []).reduce((sum, section) => {
    return (
      sum +
      section.items.reduce((sectionSum, item) => {
        if (!starred.has(destinationId(module.name, item))) {
          return sectionSum;
        }
        const value = Number.parseInt(NAV_BADGES[item] ?? "", 10);
        return sectionSum + (Number.isFinite(value) ? value : 0);
      }, 0)
    );
  }, 0);
  return total > 0 ? String(total) : undefined;
}

function railModuleBadge(
  module: NavModule,
  starred: Set<string>,
  expandedOpen: boolean,
): string | undefined {
  if (NAV_BADGES[module.name]) {
    return NAV_BADGES[module.name];
  }
  if (!expandedOpen) {
    return nestedNotificationCount(module, starred);
  }
  return undefined;
}

function NestedItem({
  label,
  selected,
  badge,
  onClick,
}: {
  label: string;
  selected: boolean;
  badge?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="block-gnav-nested"
      onClick={onClick}
      aria-current={selected ? "page" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        width: "100%",
        minHeight: 36,
        padding: "8px 8px 8px 36px",
        border: "none",
        borderRadius: core.primitive?.Radius2?.value,
        background: selected ? ITEM_BG_SELECTED : "transparent",
        color: selected ? ITEM_FG_SELECTED : ITEM_FG_DEFAULT,
        cursor: "pointer",
        textAlign: "left",
        gap: 8,
      }}
    >
      <Text
        variant="body"
        size="small"
        style={{
          color: "inherit",
          fontWeight: 400,
          fontSize: 14,
          minWidth: 0,
          flex: 1,
        }}
      >
        {label}
      </Text>
      {badge ? <NavCountBadge value={badge} /> : null}
    </button>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function compileQuery(query: string) {
  const q = query.trim();
  if (!q) {
    return { testRe: null, hlRe: null, invalid: false };
  }
  let src = q;
  let invalid = false;
  try {
    void new RegExp(q);
  } catch {
    invalid = true;
    src = escapeRegExp(q);
  }
  return {
    testRe: new RegExp(src, "i"),
    hlRe: new RegExp(src, "ig"),
    invalid,
  };
}

function matchesQuery(text: string, testRe: RegExp | null) {
  return !testRe || testRe.test(text);
}

function HighlightedLabel({
  text,
  regex,
  style,
}: {
  text: string;
  regex: RegExp | null;
  style?: CSSProperties;
}) {
  let content: ReactNode = text;
  if (regex) {
    const parts: ReactNode[] = [];
    const re = new RegExp(regex.source, regex.flags);
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let key = 0;
    re.lastIndex = 0;
    while ((match = re.exec(text)) !== null) {
      if (match[0] === "") {
        re.lastIndex += 1;
        continue;
      }
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(<mark key={key}>{match[0]}</mark>);
      key += 1;
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    content = parts;
  }

  return (
    <Text variant="body" style={style}>
      {content}
    </Text>
  );
}

function GoToStarButton({
  filled,
  outlined,
  label,
  unstarOnClick,
  onToggle,
}: {
  filled: boolean;
  outlined?: boolean;
  label: string;
  unstarOnClick?: boolean;
  onToggle: () => void;
}) {
  const persist = filled || Boolean(outlined);
  const remove = unstarOnClick ?? filled;
  return (
    <Button
      className="block-gnav-goto-star"
      size="xsmall"
      appearance="ghost"
      icon={filled ? IconStar : IconStarBorder}
      aria-label={remove ? `Unstar ${label}` : `Star ${label}`}
      aria-pressed={persist}
      data-starred={persist ? (filled ? "filled" : "outlined") : undefined}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      style={{
        color: persist ? STAR_COLOR : ITEM_FG_SUBDUED,
        flexShrink: 0,
      }}
    />
  );
}

function NavCountBadge({ value }: { value: string }) {
  return (
    <span className="block-gnav-count-badge">
      <Badge aria-label={`${value} notifications`}>{value}</Badge>
    </span>
  );
}

function GoToDialog({
  open,
  starred,
  onStarredChange,
  onClose,
  onNavigate,
}: {
  open: boolean;
  starred: Set<string>;
  onStarredChange: (updater: (prev: Set<string>) => Set<string>) => void;
  onClose: () => void;
  onNavigate: (moduleName: string, item?: string) => void;
}) {
  const [query, setQuery] = useState("");

  const toggleDestination = (id: string) => {
    onStarredChange((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleModule = (module: NavModule) => {
    onStarredChange((prev) => {
      const next = new Set(prev);
      const ids = starrableIdsForModule(module);
      const allOn = ids.every((id) => next.has(id));
      if (allOn) {
        ids.forEach((id) => next.delete(id));
      } else {
        ids.forEach((id) => next.add(id));
      }
      return next;
    });
  };

  const compiled = useMemo(() => compileQuery(query), [query]);
  const searching = query.trim().length > 0;

  const columns = useMemo(() => {
    return GO_TO_COLUMNS.map((column) => {
      const modules = column.moduleNames
        .map((name) => MODULE_BY_NAME[name])
        .filter((module): module is NavModule => Boolean(module))
        .map((module) => {
          const moduleMatches = matchesQuery(module.name, compiled.testRe);
          const sections = (module.sections ?? [])
            .map((section) => ({
              ...section,
              items: section.items.filter(
                (item) => moduleMatches || matchesQuery(item, compiled.testRe),
              ),
            }))
            .filter((section) => section.items.length > 0);
          const hasVisibleChildren = sections.length > 0;
          const visible = !searching || moduleMatches || hasVisibleChildren;
          return { module, sections, visible, moduleMatches };
        })
        .filter((entry) => entry.visible);

      return { ...column, modules };
    }).filter((column) => column.modules.length > 0);
  }, [compiled.testRe, searching]);

  const displayColumns = searching
    ? [
        {
          title: "",
          modules: columns.flatMap((column) => column.modules),
        },
      ]
    : columns;
  const hasMatches = displayColumns.some((column) => column.modules.length > 0);

  const labelStyle = {
    color: "inherit",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "16px",
  } as CSSProperties;

  return (
    <Dialog
      className="block-gnav-goto-dialog"
      open={open}
      onClose={onClose}
      size="xlarge"
      aria-label="Go to"
      style={{ colorScheme: "dark" }}
      initialFocusResolver={(focusables) =>
        focusables.find((el) => el.tagName === "INPUT") ?? focusables[0]
      }
    >
      <Dialog.Content
        sticky
        style={{
          paddingBlockStart: core.primitive?.Size3?.value,
          paddingBlockEnd: 0,
        }}
      >
        <SearchField
          placeholder="Go to ..."
          size="small"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onClear={() => setQuery("")}
          aria-label="Go to"
          style={{
            width: "100%",
            marginBottom: compiled.invalid
              ? core.primitive?.Size2?.value
              : core.primitive?.Size6?.value,
          }}
        />
        {compiled.invalid ? (
          <Text
            variant="body"
            size="small"
            style={{
              color: ITEM_FG_SUBDUED,
              marginBottom: core.primitive?.Size4?.value,
            }}
          >
            invalid regex — matching literally
          </Text>
        ) : null}
      </Dialog.Content>
      <Dialog.Content
        style={{
          paddingBlockStart: 0,
          paddingBlockEnd: core.primitive?.Size3?.value,
        }}
      >
        {!hasMatches ? (
          <Text
            variant="body"
            style={{
              color: ITEM_FG_SUBDUED,
              padding: "40px 10px",
              fontSize: 13,
            }}
          >
            No matches.
          </Text>
        ) : (
          <Flex alignItems="stretch" style={{ minWidth: 0, width: "100%" }}>
            {displayColumns.map((column, index) => (
              <Flex
                key={column.title || "results"}
                alignItems="stretch"
                style={{ flex: 1, minWidth: 0 }}
              >
                {index > 0 ? (
                  <Divider
                    vertical
                    spacing="2"
                    style={{
                      alignSelf: "stretch",
                      backgroundColor: "transparent",
                      ...DIVIDER_STYLE,
                    }}
                  />
                ) : null}
                <Flex direction="column" style={{ flex: 1, minWidth: 0 }}>
                  {column.title ? (
                    <Text
                      variant="eyebrow"
                      style={{
                        color: ITEM_FG_SUBDUED,
                        paddingBottom: core.primitive?.Size2?.value,
                      }}
                    >
                      {column.title}
                    </Text>
                  ) : null}
                  {column.modules.map(({ module, sections }) => {
                    const locked = GO_TO_LOCKED.has(module.name);
                    const starState = moduleStarState(module, starred);
                    const moduleBadge = NAV_BADGES[module.name];
                    const hasNested = nestedDestinationIds(module).length > 0;
                    const showNested = sections.length > 0;
                    const moduleLabel = (
                      <Flex
                        alignItems="center"
                        gap="2"
                        style={{ minWidth: 0, flex: 1 }}
                      >
                        <Icon
                          svg={module.svg}
                          size="medium"
                          style={{ color: "inherit", flexShrink: 0 }}
                        />
                        <HighlightedLabel
                          text={module.name}
                          regex={compiled.hlRe}
                          style={labelStyle}
                        />
                      </Flex>
                    );

                    return (
                      <div key={module.name}>
                        <div
                          className="block-gnav-goto-row"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            boxSizing: "border-box",
                            width: "100%",
                            minHeight: 36,
                            padding: "4px 4px 4px 4px",
                            marginBottom: showNested ? 22 : 0,
                            borderRadius: core.primitive?.Radius2?.value,
                            color: NAV_WHITE,
                            cursor: locked ? "default" : "pointer",
                          }}
                        >
                          {locked ? (
                            moduleLabel
                          ) : (
                            <button
                              type="button"
                              onClick={() => onNavigate(module.name)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flex: 1,
                                minWidth: 0,
                                padding: 0,
                                border: "none",
                                background: "transparent",
                                color: "inherit",
                                font: "inherit",
                                cursor: "pointer",
                                textAlign: "left",
                              }}
                            >
                              {moduleLabel}
                            </button>
                          )}
                          <Flex alignItems="center" gap="1">
                            {moduleBadge ? (
                              <NavCountBadge value={moduleBadge} />
                            ) : null}
                            {locked ? (
                              <Button
                                className="block-gnav-goto-star"
                                size="xsmall"
                                appearance="ghost"
                                icon={IconLock}
                                aria-label={`${module.name} is locked`}
                                tabIndex={-1}
                                style={{
                                  color: ITEM_FG_SUBDUED,
                                  flexShrink: 0,
                                  pointerEvents: "none",
                                }}
                              />
                            ) : (
                              <GoToStarButton
                                filled={starState === "all"}
                                outlined={starState === "some"}
                                unstarOnClick={starState === "all"}
                                label={
                                  hasNested
                                    ? `all ${module.name} destinations`
                                    : module.name
                                }
                                onToggle={() => toggleModule(module)}
                              />
                            )}
                          </Flex>
                        </div>
                        {sections.map((section) => (
                          <Flex
                            key={section.label ?? section.items.join("-")}
                            direction="column"
                          >
                            {section.label ? (
                              <Text
                                variant="eyebrow"
                                size="small"
                                style={{
                                  color: ITEM_FG_SUBDUED,
                                  padding: "12px 0 4px 28px",
                                }}
                              >
                                {section.label}
                              </Text>
                            ) : null}
                            {section.items.map((item) => {
                              const itemId = destinationId(module.name, item);
                              const itemStarred = starred.has(itemId);
                              const itemBadge = NAV_BADGES[item];
                              return (
                                <div
                                  key={item}
                                  className="block-gnav-goto-row"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    boxSizing: "border-box",
                                    width: "100%",
                                    minHeight: 36,
                                    paddingRight: 4,
                                    borderRadius:
                                      core.primitive?.Radius2?.value,
                                    color: NAV_WHITE,
                                    cursor: "pointer",
                                  }}
                                >
                                  <button
                                    type="button"
                                    onClick={() =>
                                      onNavigate(module.name, item)
                                    }
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      alignSelf: "stretch",
                                      flex: 1,
                                      minWidth: 0,
                                      padding: section.label
                                        ? "4px 0 4px 44px"
                                        : "4px 0 4px 40px",
                                      border: "none",
                                      background: "transparent",
                                      color: "inherit",
                                      font: "inherit",
                                      cursor: "pointer",
                                      textAlign: "left",
                                    }}
                                  >
                                    <HighlightedLabel
                                      text={item}
                                      regex={compiled.hlRe}
                                      style={{
                                        ...labelStyle,
                                        minWidth: 0,
                                        flex: 1,
                                      }}
                                    />
                                  </button>
                                  <Flex alignItems="center" gap="1">
                                    {itemBadge ? (
                                      <NavCountBadge value={itemBadge} />
                                    ) : null}
                                    <GoToStarButton
                                      filled={itemStarred}
                                      label={item}
                                      onToggle={() => toggleDestination(itemId)}
                                    />
                                  </Flex>
                                </div>
                              );
                            })}
                          </Flex>
                        ))}
                      </div>
                    );
                  })}
                </Flex>
              </Flex>
            ))}
          </Flex>
        )}
      </Dialog.Content>
    </Dialog>
  );
}

function GoToTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      style={{
        width: "100%",
        paddingBottom: core.primitive?.Size4?.value,
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "relative", width: 160, flexShrink: 0 }}>
        <SearchField
          className="block-gnav-goto"
          placeholder="Go to..."
          size="small"
          readOnly
          aria-label="Go to"
          onClick={onOpen}
          style={{ width: "100%" }}
        />
        <Chip
          label="⌘ K"
          size="small"
          style={{
            position: "absolute",
            right: core.primitive?.Size2?.value,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />
      </div>
      <Button
        size="small"
        appearance="ghost"
        icon={IconUnfoldMore}
        aria-label="Go to"
        onClick={onOpen}
      />
    </Flex>
  );
}

function SidebarItem({
  name,
  svg,
  onClick,
  active,
  badge,
}: {
  name?: string;
  svg: Svg;
  onClick?: () => void;
  active?: boolean;
  badge?: string;
}) {
  const color = active ? ITEM_FG_SELECTED : ITEM_FG_DEFAULT;

  return (
    <button
      type="button"
      aria-label={name ?? "Expand menu"}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: core.primitive?.SizeHalf?.value,
        boxSizing: "border-box",
        width: 52,
        padding: 0,
        border: "none",
        background: "transparent",
        color,
        cursor: "pointer",
      }}
    >
      <span
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          svg={svg}
          size="medium"
          style={{ color: "inherit", flexShrink: 0 }}
          aria-hidden
        />
        {badge ? (
          <Badge aria-label={`${badge} notifications`}>{badge}</Badge>
        ) : null}
      </span>
      {name ? (
        <Text
          variant="body"
          size="small"
          style={{
            color: "inherit",
            fontWeight: 600,
            fontSize: 10,
            lineHeight: 1,
            textAlign: "center",
            width: "100%",
            wordBreak: "break-word",
          }}
        >
          {name}
        </Text>
      ) : null}
    </button>
  );
}

function TopLevelItem({
  label,
  svg,
  selected,
  open,
  expandable,
  badge,
  onClick,
}: {
  label: string;
  svg: Svg;
  selected: boolean;
  open: boolean;
  expandable: boolean;
  badge?: string;
  onClick?: () => void;
}) {
  const foreground = selected
    ? ITEM_FG_SELECTED
    : open
      ? ITEM_FG_SUBDUED
      : ITEM_FG_DEFAULT;
  const background = selected ? ITEM_BG_SELECTED : "transparent";

  return (
    <button
      type="button"
      className="block-gnav-top-level"
      onClick={onClick}
      aria-expanded={expandable ? open : undefined}
      aria-current={selected ? "page" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        width: "100%",
        minHeight: 36,
        padding: core.primitive?.Size1?.value,
        border: "none",
        borderRadius: core.primitive?.Radius2?.value,
        background,
        color: foreground,
        cursor: "pointer",
        textAlign: "left",
        gap: 8,
      }}
    >
      <Flex alignItems="center" gap="2" style={{ minWidth: 0, flex: 1 }}>
        <Icon
          svg={svg}
          size="medium"
          style={{ color: "inherit", flexShrink: 0 }}
        />
        <Text
          variant="body"
          style={{
            color: "inherit",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: "16px",
            flex: 1,
            minWidth: 0,
          }}
        >
          {label}
        </Text>
      </Flex>
      <Flex alignItems="center" gap="1" style={{ flexShrink: 0 }}>
        {badge ? <NavCountBadge value={badge} /> : null}
        {expandable ? (
          <Icon
            svg={open ? IconChevronUp : IconChevronDown}
            size="small"
            style={{ color: "inherit", flexShrink: 0 }}
          />
        ) : null}
      </Flex>
    </button>
  );
}

function CollapsedRail({
  active,
  starred,
  onSelect,
  onExpand,
  onOpenGoTo,
}: {
  active?: string;
  starred: Set<string>;
  onSelect: (name: string) => void;
  onExpand: () => void;
  onOpenGoTo: () => void;
}) {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      style={{
        width: COLLAPSED_NAV_WIDTH,
        height: "100%",
        color: NAV_WHITE,
        backgroundColor: NAV_BG,
        paddingTop: core.primitive?.Size4?.value,
        paddingLeft: core.primitive?.Size1?.value,
        paddingRight: core.primitive?.Size1?.value,
        boxSizing: "border-box",
      }}
    >
      <Flex
        direction="column"
        gap="3"
        grow={1}
        alignItems="center"
        style={{
          overflowY: "auto",
          minHeight: 0,
          width: "100%",
        }}
      >
        <SidebarItem name="Go to..." svg={IconSearch} onClick={onOpenGoTo} />
        {SIDEBAR_NAV.flatMap((item) => {
          if (!isModuleVisibleInNav(item, starred)) {
            return [];
          }
          const isActive = item.name === active;
          const nodes = [
            <SidebarItem
              key={item.name}
              name={item.name}
              svg={isActive ? item.activeSvg : item.svg}
              active={isActive}
              badge={railModuleBadge(item, starred, false)}
              onClick={() => onSelect(item.name)}
            />,
          ];
          if (item.dividerAfter) {
            nodes.push(
              <Divider
                key={`${item.name}-divider`}
                spacing="0"
                style={{
                  width: "100%",
                  ...DIVIDER_STYLE,
                }}
              />,
            );
          }
          return nodes;
        })}
      </Flex>
      <div
        style={{
          borderTop: `1px solid ${NAV_DIVIDER_COLOR}`,
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <button
          type="button"
          onClick={onExpand}
          aria-label="Expand menu"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: NAV_WHITE,
          }}
        >
          <Icon
            svg={IconGnavMenuExpand}
            size="medium"
            style={{ color: NAV_WHITE }}
          />
        </button>
      </div>
    </Flex>
  );
}

function ExpandedRail({
  active,
  activeSubitem,
  openItem,
  starred,
  onSelect,
  onSelectSubitem,
  onOpenItemChange,
  onCollapse,
  onOpenGoTo,
}: {
  active?: string;
  activeSubitem: string;
  openItem: string | null;
  starred: Set<string>;
  onSelect: (name: string) => void;
  onSelectSubitem: (name: string) => void;
  onOpenItemChange: (name: string | null) => void;
  onCollapse: () => void;
  onOpenGoTo: () => void;
}) {
  return (
    <Flex
      direction="column"
      style={{
        width: NAV_WIDTH,
        height: "100%",
        backgroundColor: NAV_BG,
        color: NAV_WHITE,
        flexShrink: 0,
      }}
    >
      <Flex
        direction="column"
        grow={1}
        style={{
          paddingTop: core.primitive?.Size4?.value,
          paddingLeft: 8,
          paddingRight: 8,
          overflowY: "auto",
          minHeight: 0,
        }}
      >
        <GoToTrigger onOpen={onOpenGoTo} />
        {SIDEBAR_NAV.map((item) => {
          if (!isModuleVisibleInNav(item, starred)) {
            return null;
          }
          const isOpen = openItem === item.name;
          const isActive = item.name === active;
          const expandable = Boolean(item.expandable);
          const sections = visibleSections(item, starred);
          const visibleItems = sections.flatMap((section) => section.items);
          const currentSubitemVisible = visibleItems.includes(activeSubitem);
          const selected =
            isActive && (!expandable || !isOpen || !currentSubitemVisible);
          const icon = selected ? item.activeSvg : item.svg;

          return (
            <div key={item.name}>
              <TopLevelItem
                label={item.name}
                svg={icon}
                selected={selected}
                open={isOpen}
                expandable={expandable && sections.length > 0}
                badge={railModuleBadge(
                  item,
                  starred,
                  isOpen && sections.length > 0,
                )}
                onClick={() => {
                  if (expandable && visibleItems.length > 0) {
                    if (isOpen) {
                      onOpenItemChange(null);
                      return;
                    }
                    onOpenItemChange(item.name);
                    const keepCurrent =
                      isActive && visibleItems.includes(activeSubitem);
                    if (!keepCurrent) {
                      const first = visibleItems[0];
                      if (first) {
                        onSelectSubitem(first);
                      }
                    }
                    onSelect(item.name);
                    return;
                  }
                  onOpenItemChange(null);
                  onSelectSubitem("");
                  onSelect(item.name);
                }}
              />
              {isOpen && sections.length > 0
                ? sections.map((section) => (
                    <Flex
                      key={section.label ?? section.items.join("-")}
                      direction="column"
                    >
                      {section.label ? (
                        <Text
                          variant="eyebrow"
                          size="small"
                          style={{
                            color: SECTION_LABEL_COLOR,
                            padding: "10px 8px 4px 36px",
                            fontSize: 10,
                            letterSpacing: "0.08em",
                          }}
                        >
                          {section.label}
                        </Text>
                      ) : null}
                      {section.items.map((subitem) => (
                        <NestedItem
                          key={subitem}
                          label={subitem}
                          selected={isActive && subitem === activeSubitem}
                          badge={NAV_BADGES[subitem]}
                          onClick={() => {
                            onSelectSubitem(subitem);
                            onSelect(item.name);
                          }}
                        />
                      ))}
                    </Flex>
                  ))
                : null}
              {item.dividerAfter ? (
                <Divider
                  spacing="0"
                  style={{
                    width: "100%",
                    ...DIVIDER_STYLE,
                  }}
                />
              ) : null}
            </div>
          );
        })}
      </Flex>
      <div
        style={{
          borderTop: `1px solid ${NAV_DIVIDER_COLOR}`,
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <button
          type="button"
          onClick={onCollapse}
          aria-label="Collapse menu"
          aria-expanded={true}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "8px 12px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: NAV_WHITE,
          }}
        >
          <Icon
            svg={IconGnavMenuCollapse}
            size="medium"
            style={{ color: NAV_WHITE, flexShrink: 0 }}
          />
        </button>
      </div>
    </Flex>
  );
}

function GlobalNav({
  active: initialActive = "Virtual Agents",
}: {
  active?: string;
}) {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(initialActive);
  const [openItem, setOpenItem] = useState<string | null>(initialActive);
  const [activeSubitem, setActiveSubitem] = useState("Agent Workflows");
  const [goToOpen, setGoToOpen] = useState(false);
  const [starred, setStarred] = useState<Set<string>>(() =>
    defaultStarredIds(),
  );

  const navigateTo = (moduleName: string, item?: string) => {
    const module = MODULE_BY_NAME[moduleName];
    setActive(moduleName);
    setExpanded(true);
    setGoToOpen(false);

    const starIds = item
      ? [destinationId(moduleName, item)]
      : module && nestedDestinationIds(module).length === 0
        ? starrableIdsForModule(module)
        : [];

    if (starIds.length > 0) {
      setStarred((prev) => {
        if (starIds.every((id) => prev.has(id))) {
          return prev;
        }
        const next = new Set(prev);
        starIds.forEach((id) => next.add(id));
        return next;
      });
    }

    if (item) {
      setOpenItem(moduleName);
      setActiveSubitem(item);
      return;
    }

    if (module?.expandable) {
      setOpenItem(moduleName);
      setActiveSubitem("");
      return;
    }

    setOpenItem(null);
    setActiveSubitem("");
  };

  const selectCollapsedModule = (moduleName: string) => {
    const module = MODULE_BY_NAME[moduleName];
    const sections = module ? visibleSections(module, starred) : [];
    setActive(moduleName);
    if (module?.expandable && sections.length > 0) {
      setOpenItem(moduleName);
      const visibleItems = sections.flatMap((section) => section.items);
      const keepCurrent =
        moduleName === active && visibleItems.includes(activeSubitem);
      setActiveSubitem(keepCurrent ? activeSubitem : (visibleItems[0] ?? ""));
      return;
    }
    setOpenItem(null);
    setActiveSubitem("");
  };

  const changeStarred = (updater: (prev: Set<string>) => Set<string>) => {
    const nextStarred = updater(starred);
    setStarred(nextStarred);
    const next = selectionAfterStarChange(
      nextStarred,
      active,
      activeSubitem,
      openItem,
    );
    if (!next) {
      return;
    }
    setActive(next.active);
    setActiveSubitem(next.activeSubitem);
    setOpenItem(next.openItem);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setGoToOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className="block-gnav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        flexShrink: 0,
        colorScheme: "dark",
        backgroundColor: NAV_BG,
        borderRadius: 0,
      }}
    >
      <style>
        {`
          .block-gnav button,
          .block-gnav button svg {
            transition: color 0.1s ease, fill 0.1s ease, background-color 0.1s ease, background 0.1s ease;
          }
          .block-gnav-top-level:hover:not([aria-current="page"]),
          .block-gnav-nested:hover:not([aria-current="page"]) {
            background: ${ITEM_BG_HOVER} !important;
          }
          .block-gnav-goto,
          .block-gnav-goto input {
            cursor: pointer;
          }
          .block-gnav-goto input {
            padding-inline-end: 44px;
          }
          .block-gnav-goto-dialog {
            color-scheme: dark;
            background-color: ${NAV_BG};
            border-color: ${NAV_DIVIDER_COLOR};
            max-height: min(888px, calc(100dvh - 32px));
          }
          .block-gnav-goto-dialog > section {
            max-height: min(888px, calc(100dvh - 32px));
          }
          .block-gnav [data-anv="divider"] {
            --a2-mod-divider-border-color: ${NAV_DIVIDER_COLOR};
          }
          .block-gnav-goto-dialog mark {
            background: var(--a2-background-color-primary-subdued);
            color: var(--a2-foreground-color-primary);
            border-radius: 2px;
            padding: 0 1px;
          }
          .block-gnav-count-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
          }
          .block-gnav-count-badge [data-anv="badge"] {
            position: static;
            transform: none;
            inset: auto;
            vertical-align: middle;
          }
          .block-gnav-goto-row .block-gnav-goto-star:not([data-starred]) {
            opacity: 0;
          }
          .block-gnav-goto-row:hover .block-gnav-goto-star,
          .block-gnav-goto-row:focus-within .block-gnav-goto-star,
          .block-gnav-goto-row .block-gnav-goto-star:focus-visible,
          .block-gnav-goto-row .block-gnav-goto-star[data-starred] {
            opacity: 1;
          }
          .block-gnav-goto-row:hover,
          .block-gnav-goto-row:focus-within {
            background: ${ITEM_BG_HOVER} !important;
          }
        `}
      </style>
      {expanded ? (
        <ExpandedRail
          active={active}
          activeSubitem={activeSubitem}
          openItem={openItem}
          starred={starred}
          onSelect={setActive}
          onSelectSubitem={setActiveSubitem}
          onOpenItemChange={setOpenItem}
          onCollapse={() => setExpanded(false)}
          onOpenGoTo={() => setGoToOpen(true)}
        />
      ) : (
        <CollapsedRail
          active={active}
          starred={starred}
          onSelect={selectCollapsedModule}
          onExpand={() => setExpanded(true)}
          onOpenGoTo={() => setGoToOpen(true)}
        />
      )}
      <GoToDialog
        open={goToOpen}
        starred={starred}
        onStarredChange={changeStarred}
        onClose={() => setGoToOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GlobalNav active="Virtual Agents" />
    </div>
  );
}

export default App;
