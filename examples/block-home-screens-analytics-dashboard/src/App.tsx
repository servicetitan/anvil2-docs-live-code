import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  Flex,
  Icon,
  SegmentedControl,
  Text,
  useBreakpoint,
} from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";
import Add from "@servicetitan/anvil2/assets/icons/material/round/add.svg";
import Flag from "@servicetitan/anvil2/assets/icons/material/round/flag.svg";
import MoreHoriz from "@servicetitan/anvil2/assets/icons/material/round/more_horiz.svg";
import TrendingDown from "@servicetitan/anvil2/assets/icons/material/round/trending_down.svg";
import TrendingUp from "@servicetitan/anvil2/assets/icons/material/round/trending_up.svg";

function App() {
  const wide = Boolean(useBreakpoint()?.lg);

  return (
    <Flex
      direction="column"
      gap={10}
      style={{ padding: "2rem", maxWidth: 1200, width: "100%" }}
    >
      {/* Header */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        wrap="wrap"
        style={{ width: "100%" }}
      >
        <Flex alignItems="center" gap={6} wrap="wrap" style={{ minWidth: 0 }}>
          <Text variant="headline" el="h2">
            Cashflow
          </Text>
          <Divider vertical style={{ height: 24 }} />
          <SegmentedControl defaultSelected="7d" aria-label="Date range">
            <SegmentedControl.Segment value="7d">
              Last 7 days
            </SegmentedControl.Segment>
            <SegmentedControl.Segment value="30d">
              Last 30 days
            </SegmentedControl.Segment>
            <SegmentedControl.Segment value="all">
              All-time
            </SegmentedControl.Segment>
          </SegmentedControl>
        </Flex>
        <Button appearance="primary" icon={Add}>
          New invoice
        </Button>
      </Flex>

      {/* Stats */}
      <Card padding="0" gap={0} style={{ width: "100%" }}>
        <Flex
          direction="column"
          lg={{ direction: "row" }}
          style={{ width: "100%" }}
        >
          <Flex
            direction="column"
            gap={4}
            style={{
              flex: 1,
              minWidth: 0,
              padding: "24px 48px",
            }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="start"
              gap={2}
              style={{ width: "100%" }}
            >
              <Text variant="eyebrow" size="small">
                Revenue
              </Text>
              <Text size="small" style={{ fontWeight: 600 }}>
                +4.75%
              </Text>
            </Flex>
            <Text
              size="xlarge"
              style={{ fontWeight: "bold", marginTop: "auto" }}
            >
              $405,091.00
            </Text>
          </Flex>
          <Divider vertical={wide} />

          <Flex
            direction="column"
            gap={4}
            style={{
              flex: 1,
              minWidth: 0,
              padding: "24px 48px",
            }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="start"
              gap={2}
              style={{ width: "100%" }}
            >
              <Text variant="eyebrow" size="small">
                Overdue invoices
              </Text>
              <Text
                size="small"
                style={{
                  fontWeight: 600,
                  color: "var(--a2-foreground-color-danger)",
                  textAlign: "end",
                }}
              >
                +54.02% unfavorable
              </Text>
            </Flex>
            <Text
              size="xlarge"
              style={{ fontWeight: "bold", marginTop: "auto" }}
            >
              $12,787.00
            </Text>
          </Flex>
          <Divider vertical={wide} />

          <Flex
            direction="column"
            gap={4}
            style={{
              flex: 1,
              minWidth: 0,
              padding: "24px 48px",
            }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="start"
              gap={2}
              style={{ width: "100%" }}
            >
              <Text variant="eyebrow" size="small">
                Outstanding invoices
              </Text>
              <Text size="small" style={{ fontWeight: 600 }}>
                -1.39%
              </Text>
            </Flex>
            <Text
              size="xlarge"
              style={{ fontWeight: "bold", marginTop: "auto" }}
            >
              $245,988.00
            </Text>
          </Flex>
          <Divider vertical={wide} />

          <Flex
            direction="column"
            gap={4}
            style={{ flex: 1, minWidth: 0, padding: "24px 48px" }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="start"
              gap={2}
              style={{ width: "100%" }}
            >
              <Text variant="eyebrow" size="small">
                Expenses
              </Text>
              <Text
                size="small"
                style={{
                  fontWeight: 600,
                  color: "var(--a2-foreground-color-danger)",
                  textAlign: "end",
                }}
              >
                +10.18% unfavorable
              </Text>
            </Flex>
            <Text
              size="xlarge"
              style={{ fontWeight: "bold", marginTop: "auto" }}
            >
              $30,156.00
            </Text>
          </Flex>
        </Flex>
      </Card>

      {/* Recent activity */}
      <Flex direction="column" gap={4} style={{ width: "100%" }}>
        <Text variant="headline" el="h2">
          Recent activity
        </Text>
        <Flex direction="column" style={{ width: "100%" }}>
          <Flex
            style={{
              background: "var(--a2-background-color-strong)",
              padding: "16px 32px",
              width: "100%",
            }}
          >
            <Text variant="headline" el="h3" size="small" noMargin>
              Today
            </Text>
          </Flex>

          {/* Transaction 1 */}
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="start"
            gap={4}
            lg={{ direction: "row" }}
            style={{
              borderBottom: "1px solid var(--a2-border-color-subdued)",
              padding: "24px 32px",
              width: "100%",
            }}
          >
            <Flex gap={3} alignItems="start" style={{ flex: 1, minWidth: 0 }}>
              <Icon svg={TrendingUp} size="xlarge" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Flex alignItems="center" gap={2}>
                  <Text inline style={{ fontWeight: "bold" }}>
                    $7,600.00 USD
                  </Text>
                  <Chip
                    label="Paid"
                    color={core.semantic?.StatusColorSuccess?.value}
                  />
                </Flex>
                <Text size="small" subdued>
                  $900.00 tax
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              style={{ width: 160, flexShrink: 0 }}
            >
              <Text size="small">Reform</Text>
              <Text size="small" subdued>
                Website redesign
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              alignItems="end"
              style={{ flexShrink: 0 }}
            >
              <Button
                appearance="ghost"
                aria-label="View transaction, $7,600.00 USD, Paid"
              >
                View transaction
              </Button>
              <Flex alignItems="center" gap={1}>
                <Text size="small" subdued inline>
                  Invoice
                </Text>
                <Text size="small" inline>
                  #000012
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* Transaction 2 */}
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="start"
            gap={4}
            lg={{ direction: "row" }}
            style={{
              borderBottom: "1px solid var(--a2-border-color-subdued)",
              padding: "24px 32px",
              width: "100%",
            }}
          >
            <Flex gap={3} alignItems="start" style={{ flex: 1, minWidth: 0 }}>
              <Icon svg={TrendingDown} size="xlarge" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Flex alignItems="center" gap={2}>
                  <Text inline style={{ fontWeight: "bold" }}>
                    $10,000.00 USD
                  </Text>
                  <Chip label="Withdraw" />
                </Flex>
                <Text size="small" subdued>
                  $900.00 tax
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              style={{ width: 160, flexShrink: 0 }}
            >
              <Text size="small">Reform</Text>
              <Text size="small" subdued>
                Website redesign
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              alignItems="end"
              style={{ flexShrink: 0 }}
            >
              <Button
                appearance="ghost"
                aria-label="View transaction, $10,000.00 USD, Withdraw"
              >
                View transaction
              </Button>
              <Flex alignItems="center" gap={1}>
                <Text size="small" subdued inline>
                  Invoice
                </Text>
                <Text size="small" inline>
                  #000012
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* Transaction 3 */}
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="start"
            gap={4}
            lg={{ direction: "row" }}
            style={{
              borderBottom: "1px solid var(--a2-border-color-subdued)",
              padding: "24px 32px",
              width: "100%",
            }}
          >
            <Flex gap={3} alignItems="start" style={{ flex: 1, minWidth: 0 }}>
              <Icon svg={Flag} size="xlarge" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Flex alignItems="center" gap={2}>
                  <Text inline style={{ fontWeight: "bold" }}>
                    $2,000.00 USD
                  </Text>
                  <Chip
                    label="Overdue"
                    color={core.semantic?.StatusColorDanger?.value}
                  />
                </Flex>
                <Text size="small" subdued>
                  $130.00 tax
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              style={{ width: 160, flexShrink: 0 }}
            >
              <Text size="small">Reform</Text>
              <Text size="small" subdued>
                Website redesign
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              alignItems="end"
              style={{ flexShrink: 0 }}
            >
              <Button
                appearance="ghost"
                aria-label="View transaction, $2,000.00 USD, Overdue"
              >
                View transaction
              </Button>
              <Flex alignItems="center" gap={1}>
                <Text size="small" subdued inline>
                  Invoice
                </Text>
                <Text size="small" inline>
                  #000012
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            style={{
              background: "var(--a2-background-color-strong)",
              padding: "16px 32px",
              width: "100%",
            }}
          >
            <Text variant="headline" el="h3" size="small" noMargin>
              Yesterday
            </Text>
          </Flex>

          {/* Transaction 4 */}
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="start"
            gap={4}
            lg={{ direction: "row" }}
            style={{
              borderBottom: "1px solid var(--a2-border-color-subdued)",
              padding: "24px 32px",
              width: "100%",
            }}
          >
            <Flex gap={3} alignItems="start" style={{ flex: 1, minWidth: 0 }}>
              <Icon svg={TrendingUp} size="xlarge" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Flex alignItems="center" gap={2}>
                  <Text inline style={{ fontWeight: "bold" }}>
                    $14,000.00
                  </Text>
                  <Chip
                    label="Paid"
                    color={core.semantic?.StatusColorSuccess?.value}
                  />
                </Flex>
                <Text size="small" subdued>
                  $900.00 tax
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              style={{ width: 160, flexShrink: 0 }}
            >
              <Text size="small">Reform</Text>
              <Text size="small" subdued>
                Website redesign
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap={1}
              alignItems="end"
              style={{ flexShrink: 0 }}
            >
              <Button
                appearance="ghost"
                aria-label="View transaction, $14,000.00, Paid"
              >
                View transaction
              </Button>
              <Flex alignItems="center" gap={1}>
                <Text size="small" subdued inline>
                  Invoice
                </Text>
                <Text size="small" inline>
                  #000012
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Recent clients */}
      <Flex direction="column" gap={4} style={{ width: "100%" }}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Text variant="headline" el="h2">
            Recent clients
          </Text>
          <Button appearance="ghost">View all</Button>
        </Flex>
        <Flex
          direction="column"
          gap={4}
          alignItems="start"
          lg={{ direction: "row" }}
          style={{ width: "100%" }}
        >
          {/* Client 1 */}
          <Card
            padding="0"
            flexDirection="column"
            gap={0}
            style={{ flex: 1, minWidth: 0, overflow: "hidden" }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              style={{
                background: "var(--a2-background-color-strong)",
                borderBottom: "1px solid var(--a2-border-color-subdued)",
                padding: "12px 16px",
                width: "100%",
              }}
            >
              <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
                <Avatar name="Tuple" size="medium" aria-hidden />
                <Text variant="headline" el="h3" size="small">
                  Tuple
                </Text>
              </Flex>
              <Button
                appearance="ghost"
                icon={MoreHoriz}
                aria-label="Client options"
              />
            </Flex>
            <Flex
              direction="column"
              style={{ padding: "0 16px", width: "100%" }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                style={{
                  borderBottom: "1px solid var(--a2-border-color-subdued)",
                  padding: "12px 0",
                  width: "100%",
                }}
              >
                <Text size="small" subdued>
                  Last invoice
                </Text>
                <Text size="small" subdued style={{ fontWeight: "bold" }}>
                  December 13, 2022
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                style={{ padding: "12px 0", width: "100%" }}
              >
                <Text size="small" subdued>
                  Amount
                </Text>
                <Flex alignItems="center" gap={1}>
                  <Text size="small" subdued style={{ fontWeight: "bold" }}>
                    $2,000.00
                  </Text>
                  <Chip
                    label="Overdue"
                    color={core.semantic?.StatusColorDanger?.value}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>

          {/* Client 2 */}
          <Card
            padding="0"
            flexDirection="column"
            gap={0}
            style={{ flex: 1, minWidth: 0, overflow: "hidden" }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              style={{
                background: "var(--a2-background-color-strong)",
                borderBottom: "1px solid var(--a2-border-color-subdued)",
                padding: "12px 16px",
                width: "100%",
              }}
            >
              <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
                <Avatar name="SavvyCal" size="medium" aria-hidden />
                <Text variant="headline" el="h3" size="small">
                  SavvyCal
                </Text>
              </Flex>
              <Button
                appearance="ghost"
                icon={MoreHoriz}
                aria-label="Client options"
              />
            </Flex>
            <Flex
              direction="column"
              style={{ padding: "0 16px", width: "100%" }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                style={{
                  borderBottom: "1px solid var(--a2-border-color-subdued)",
                  padding: "12px 0",
                  width: "100%",
                }}
              >
                <Text size="small" subdued>
                  Last invoice
                </Text>
                <Text size="small" subdued style={{ fontWeight: "bold" }}>
                  January 22, 2023
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                style={{ padding: "12px 0", width: "100%" }}
              >
                <Text size="small" subdued>
                  Amount
                </Text>
                <Flex alignItems="center" gap={1}>
                  <Text size="small" subdued style={{ fontWeight: "bold" }}>
                    $14,000.00
                  </Text>
                  <Chip
                    label="Paid"
                    color={core.semantic?.StatusColorSuccess?.value}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>

          {/* Client 3 */}
          <Card
            padding="0"
            flexDirection="column"
            gap={0}
            style={{ flex: 1, minWidth: 0, overflow: "hidden" }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              style={{
                background: "var(--a2-background-color-strong)",
                borderBottom: "1px solid var(--a2-border-color-subdued)",
                padding: "12px 16px",
                width: "100%",
              }}
            >
              <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
                <Avatar name="Reform" size="medium" aria-hidden />
                <Text variant="headline" el="h3" size="small">
                  Reform
                </Text>
              </Flex>
              <Button
                appearance="ghost"
                icon={MoreHoriz}
                aria-label="Client options"
              />
            </Flex>
            <Flex
              direction="column"
              style={{ padding: "0 16px", width: "100%" }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                style={{
                  borderBottom: "1px solid var(--a2-border-color-subdued)",
                  padding: "12px 0",
                  width: "100%",
                }}
              >
                <Text size="small" subdued>
                  Last invoice
                </Text>
                <Text size="small" subdued style={{ fontWeight: "bold" }}>
                  December 13, 2022
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                style={{ padding: "12px 0", width: "100%" }}
              >
                <Text size="small" subdued>
                  Amount
                </Text>
                <Flex alignItems="center" gap={1}>
                  <Text size="small" subdued style={{ fontWeight: "bold" }}>
                    $7,600.00
                  </Text>
                  <Chip
                    label="Overdue"
                    color={core.semantic?.StatusColorDanger?.value}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
