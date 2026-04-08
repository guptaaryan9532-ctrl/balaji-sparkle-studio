import { Users, Award, ThumbsUp, Layers } from "lucide-react";
import workspace1 from "@/assets/workspace-1.jpg";
import workspace2 from "@/assets/workspace-2.jpg";
import workspace3 from "@/assets/workspace-3.jpg";

const features = [
  {
    icon: Users,
    title: "3481+ Happy Clients",
    description: "Clients happiness goes beyond mere satisfaction, creating an emotional bond that fosters long-term loyalty.",
  },
  {
    icon: Award,
    title: "12+ Years Excellence",
    description: "Marking a journey of creative excellence and trusted design solutions in the Indian market.",
  },
  {
    icon: ThumbsUp,
    title: "Work Satisfaction",
    description: "Knowing your target audience and their needs is essential for building clientele.",
  },
  {
    icon: Layers,
    title: "A to Z Design Solutions",
    description: "Our team includes specialists in creative design, branding, print media, and digital marketing.",
  },
];

const WhyChooseUs = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-3">
          <img src={workspace1} alt="Design workspace" className="rounded-lg w-full h-64 object-cover col-span-1" loading="lazy" />
          <img src={workspace2} alt="Creative studio" className="rounded-lg w-full h-64 object-cover col-span-1 mt-8" loading="lazy" />
          <img src={workspace3} alt="Design tools" className="rounded-lg w-full h-64 object-cover col-span-2" loading="lazy" />
        </div>

        {/* Right: Features */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
