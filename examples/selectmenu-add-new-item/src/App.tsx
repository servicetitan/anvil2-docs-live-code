import { useEffect, useRef, useState } from "react";
import {
  SelectMenu,
  SelectMenuHandle,
  SelectMenuOption,
} from "@servicetitan/anvil2/beta";
import { Button, Dialog, Flex, TextField } from "@servicetitan/anvil2";

function App() {
  const [categories, setCategories] = useState<SelectMenuOption[]>([
    { id: "hvac-repair", label: "HVAC Repair" },
    { id: "plumbing-leak", label: "Plumbing Leak" },
    { id: "electrical-panel", label: "Electrical Panel" },
    { id: "appliance-install", label: "Appliance Install" },
  ]);
  const [selected, setSelected] = useState<SelectMenuOption | null>(null);
  const menuRef = useRef<SelectMenuHandle>(null);
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

  const openCategoryDialog = (initialLabel: string) => {
    setDraftLabel(initialLabel);
    setDialogOpen(true);
  };

  const saveCategory = () => {
    const id = draftLabel.trim().toLowerCase().replace(/\s+/g, "-");
    const newCategory: SelectMenuOption = { id, label: draftLabel };
    setCategories((prev) => [...prev, newCategory]);
    setSelected(newCategory);
    menuRef.current?.invalidate();
    setDialogOpen(false);
  };

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "420px" }}>
      <SelectMenu
        ref={menuRef}
        label="Job category"
        searchPlaceholder="Search categories..."
        initialLoad="open"
        loadOptions={async (searchValue) =>
          searchValue
            ? categories.filter((c) =>
                c.label.toLowerCase().includes(searchValue.toLowerCase()),
              )
            : categories
        }
        value={selected}
        onSelectedOptionChange={setSelected}
        addItemLabel={(searchText) =>
          searchText ? `Create "${searchText}" category` : "Create new category"
        }
        onAddNewItem={openCategoryDialog}
        trigger={(props) => (
          <Button {...props} appearance="secondary">
            {selected ? selected.label : "Set category"}
          </Button>
        )}
      />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Dialog.Header>Create new category</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="3">
            <TextField
              label="Display name"
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
            onClick={saveCategory}
            disabled={!draftLabel.trim()}
          >
            Create category
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
