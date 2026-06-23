import { useEffect, useRef, useState } from "react";
import {
  SelectField,
  SelectFieldHandle,
  SelectFieldOption,
} from "@servicetitan/anvil2";
import { Button, Dialog, Flex, TextField } from "@servicetitan/anvil2";

type Customer = SelectFieldOption & { phone: string };

function App() {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: "1", label: "Acme HVAC", phone: "(555) 123-4567" },
    { id: "2", label: "Bluebird Plumbing", phone: "(555) 234-5678" },
    { id: "3", label: "Carolina Electric", phone: "(555) 345-6789" },
  ]);
  const [selected, setSelected] = useState<Customer | null>(null);
  const selectRef = useRef<SelectFieldHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftPhone, setDraftPhone] = useState("");

  // Open the menu on mount so the Add-new button is visible in screenshots.
  useEffect(() => {
    const timer = setTimeout(() => {
      const trigger = containerRef.current?.querySelector("input");
      trigger?.focus();
      trigger?.click();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const openCustomerDialog = (initialName: string) => {
    setDraftName(initialName);
    setDraftPhone("");
    setDialogOpen(true);
  };

  const saveCustomer = () => {
    const newCustomer: Customer = {
      id: crypto.randomUUID(),
      label: draftName,
      phone: draftPhone,
    };
    setCustomers((prev) => [...prev, newCustomer]);
    setSelected(newCustomer);
    selectRef.current?.invalidate();
    setDialogOpen(false);
  };

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "380px" }}>
      <SelectField
        ref={selectRef}
        label="Customer"
        placeholder="Search customers..."
        initialLoad="open"
        loadOptions={async (searchValue) =>
          searchValue
            ? customers.filter((c) =>
                c.label.toLowerCase().includes(searchValue.toLowerCase()),
              )
            : customers
        }
        value={selected}
        onSelectedOptionChange={(opt) => setSelected(opt as Customer | null)}
        addItemLabel={(searchText) =>
          searchText
            ? `Add "${searchText}" as new customer`
            : "Add new customer"
        }
        onAddNewItem={openCustomerDialog}
      />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Dialog.Header>Add new customer</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="3">
            <TextField
              label="Name"
              required
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
            />
            <TextField
              label="Phone"
              placeholder="(555) 555-5555"
              value={draftPhone}
              onChange={(e) => setDraftPhone(e.target.value)}
            />
          </Flex>
        </Dialog.Content>
        <Dialog.Footer>
          <Dialog.CancelButton appearance="ghost">Cancel</Dialog.CancelButton>
          <Button
            appearance="primary"
            onClick={saveCustomer}
            disabled={!draftName.trim()}
          >
            Save customer
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
