import {
  SearchField,
  Popover,
  Flex,
  ButtonToggle,
  Text,
  Link,
  Avatar,
} from "@servicetitan/anvil2";
import { useState, type ChangeEvent } from "react";

type Item = { id: number; label: string; type: string };

function App() {
  const websiteItems: Item[] = [
    { id: 1, label: "Anvil1 web documentation", type: "Website" },
    { id: 2, label: "Anvil2 web documentation", type: "Website" },
    { id: 3, label: "ServiceTitan", type: "Website" },
    { id: 4, label: "Confluence", type: "Website" },
    { id: 5, label: "Jira Board", type: "Website" },
  ];

  const documentationItems: Item[] = [
    { id: 6, label: "Anvil Backlog", type: "Documentation" },
    { id: 7, label: "Anvil Design System Confluence", type: "Documentation" },
    { id: 8, label: "Anvil Design Work Process", type: "Documentation" },
    { id: 9, label: "Anvil Figma Library", type: "Documentation" },
  ];

  const peopleItems: Item[] = [
    { id: 11, label: "Alice Johnson", type: "People" },
    { id: 12, label: "Bob Smith", type: "People" },
    { id: 13, label: "Charlie Brown", type: "People" },
    { id: 14, label: "David Wilson", type: "People" },
    { id: 15, label: "Eve Davis", type: "People" },
    { id: 16, label: "Fiona Taylor", type: "People" },
    { id: 17, label: "George Miller", type: "People" },
    { id: 18, label: "Hannah Clark", type: "People" },
  ];

  const items = websiteItems.concat(documentationItems, peopleItems);
  const [result, setResult] = useState<Item[]>(items);

  const [isWebsiteChecked, setIsWebsiteChecked] = useState(false);
  const [isDocumentationChecked, setIsDocumentationChecked] = useState(false);
  const [isPeopleChecked, setIsPeopleChecked] = useState(false);

  const getAllFilter = () => {
    if (!isWebsiteChecked && !isDocumentationChecked && !isPeopleChecked)
      return true;
    return false;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setResult(items);
      return;
    }
    const newResult = items.filter((item) =>
      item.label.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setResult(newResult);
  };

  const hasWebsiteId = websiteItems.filter((item) =>
    result.some((resultItem) => resultItem.id === item.id),
  );

  const hasDocumentationId = documentationItems.filter((item) =>
    result.some((resultItem) => resultItem.id === item.id),
  );

  const hasPeopleId = peopleItems.filter((item) =>
    result.some((resultItem) => resultItem.id === item.id),
  );

  const showNoResults = () => {
    if (result.length === 0) return true;
    const filterState = [
      isWebsiteChecked,
      isDocumentationChecked,
      isPeopleChecked,
    ].filter((value) => value === true).length;
    const website = isWebsiteChecked && hasWebsiteId.length === 0;
    const documentation =
      isDocumentationChecked && hasDocumentationId.length === 0;
    const people = isPeopleChecked && hasPeopleId.length === 0;

    if (
      filterState === 2 &&
      ((website && documentation) ||
        (website && people) ||
        (documentation && people))
    )
      return true;
    if (filterState === 1 && (website || people || documentation)) return true;
    return false;
  };

  return (
    <div style={{ width: "500px", height: "672px" }}>
      <Popover open placement="bottom-start" disableShift disableFlip modal>
        <Popover.Button>Trigger</Popover.Button>
        <Popover.Content>
          <Flex gap="3" direction="column">
            <SearchField onChange={handleChange} />
            <Flex gap="2">
              <ButtonToggle
                checked={isWebsiteChecked}
                onClick={() => setIsWebsiteChecked((prev) => !prev)}
              >
                Websites {hasWebsiteId.length}
              </ButtonToggle>
              <ButtonToggle
                checked={isDocumentationChecked}
                onClick={() => setIsDocumentationChecked((prev) => !prev)}
              >
                Documentation {hasDocumentationId.length}
              </ButtonToggle>
              <ButtonToggle
                checked={isPeopleChecked}
                onClick={() => setIsPeopleChecked((prev) => !prev)}
              >
                People {hasPeopleId.length}
              </ButtonToggle>
            </Flex>
            {(getAllFilter() || isWebsiteChecked) &&
              hasWebsiteId.length > 0 && (
                <Text variant="eyebrow" style={{ marginTop: "1rem" }}>
                  Websites
                </Text>
              )}
            {(getAllFilter() || isWebsiteChecked) &&
              hasWebsiteId &&
              websiteItems.map((item) => {
                const idExistsInResult = result.some(
                  (resultItem) => resultItem.id === item.id,
                );
                return idExistsInResult && <Link ghost>{item.label}</Link>;
              })}

            {(getAllFilter() || isDocumentationChecked) &&
              hasDocumentationId.length > 0 && (
                <Text variant="eyebrow" style={{ marginTop: "1rem" }}>
                  Documentation
                </Text>
              )}
            {(getAllFilter() || isDocumentationChecked) &&
              hasDocumentationId &&
              documentationItems.map((item) => {
                const idExistsInResult = result.some(
                  (resultItem) => resultItem.id === item.id,
                );
                return idExistsInResult && <Link ghost>{item.label}</Link>;
              })}

            {(getAllFilter() || isPeopleChecked) && hasPeopleId.length > 0 && (
              <Text variant="eyebrow" style={{ marginTop: "1rem" }}>
                People
              </Text>
            )}
            <Flex gap="2">
              {(getAllFilter() || isPeopleChecked) &&
                hasPeopleId &&
                peopleItems.map((item) => {
                  const idExistsInResult = result.some(
                    (resultItem) => resultItem.id === item.id,
                  );
                  return idExistsInResult && <Avatar name={item.label} />;
                })}
            </Flex>
            {showNoResults() && <Text subdued>No results found</Text>}
          </Flex>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
