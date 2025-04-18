import type { Metadata } from "next";
import { generateMeta } from "@frontend/_utils/generateMeta";

export function makeIndexMetadata(type: string): () => Promise<Metadata> {
  return async function generateMetadata() {
    // Static title/description per type, or fetch if you prefer
    const staticMap = {
      articles: {
        title: "Advice for Men, By Men | Articles",
        description: "Professional articles focused on men’s mental health.",
        slug: "/articles",
      },
      "getting-started": {
        title: "Getting Started in Therapy | Men’s Therapy Hub",
        description: "Practical guidance for beginning your therapy journey.",
        slug: "/getting-started",
      },
      "common-therapy-topics": {
        title: "Common Therapy Topics | Men’s Therapy Hub",
        description:
          "Deep dives into issues men frequently bring to counselling.",
        slug: "/common-therapy-topics",
      },
    };

    return generateMeta({ doc: { meta: staticMap[type] } });
  };
}
