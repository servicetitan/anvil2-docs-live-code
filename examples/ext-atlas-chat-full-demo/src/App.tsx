import {
  ChatWindow,
  Header,
  Footer,
  Content,
  MarkdownMessage,
  UserMessage,
  SuggestionList,
  NotificationCard,
  UserFeedback,
} from "@servicetitan/anvil2-ext-atlas";
import { Text } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  return (
    <div style={{ height: "600px", width: "1100px" }}>
      <ChatWindow open={true} position={{ x: 225, y: 50 }}>
        <Header title="Atlas" onClose={() => console.log("close")} />
        <Content itemsLength={3}>
          <MarkdownMessage
            message="Hello! How can I assist you today?"
            assistant="Atlas"
            toolboxProps={{
              onLike: async () => console.log("like"),
              onDislike: async () => console.log("dislike"),
              currentFeedback: UserFeedback.None,
            }}
          />
          <Text
            size="small"
            style={{
              padding: "var(--size-3)",
              color: "var(--foreground-color-subtle)",
            }}
          >
            Thank you for your feedback!
          </Text>
          <UserMessage message="I am looking for information on your services." />
          <SuggestionList
            suggestions={[
              "What is the weather like today?",
              "Tell me a joke.",
              "How do I reset my password?",
            ]}
            onSelect={(s) => console.log("selected:", s)}
          />
        </Content>
        <Footer
          message={message1}
          onMessageChange={setMessage1}
          onSubmit={() => console.log("submit")}
          placeholder="Ask Atlas"
        />
      </ChatWindow>

      <ChatWindow open={true} position={{ x: 700, y: 50 }}>
        <Header title="Atlas" onClose={() => console.log("close")} />
        <Content itemsLength={2}>
          <NotificationCard
            title="Projected increase in demand"
            message="HVAC replacement demand is set to surge in 2 weeks creating a $450K opportunity."
            timestamp="Today"
            unread={false}
            onClick={() => console.log("notification clicked")}
          />
          <NotificationCard
            title="Prioritize emergency jobs"
            message="New maintenance requests should be scheduled to meet expected demand."
            timestamp="Yesterday"
            unread={true}
            onClick={() => console.log("notification clicked")}
          />
        </Content>
        <Footer
          message={message2}
          onMessageChange={setMessage2}
          onSubmit={() => console.log("submit")}
          placeholder="Ask Atlas"
        />
      </ChatWindow>
    </div>
  );
}

export default App;
