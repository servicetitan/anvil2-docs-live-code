import { Text } from "@servicetitan/anvil2-ai-kit";

const cell = {
  padding: "12px 16px",
  textAlign: "left" as const,
  verticalAlign: "middle" as const,
};
const headerCell = {
  ...cell,
  fontSize: 12,
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};
const rowBorder = { borderBottom: "1px solid #e5e7eb" };

function App() {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={rowBorder}>
          <th style={headerCell}>Name</th>
          <th style={headerCell}>Weight</th>
          <th style={headerCell}>Size/Line-height</th>
          <th style={headerCell}>Spacing/Rem</th>
        </tr>
      </thead>
      <tbody>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text variant="headline" el="h3" size="hero" text="Headline/Hero" />
          </td>
          <td style={cell}>bold (700)</td>
          <td style={cell}>32px/40px</td>
          <td style={cell}>-0.24% / -0.0048rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text
              variant="headline"
              el="h3"
              size="major"
              text="Headline/Major"
            />
          </td>
          <td style={cell}>bold (700)</td>
          <td style={cell}>24px/30px</td>
          <td style={cell}>-0.12% / -0.0018rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text
              variant="headline"
              el="h3"
              size="substantial"
              text="Headline/Substantial"
            />
          </td>
          <td style={cell}>bold (700)</td>
          <td style={cell}>20px/25px</td>
          <td style={cell}>-0.05% / -0.0006rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text
              variant="headline"
              el="h3"
              size="regular"
              text="Headline/Regular"
            />
          </td>
          <td style={cell}>bold (700)</td>
          <td style={cell}>16px/20px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text size="featured" inline text="Body/featured" />
          </td>
          <td style={cell}>regular (400)</td>
          <td style={cell}>20px/27px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text
              size="featured"
              inline
              text={<strong>Body/featured/emphasis</strong>}
            />
          </td>
          <td style={cell}>semi bold (600)</td>
          <td style={cell}>20px/27px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text size="regular" inline text="Body/regular" />
          </td>
          <td style={cell}>regular (400)</td>
          <td style={cell}>16px/24px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text
              size="regular"
              inline
              text={<strong>Body/regular/emphasis</strong>}
            />
          </td>
          <td style={cell}>semi bold (600)</td>
          <td style={cell}>16px/24px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text size="fine" inline text="Body/fine" />
          </td>
          <td style={cell}>regular (400)</td>
          <td style={cell}>14px/21px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text
              size="fine"
              inline
              text={<strong>Body/fine/emphasis</strong>}
            />
          </td>
          <td style={cell}>semi bold (600)</td>
          <td style={cell}>14px/21px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text size="fine" inline text="Caption" />
          </td>
          <td style={cell}>regular (400)</td>
          <td style={cell}>12px/18px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text size="fine" inline text={<strong>Caption/emphasis</strong>} />
          </td>
          <td style={cell}>semi bold (600)</td>
          <td style={cell}>12px/18px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
        <tr style={rowBorder}>
          <td style={cell}>
            <Text variant="eyebrow" text="Eyebrow" />
          </td>
          <td style={cell}>medium (500)</td>
          <td style={cell}>10px/15px</td>
          <td style={cell}>0% / 0rem</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
