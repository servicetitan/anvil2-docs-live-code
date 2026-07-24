import {
  CartoTheme,
  UserMediaMessage,
  type MediaAttachment,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const media: MediaAttachment[] = [
  {
    kind: "document",
    fileName: "Service agreement.pdf",
    fileTypeLabel: "PDF",
    href: "https://example.com/service-agreement.pdf",
  },
  {
    kind: "image",
    fileName: "Site photo.jpg",
    fileTypeLabel: "Image",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='60'%3E%3Crect width='80' height='60' fill='%23dceeff'/%3E%3Cpath d='M8 48 28 26l14 14 10-10 20 18Z' fill='%2370b1ff'/%3E%3C/svg%3E",
    href: "https://example.com/site-photo.jpg",
  },
  {
    kind: "audio",
    fileName: "Customer call.mp3",
    fileTypeLabel: "Audio",
    src: "https://example.com/customer-call.mp3",
    href: "https://example.com/customer-call.mp3",
  },
  {
    kind: "video",
    fileName: "Walkthrough.mp4",
    fileTypeLabel: "Video",
    src: "https://example.com/walkthrough.mp4",
    href: "https://example.com/walkthrough.mp4",
  },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "48rem",
        }}
      >
        {media.map((attachment, index) => (
          <UserMediaMessage
            key={attachment.fileName}
            media={attachment}
            timestamp={new Date(2026, 3, 1, 16, 37 + index)}
            showPreview={false}
            revealToolbarOnHover={index < media.length - 1}
          />
        ))}
      </div>
    </CartoTheme>
  );
}

export default App;
