import { Pagination, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const totalItemCount = 20;
  const items = [...Array(totalItemCount).keys()];
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const itemsPerPageOptions = [4, 6, 10];
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const pageItems = items.slice(startIndex, endIndex);

  return (
    <Flex direction="column" style={{ padding: 24 }} gap="2">
      <Pagination
        page={page}
        itemsPerPage={itemsPerPage}
        itemsPerPageOptions={itemsPerPageOptions}
        onItemsPerPageChange={(itemsPerPage) => setItemsPerPage(itemsPerPage)}
        totalItemCount={totalItemCount}
        onPageChange={(page) => setPage(page)}
        showCount={true}
      />
      <code>
        Page return: [ {pageItems.map((item) => item + 1).join(", ")} ]
      </code>
    </Flex>
  );
}

export default App;
