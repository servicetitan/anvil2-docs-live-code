/* eslint-disable jsx-a11y/anchor-is-valid */
import { Details, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Details>
      <Details.Summary>Need more help?</Details.Summary>
      <Details.Content>
        <Flex gap="6">
          <div>
            <Text variant="headline" el="h3">
              Reach Out
            </Text>
            <ul>
              <li>
                <a href="#">(800) 555-1234</a>
              </li>
              <li>
                <a href="#">help@acmeplumbing.com</a>
              </li>
            </ul>
          </div>
          <div>
            <Text variant="headline" el="h3">
              Useful Links
            </Text>
            <ul>
              <li>
                <a href="#">acmeplumbing.com/help</a>
              </li>
              <li>
                <a href="#">acmeplumbing.com/faqs</a>
              </li>
            </ul>
          </div>
        </Flex>
      </Details.Content>
    </Details>
  );
}

export default App;
