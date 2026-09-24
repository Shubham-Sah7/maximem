import type { Metadata } from "next";
import SynapPage from "@/components/synap";

export const metadata: Metadata = {
  title: "Maximem Synap | AI Memory & Agentic Context Management for AI Agents",
  description:
    "Maximem Synap: agentic context management for AI agents. 92% LongMemEval, 93.2% LoCoMo, under 15ms at P75 in-conversation retrieval, native across 23 frameworks. Free tier.",
};

export default function Page() {
  return <SynapPage />;
}
