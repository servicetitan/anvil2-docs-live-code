import {
  SearchField,
  Checkbox,
  Chip,
  Divider,
  Text,
  Icon,
  Button,
  Flex,
} from "@servicetitan/anvil2";
import DragIndicator from "@servicetitan/anvil2/assets/icons/material/round/drag_indicator.svg";
import PushPin from "@servicetitan/anvil2/assets/icons/material/round/push_pin.svg";

function App() {
  return (
    <Flex direction="column" gap={8} style={{ maxWidth: 560, width: "100%" }}>
      <Flex direction="column" gap={4} style={{ width: "100%" }}>
        <Text>
          Your edits only apply to you and won’t affect teammates. You can
          reorder, hide, show, pin, or unpin columns below.
        </Text>
        <SearchField placeholder="Search..." aria-label="Search columns" />
      </Flex>

      <Flex direction="column" gap={6} style={{ width: "100%" }}>
        {/* Pinned */}
        <Flex direction="column" gap={2} style={{ width: "100%" }}>
          <Flex alignItems="center" gap={6} style={{ width: "100%" }}>
            <Text
              variant="eyebrow"
              size="small"
              style={{ whiteSpace: "nowrap" }}
            >
              Pinned Columns
            </Text>
            <div style={{ flex: 1 }}>
              <Divider spacing="0" />
            </div>
          </Flex>
          <Flex
            alignItems="center"
            gap={2}
            style={{ padding: 4, width: "100%" }}
          >
            <Icon
              svg={DragIndicator}
              color="var(--a2-foreground-color-subdued)"
              aria-hidden
            />
            <Flex alignItems="center" gap={2} style={{ flex: 1, minWidth: 0 }}>
              <Checkbox label="Location Name" defaultChecked />
              <Chip label="Text" size="small" />
            </Flex>
            <Button
              appearance="ghost"
              size="small"
              icon={PushPin}
              aria-label="Unpin Location Name"
              onClick={() => console.log("Unpin Location Name")}
            />
          </Flex>
        </Flex>

        {/* Visible — each column shows its column-type tag */}
        <Flex direction="column" gap={2} style={{ width: "100%" }}>
          <Flex alignItems="center" gap={6} style={{ width: "100%" }}>
            <Text
              variant="eyebrow"
              size="small"
              style={{ whiteSpace: "nowrap" }}
            >
              Visible Columns
            </Text>
            <div style={{ flex: 1 }}>
              <Divider spacing="0" />
            </div>
          </Flex>
          <Flex
            alignItems="center"
            gap={2}
            style={{ padding: 4, width: "100%" }}
          >
            <Icon
              svg={DragIndicator}
              color="var(--a2-foreground-color-subdued)"
              aria-hidden
            />
            <Flex alignItems="center" gap={2} style={{ flex: 1, minWidth: 0 }}>
              <Checkbox label="Address" defaultChecked />
              <Chip label="Text" size="small" />
            </Flex>
            <Button
              appearance="ghost"
              size="small"
              icon={PushPin}
              aria-label="Pin Address"
              onClick={() => console.log("Pin Address")}
            />
          </Flex>
          <Flex
            alignItems="center"
            gap={2}
            style={{ padding: 4, width: "100%" }}
          >
            <Icon
              svg={DragIndicator}
              color="var(--a2-foreground-color-subdued)"
              aria-hidden
            />
            <Flex alignItems="center" gap={2} style={{ flex: 1, minWidth: 0 }}>
              <Checkbox label="Invoice Signature" defaultChecked />
              <Chip label="Image" size="small" />
            </Flex>
            <Button
              appearance="ghost"
              size="small"
              icon={PushPin}
              aria-label="Pin Invoice Signature"
              onClick={() => console.log("Pin Invoice Signature")}
            />
          </Flex>
          <Flex
            alignItems="center"
            gap={2}
            style={{ padding: 4, width: "100%" }}
          >
            <Icon
              svg={DragIndicator}
              color="var(--a2-foreground-color-subdued)"
              aria-hidden
            />
            <Flex alignItems="center" gap={2} style={{ flex: 1, minWidth: 0 }}>
              <Checkbox label="Tags" defaultChecked />
              <Chip label="Multi-select" size="small" />
            </Flex>
            <Button
              appearance="ghost"
              size="small"
              icon={PushPin}
              aria-label="Pin Tags"
              onClick={() => console.log("Pin Tags")}
            />
          </Flex>
          <Flex
            alignItems="center"
            gap={2}
            style={{ padding: 4, width: "100%" }}
          >
            <Icon
              svg={DragIndicator}
              color="var(--a2-foreground-color-subdued)"
              aria-hidden
            />
            <Flex alignItems="center" gap={2} style={{ flex: 1, minWidth: 0 }}>
              <Checkbox label="Parent Column Name" defaultChecked />
              <Chip label="Group" size="small" />
            </Flex>
            <Button
              appearance="ghost"
              size="small"
              icon={PushPin}
              aria-label="Pin Parent Column Name"
              onClick={() => console.log("Pin Parent Column Name")}
            />
          </Flex>
        </Flex>

        {/* Hidden */}
        <Flex direction="column" gap={2} style={{ width: "100%" }}>
          <Flex alignItems="center" gap={6} style={{ width: "100%" }}>
            <Text
              variant="eyebrow"
              size="small"
              style={{ whiteSpace: "nowrap" }}
            >
              Hidden Columns
            </Text>
            <div style={{ flex: 1 }}>
              <Divider spacing="0" />
            </div>
          </Flex>
          <Text subdued size="small">
            Hidden columns can’t be reordered or pinned.
          </Text>
          <Flex
            alignItems="center"
            gap={2}
            style={{ padding: 4, width: "100%" }}
          >
            <Flex alignItems="center" gap={2} style={{ flex: 1, minWidth: 0 }}>
              <Checkbox label="Last Appointment" />
              <Chip label="Date" size="small" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
