// src/components/AgentSelector.tsx
type AgentOption = { id: string; label: string };

const AGENT_OPTIONS: AgentOption[] = [
  { id: "general", label: "General Chatbot" },
  { id: "kb",      label: "Legal Team Chatbot" },
  { id: "coder",   label: "CCO Chatbot" },
];

export function AgentSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (agentId: string) => void;
}) {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium mb-1">Choose chatbot</label>
      <select
        className="border rounded p-2 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {AGENT_OPTIONS.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}