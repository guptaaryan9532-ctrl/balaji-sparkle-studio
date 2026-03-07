import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/data/services";
import type { PricingPlan } from "@/data/services";

const PricingCard = ({ plan, serviceName }: { plan: PricingPlan; serviceName: string }) => {
  const orderUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} package for ${serviceName} (${plan.price}). Please share more details.`)}`;

  return (
    <div className={`relative bg-card rounded-lg p-6 border-2 transition-all ${plan.popular ? "border-primary shadow-card-hover scale-105" : "border-border shadow-card"}`}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-card-foreground">{plan.name}</h3>
      <p className="text-3xl font-bold text-primary mt-2">{plan.price}</p>
      <ul className="mt-4 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {f}
          </li>
        ))}
      </ul>
      <Button asChild className={`w-full mt-6 ${plan.popular ? "gradient-primary border-0 text-primary-foreground" : ""}`} variant={plan.popular ? "default" : "outline"}>
        <a href={orderUrl} target="_blank" rel="noopener noreferrer">Order Now</a>
      </Button>
    </div>
  );
};

export default PricingCard;
