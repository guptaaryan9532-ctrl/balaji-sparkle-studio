import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { serviceCatalog, WEBSITE_URL } from "../../../data/catalog";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get the full description and all pricing packages for one Balaji Graphics service, by its id (use list_services to find ids).",
  inputSchema: {
    id: z.string().describe("Service id, e.g. logo-design or wedding-card-design."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const service = serviceCatalog.find((s) => s.id === id.trim().toLowerCase());
    if (!service) {
      throw new ToolError(
        `No service with id "${id}". Available ids: ${serviceCatalog.map((s) => s.id).join(", ")}`,
      );
    }
    const detail = { ...service, url: `${WEBSITE_URL}/services/${service.id}` };
    return {
      content: [{ type: "text", text: JSON.stringify(detail, null, 2) }],
      structuredContent: { service: detail },
    };
  },
});
