import { Button } from "@servicetitan/carto-react-kit";
import {
  IconChevronRight,
  IconPencil,
  IconPlus,
} from "@servicetitan/carto-react-kit/icons";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
      }}
    >
      <Button
        label="Add item"
        variant="secondary"
        icon={{ icon: <IconPlus />, position: "left" }}
      />
      <Button
        label="Continue"
        variant="secondary"
        icon={{ icon: <IconChevronRight />, position: "right" }}
      />
      <Button label="Edit" variant="secondary" icon={<IconPencil />} />
    </div>
  );
}

export default App;
