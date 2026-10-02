import { Radio } from "@servicetitan/anvil2";
import {
  FilterBar,
  type CustomFilter,
  type Filter,
  type FilterRenderProps,
} from "@servicetitan/anvil2/beta";
import { useState } from "react";

type Rating = { id: string; label: string };

const ratings: Rating[] = [
  { id: "5", label: "5 stars" },
  { id: "4", label: "4 stars and up" },
  { id: "3", label: "3 stars and up" },
];

// Shared by the toolbar popover and the drawer; `name` keeps the two
// radio groups independent when both are mounted.
function RatingPicker({
  name,
  value,
  onChange,
}: FilterRenderProps<Rating> & { name: string }) {
  return (
    <Radio.Group legend="Minimum rating">
      {ratings.map((rating) => (
        <Radio
          key={rating.id}
          name={name}
          value={rating.id}
          label={rating.label}
          checked={value?.id === rating.id}
          onChange={() => onChange(rating)}
        />
      ))}
    </Radio.Group>
  );
}

const ratingFilter: CustomFilter<Rating> = {
  id: "ratingFilter",
  type: "custom",
  label: "Rating",
  buttonRender: (props) => <RatingPicker name="rating-popover" {...props} />,
  drawerRender: (props) => <RatingPicker name="rating-drawer" {...props} />,
};

function App() {
  const [filters, setFilters] = useState<Filter[]>([ratingFilter]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "280px" }}>
      <FilterBar
        associatedContent="reviews table"
        filters={filters}
        onFilterChange={(updatedFilters) =>
          setFilters(
            // Reflect the committed value in the trigger label.
            updatedFilters.map((filter) =>
              filter.id === "ratingFilter" && filter.type === "custom"
                ? {
                    ...filter,
                    label: filter.value
                      ? `Rating: ${(filter.value as Rating).label}`
                      : "Rating",
                  }
                : filter,
            ),
          )
        }
      />
    </div>
  );
}

export default App;
