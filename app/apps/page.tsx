import type { Metadata } from "next";
import VityPage from "@/components/vity";

export const metadata: Metadata = {
  title: "Maximem Vity | Personal AI Memory Layer for All Your AI Apps",
  description:
    "Maximem Vity unifies your memories, context, and preferences across ChatGPT, Claude, Gemini, Perplexity, Notion, Slack, and VS Code. Instant, private, encrypted memory.",
};

export default function Page() {
  return <VityPage />;
}
