import { Flex, SelectFieldSync } from "@servicetitan/anvil2";
import LocationOn from "@servicetitan/anvil2/assets/icons/material/round/location_on.svg";
import {
  FilterBar,
  type CustomFilter,
  type Filter,
  type FilterRenderProps,
} from "@servicetitan/anvil2/beta";
import { useState } from "react";

type Place = { placeId: string; label: string; lat: number; lng: number };

// `undefined` until a place is picked, so the default empty check applies.
type Nearby = { place: Place; radiusMiles: number };

const places: Place[] = [
  { placeId: "austin-tx", label: "Austin, TX", lat: 30.27, lng: -97.74 },
  { placeId: "denver-co", label: "Denver, CO", lat: 39.74, lng: -104.99 },
  { placeId: "phoenix-az", label: "Phoenix, AZ", lat: 33.45, lng: -112.07 },
  { placeId: "seattle-wa", label: "Seattle, WA", lat: 47.61, lng: -122.33 },
];

const placeOptions = places.map(({ placeId, label }) => ({
  id: placeId,
  label,
}));

const radiusMilesOptions = [5, 10, 25, 50].map((miles) => ({
  id: miles,
  label: String(miles),
}));

// Miles only. A radius means nothing without a place, so this stays
// disabled until one is picked.
function NearbyPicker({ value, onChange }: FilterRenderProps<Nearby>) {
  return (
    <Flex direction="column" gap="4" style={{ minWidth: 280 }}>
      <SelectFieldSync
        label="Location"
        placeholder="Search cities"
        options={placeOptions}
        value={
          value ? { id: value.place.placeId, label: value.place.label } : null
        }
        onSelectedOptionChange={(option) => {
          const place = places.find((p) => p.placeId === option?.id);
          onChange(
            place
              ? { place, radiusMiles: value?.radiusMiles ?? 10 }
              : undefined,
          );
        }}
      />
      <SelectFieldSync
        label="Radius (miles)"
        placeholder="Select miles"
        disableSearch
        disableClearButton
        disabled={!value}
        options={radiusMilesOptions}
        value={
          value
            ? { id: value.radiusMiles, label: String(value.radiusMiles) }
            : null
        }
        onSelectedOptionChange={(option) => {
          if (!value || option == null) return;
          onChange({ ...value, radiusMiles: Number(option.id) });
        }}
      />
    </Flex>
  );
}

const nearbyFilter: CustomFilter<Nearby> = {
  id: "nearby",
  type: "custom",
  label: "Nearby",
  icon: LocationOn,
  keepOpenOnChange: true,
  clear: true,
  formatLabel: ({ place, radiusMiles }) =>
    `Nearby: ${place.label} (${radiusMiles} mi)`,
  buttonRender: (props) => <NearbyPicker {...props} />,
  drawerRender: (props) => <NearbyPicker {...props} />,
};

function App() {
  const [filters, setFilters] = useState<Filter[]>([nearbyFilter]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters
  // and tall enough for the open location menu.
  return (
    <div style={{ minWidth: "800px", height: "360px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
