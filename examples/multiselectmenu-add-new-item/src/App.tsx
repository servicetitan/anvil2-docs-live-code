import { useEffect, useRef, useState } from "react";
import {
  MultiSelectMenu,
  MultiSelectMenuHandle,
  MultiSelectMenuOption,
} from "@servicetitan/anvil2";
import { Button, Dialog, Flex, TextField } from "@servicetitan/anvil2";

type Tag = MultiSelectMenuOption & { color: string };

function App() {
  const [tags, setTags] = useState<Tag[]>([
    { id: "bug", label: "bug", color: "#e53935" },
    { id: "feature", label: "feature", color: "#1e88e5" },
    { id: "browser", label: "browser", color: "#7b1fa2" },
    { id: "performance", label: "performance", color: "#f9a825" },
    { id: "docs", label: "docs", color: "#43a047" },
  ]);
  const [activeFilters, setActiveFilters] = useState<Tag[]>([]);
  const menuRef = useRef<MultiSelectMenuHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [draftLabel, setDraftLabel] = useState("");

  // Open the menu on mount so the Add-new button is visible in screenshots.
  useEffect(() => {
    const timer = setTimeout(() => {
      const trigger = containerRef.current?.querySelector("button");
      trigger?.focus();
      trigger?.click();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const openTagDialog = (initialLabel: string) => {
    setDraftLabel(initialLabel.trim().toLowerCase().replace(/\s+/g, "-"));
    setDialogOpen(true);
  };

  const saveTag = () => {
    const newTag: Tag = {
      id: draftLabel,
      label: draftLabel,
      color: "#43a047",
    };
    setTags((prev) => [...prev, newTag]);
    setActiveFilters((prev) => [...prev, newTag]);
    menuRef.current?.invalidate();
    setDialogOpen(false);
  };

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "420px" }}>
      <MultiSelectMenu
        ref={menuRef}
        label="Filter by tag"
        searchPlaceholder="Search or create a tag..."
        initialLoad="open"
        loadOptions={async (searchValue) =>
          searchValue
            ? tags.filter((t) =>
                t.label.toLowerCase().includes(searchValue.toLowerCase()),
              )
            : tags
        }
        value={activeFilters}
        onSelectedOptionsChange={(opts) => setActiveFilters(opts as Tag[])}
        addItemLabel={(searchText) =>
          searchText ? `Create tag "${searchText}"` : "Create new tag"
        }
        onAddNewItem={openTagDialog}
        trigger={(props) => (
          <Button {...props} appearance="secondary">
            {activeFilters.length > 0
              ? `Filter (${activeFilters.length})`
              : "Filter"}
          </Button>
        )}
      />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Dialog.Header>Create new tag</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="3">
            <TextField
              label="Tag name"
              description="Lowercase, hyphenated."
              required
              value={draftLabel}
              onChange={(e) => setDraftLabel(e.target.value)}
            />
          </Flex>
        </Dialog.Content>
        <Dialog.Footer>
          <Dialog.CancelButton appearance="ghost">Cancel</Dialog.CancelButton>
          <Button
            appearance="primary"
            onClick={saveTag}
            disabled={!draftLabel.trim()}
          >
            Create tag
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
