import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { serviceCatalog, PHONE, WHATSAPP_URL, EMAIL, LOCATION, WEBSITE_URL } from "../../../data/catalog";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get Balaji Graphics contact details and a ready-to-use WhatsApp ordering link, optionally prefilled with a message about a service.",
  inputSchema: {
    serviceId: z.string().optional().describe("Optional service id to prefill the WhatsApp enquiry message."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ serviceId }) => {
    const service = serviceId
      ? serviceCatalog.find((s) => s.id === serviceId.trim().toLowerCase())
      : undefined;
    const whatsappUrl = service
      ? `${WHATSAPP_URL}?text=${encodeURIComponent(`Hi Balaji Graphics, I'm interested in ${service.title}.`)}`
      : WHATSAPP_URL;

    const info = {
      business: "Balaji Graphics",
      phone: PHONE,
      whatsappUrl,
      email: EMAIL,
      location: LOCATION,
      website: WEBSITE_URL,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
