import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { serviceCatalog } from "../../../data/catalog";

export default defineTool({
  name: "get_pricing",
  title: "Get pricing",
  description:
    "Get pricing packages for Balaji Graphics. Returns every service when no id is given, or one service's packages when an id is provided.",
  inputSchema: {
    id: z.string().optional().describe("Optional service id to filter by."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const wanted = id?.trim().toLowerCase();
    const rows = serviceCatalog
      .filter((s) => !wanted || s.id === wanted)
      .map((s) => ({ id: s.id, title: s.title, pricing: s.pricing }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { pricing: rows },
    };
  },
});
