import { portfolioItems } from "@/data/services";

const Portfolio = () => (
  <div className="container py-12">
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold">Our Portfolio</h1>
      <p className="text-muted-foreground mt-2">Browse our recent work</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <div key={item.id} className="group relative aspect-square rounded-lg overflow-hidden shadow-card">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center">
            <div className="text-background text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-sm opacity-80">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
