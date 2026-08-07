import { defineTool } from "@lovable.dev/mcp-js";
import { portfolioCatalog, testimonials, WEBSITE_URL } from "../../../data/catalog";

export default defineTool({
  name: "list_portfolio",
  title: "List portfolio and reviews",
  description:
    "List Balaji Graphics portfolio work samples and customer testimonials shown on the website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      portfolioUrl: `${WEBSITE_URL}/portfolio`,
      portfolio: portfolioCatalog,
      testimonials,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
