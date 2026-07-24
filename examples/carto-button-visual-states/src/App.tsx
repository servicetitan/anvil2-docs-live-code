import { Button } from "@servicetitan/carto-react-kit";

const variants = ["primary", "secondary", "ghost", "danger"] as const;

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <Button label="Rest" variant={variant} size="small" />
          <Button
            label="Hover"
            variant={variant}
            size="small"
            data-interactive="hover"
          />
          <Button
            label="Active"
            variant={variant}
            size="small"
            data-interactive="active"
          />
          <Button
            label="Focus Visible"
            variant={variant}
            size="small"
            data-interactive="focus-visible"
          />
          <Button label="Disabled" variant={variant} size="small" isDisabled />
        </div>
      ))}
    </div>
  );
}

export default App;
