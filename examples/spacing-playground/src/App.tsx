import { Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap={4} justifyContent="center" alignItems="flex-end" wrap="wrap">
      {["quarter", "half", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
        (sizeValue, i) => (
          <Flex key={i} direction="column" alignItems="center">
            <div
              style={{
                height: `var(--size-${sizeValue})`,
                width: `var(--size-${sizeValue})`,
                background: `hsl(${25 * i}, 50%, 80%)`,
              }}
            />
            <Text size="small" color="subdued">
              {sizeValue}
            </Text>
          </Flex>
        ),
      )}
    </Flex>
  );
}

export default App;
