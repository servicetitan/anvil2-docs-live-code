import { useEffect, useRef, useState } from "react";
import { SelectField, SelectFieldOption } from "@servicetitan/anvil2";

const allBooks = Array.from({ length: 100 }, (_, i) => ({
  id: `book-${i + 1}`,
  label: `Book ${i + 1}`,
}));

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = containerRef.current?.querySelector("input");
    trigger?.click();
  }, []);

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "420px" }}>
      <SelectField
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
        onSelectedOptionChange={setValue}
      />
    </div>
  );
}

export default App;
