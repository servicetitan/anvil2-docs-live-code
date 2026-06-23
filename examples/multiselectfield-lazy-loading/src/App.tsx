import { useState } from "react";
import { MultiSelectField, MultiSelectFieldOption } from "@servicetitan/anvil2";

const allBooks = Array.from({ length: 100 }, (_, i) => ({
  id: `book-${i + 1}`,
  label: `Book ${i + 1}`,
}));

function App() {
  const [value, setValue] = useState<MultiSelectFieldOption[]>([]);

  return (
    <div style={{ width: 384 }}>
      <MultiSelectField
        lazy="page"
        lazyOptions={{ pageSize: 10 }}
        loadOptions={async (searchValue, pageNumber, pageSize) => {
          await new Promise((r) => setTimeout(r, 300));

          const filtered = allBooks.filter((b) =>
            b.label.toLowerCase().includes(searchValue.toLowerCase()),
          );
          const start = pageNumber * pageSize;
          const page = filtered.slice(start, start + pageSize);

          return {
            options: page,
            hasMore: start + page.length < filtered.length,
          };
        }}
        label="Books (lazy loading)"
        placeholder="Search books..."
        value={value}
        onSelectedOptionsChange={setValue}
      />
    </div>
  );
}

export default App;
