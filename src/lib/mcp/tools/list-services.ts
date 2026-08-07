import { defineTool } from "@lovable.dev/mcp-js";
import { serviceCatalog } from "../../../data/catalog";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List all graphic design services offered by Balaji Graphics, with a short description for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = serviceCatalog.map((s) => ({
      id: s.id,
      title: s.title,
      summary: s.shortDescription,
      startingPrice: s.pricing[0]?.price,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
