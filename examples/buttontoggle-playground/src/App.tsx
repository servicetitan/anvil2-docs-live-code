import { ButtonToggle, Flex } from "@servicetitan/anvil2";
import Star from "@servicetitan/anvil2/assets/icons/material/round/star.svg";
import Favorite from "@servicetitan/anvil2/assets/icons/material/round/favorite.svg";
import Bookmark from "@servicetitan/anvil2/assets/icons/material/round/bookmark.svg";

function App() {
  return (
    <Flex gap="2">
      <ButtonToggle icon={{ before: Star }}>Star</ButtonToggle>
      <ButtonToggle icon={{ before: Favorite }}>Heart</ButtonToggle>
      <ButtonToggle icon={{ before: Bookmark }}>Bookmark</ButtonToggle>
    </Flex>
  );
}

export default App;
