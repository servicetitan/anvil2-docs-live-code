import { Button } from "@servicetitan/carto-react-kit";
import { IconPencil } from "@servicetitan/carto-react-kit/icons";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <Button
        label="Edit"
        variant="secondary"
        size="small"
        icon={<IconPencil />}
      />
    </div>
  );
}

export default App;
