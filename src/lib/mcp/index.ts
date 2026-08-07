import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import getPricingTool from "./tools/get-pricing";
import getContactInfoTool from "./tools/get-contact-info";
import listPortfolioTool from "./tools/list-portfolio";

export default defineMcp({
  name: "balaji-graphics",
  title: "Balaji Graphics",
  version: "0.1.0",
  instructions:
    "Public tools for Balaji Graphics, a graphic design studio in Kanpur, India. Use `list_services` to see all design services, `get_service` for full details of one service, `get_pricing` for package prices, `list_portfolio` for work samples and customer reviews, and `get_contact_info` for phone, email, and a WhatsApp ordering link. All data is public website information.",
  tools: [listServicesTool, getServiceTool, getPricingTool, listPortfolioTool, getContactInfoTool],
});
