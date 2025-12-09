import { Pagination, Flex, Grid, Card } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const totalItemCount = 100;
  const items = [...Array(totalItemCount).keys()];
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const itemsPerPageOptions = [4, 8, 12];
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const pageItems = items.slice(startIndex, endIndex);

  return (
    <Flex direction="column" style={{ padding: 24 }} gap="2">
      <Grid templateColumns="repeat(2, 1fr)" gap="2">
        {pageItems.map((item) => (
          <Card key={item}>{item + 1}</Card>
        ))}
      </Grid>
      <Pagination
        page={page}
        itemsPerPage={itemsPerPage}
        itemsPerPageOptions={itemsPerPageOptions}
        onItemsPerPageChange={(itemsPerPage) => setItemsPerPage(itemsPerPage)}
        totalItemCount={totalItemCount}
        onPageChange={(page) => setPage(page)}
        showCount={true}
      />
    </Flex>
  );
}

export default App;
