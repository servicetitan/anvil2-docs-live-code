import { type ReactNode, useState } from "react";
import { Button } from "@servicetitan/anvil2-ai-kit";
import { IconChevronDown } from "@servicetitan/anvil2-icons";
import "./Reasoning.css";

type ReasoningProps = {
  /** Trigger label. Stays visible while the body is collapsed or expanded. */
  label: string;
  /** Body revealed by the trigger. Omit when the row is only a summary. */
  content?: ReactNode;
  /** Starts expanded. Defaults to closed. */
  defaultExpanded?: boolean;
};

/**
 * Local stand-in for the human-escalation examples. Not an AI Kit export.
 */
export function Reasoning({
  label,
  content,
  defaultExpanded = false,
}: ReasoningProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const hasContent = content != null;

  if (!hasContent) {
    return (
      <div className="escalation-reasoning">
        <span className="escalation-reasoning-summary">{label}</span>
      </div>
    );
  }

  return (
    <div className="escalation-reasoning">
      <Button
        variant="ghost"
        size="small"
        label={label}
        aria-expanded={expanded}
        onPress={() => setExpanded((open) => !open)}
        icon={{
          icon: (
            <IconChevronDown
              className={
                expanded
                  ? "escalation-reasoning-chevron is-expanded"
                  : "escalation-reasoning-chevron"
              }
            />
          ),
          position: "right",
        }}
      />
      <div
        className="escalation-reasoning-panel"
        data-expanded={expanded ? "true" : "false"}
        aria-hidden={expanded ? undefined : true}
      >
        <div className="escalation-reasoning-panel-inner">{content}</div>
      </div>
    </div>
  );
}
