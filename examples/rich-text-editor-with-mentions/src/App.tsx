import { useState } from "react";
import { Avatar, Flex, Text } from "@servicetitan/anvil2";
import { RichTextEditor } from "@servicetitan/anvil2/beta";

const ALL_USERS = [
  { id: "1", label: "Alice Johnson", role: "Product Designer" },
  { id: "2", label: "Bob Smith", role: "Frontend Engineer" },
  { id: "3", label: "Carol White", role: "Product Manager" },
  { id: "4", label: "David Brown", role: "Backend Engineer" },
  { id: "5", label: "Eve Davis", role: "UX Researcher" },
];

const INITIAL_CONTENT =
  '<p>Hey <span data-type="mention" data-id="1" data-label="Alice Johnson"></span>, can you review this proposal? Looping in <span data-type="mention" data-id="3" data-label="Carol White"></span> as well.</p>';

function App() {
  const [mentionOptions, setMentionOptions] = useState(ALL_USERS);

  return (
    <RichTextEditor
      label="Comment"
      placeholder="Type @ to mention a teammate..."
      allowMention
      defaultValue={INITIAL_CONTENT}
      mentionOptions={mentionOptions}
      onMentionInputChange={(query) =>
        setMentionOptions(
          ALL_USERS.filter((u) =>
            u.label.toLowerCase().includes(query.toLowerCase()),
          ),
        )
      }
      renderMentionHoverContent={(option) => {
        const user = ALL_USERS.find((u) => u.id === option.id);
        return (
          <Flex alignItems="center" gap={3} style={{ padding: "8px 4px" }}>
            <Avatar name={option.label} size="medium" />
            <Flex direction="column">
              <Text style={{ fontWeight: 600 }}>{option.label}</Text>
              <Text size="small" subdued>
                {user?.role}
              </Text>
            </Flex>
          </Flex>
        );
      }}
    />
  );
}

export default App;
