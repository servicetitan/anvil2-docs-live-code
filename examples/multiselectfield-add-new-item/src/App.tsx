import { useEffect, useRef, useState } from "react";
import {
  MultiSelectField,
  MultiSelectFieldHandle,
  MultiSelectFieldOption,
} from "@servicetitan/anvil2";
import { Button, Dialog, Flex, TextField } from "@servicetitan/anvil2";

type Tag = MultiSelectFieldOption & { color: string };

function App() {
  const [tags, setTags] = useState<Tag[]>([
    { id: "bug", label: "bug", color: "#e53935" },
    { id: "feature", label: "feature", color: "#1e88e5" },
    { id: "needs-info", label: "needs info", color: "#f9a825" },
    { id: "good-first-issue", label: "good first issue", color: "#43a047" },
  ]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const fieldRef = useRef<MultiSelectFieldHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [draftLabel, setDraftLabel] = useState("");

  // Open the menu on mount so the Add-new button is visible in screenshots.
  useEffect(() => {
    const timer = setTimeout(() => {
      const trigger = containerRef.current?.querySelector("input");
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
    setSelectedTags((prev) => [...prev, newTag]);
    fieldRef.current?.invalidate();
    setDialogOpen(false);
  };

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "420px" }}>
      <MultiSelectField
        ref={fieldRef}
        label="Tags"
        placeholder="Search or add a tag..."
        initialLoad="open"
        loadOptions={async (searchValue) =>
          searchValue
            ? tags.filter((t) =>
                t.label.toLowerCase().includes(searchValue.toLowerCase()),
              )
            : tags
        }
        value={selectedTags}
        onSelectedOptionsChange={(opts) => setSelectedTags(opts as Tag[])}
        getChipProps={(option) => {
          const tag = tags.find((t) => t.id === option.id);
          return { color: tag?.color };
        }}
        addItemLabel={(searchText) =>
          searchText ? `Create tag "${searchText}"` : "Create new tag"
        }
        onAddNewItem={openTagDialog}
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
