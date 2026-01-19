import { Toolbar } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          maxWidth: "220px",
        }}
      >
        <Toolbar associatedContent="basic toolbar">
          <Toolbar.Button
            onClick={() => console.log("File button default clicked")}
          >
            File
          </Toolbar.Button>

          <Toolbar.ButtonToggle
            defaultChecked
            onClick={() =>
              console.log("Bold button toggle uncontrolled clicked")
            }
          >
            Bold
          </Toolbar.ButtonToggle>

          <Toolbar.ButtonLink
            href="#"
            onClick={() => console.log("View Report default clicked")}
          >
            View Report
          </Toolbar.ButtonLink>

          <Toolbar.Select
            accessibleLabel="Status"
            items={[
              { id: "status1", label: "Active" },
              { id: "status2", label: "Pending" },
              { id: "status3", label: "Completed" },
              { id: "status4", label: "Cancelled", disabled: true },
            ]}
            onChange={() => console.log("Status select changed")}
          />
        </Toolbar>
      </div>
    </div>
  );
}

export default App;
