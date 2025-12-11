import { Toolbar } from "@servicetitan/anvil2";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";
import Warning from "@servicetitan/anvil2/assets/icons/material/round/warning.svg";

function App() {
  const selectItems = [
    { id: "status1", label: "Active" },
    { id: "status2", label: "Pending" },
    { id: "status3", label: "Completed" },
    { id: "status4", label: "Cancelled", disabled: true },
  ];

  const additionalItems = [
    <Toolbar.Button key="1" onClick={console.log}>
      Additional Action 1
    </Toolbar.Button>,
    <Toolbar.Button key="2" onClick={console.log}>
      Additional Action 2
    </Toolbar.Button>,
  ];

  return (
    <div style={{ minHeight: "284px" }}>
      <div
        style={{
          resize: "horizontal",
          overflow: "hidden",
          border: "1px dashed #ccc",
          padding: "10px",
          height: "100%",
          width: "75%",
        }}
      >
        <Toolbar
          associatedContent="playground toolbar"
          additionalItems={additionalItems}
          overflow="collapse"
        >
          <Toolbar.Button
            icon={Edit}
            onClick={console.log}
            aria-label="Edit option"
          />

          <Toolbar.ButtonToggle onClick={console.log}>
            Bold
          </Toolbar.ButtonToggle>

          <Toolbar.ButtonLink
            href="https://v2.anvil.servicetitan.com/"
            target="_blank"
            icon={{ before: Warning }}
            appearance="primary"
          >
            View Report
          </Toolbar.ButtonLink>

          <Toolbar.Select
            accessibleLabel="Status"
            items={selectItems}
            onChange={console.log}
          />
        </Toolbar>
      </div>
    </div>
  );
}

export default App;
