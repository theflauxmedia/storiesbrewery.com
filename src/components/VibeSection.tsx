import { useEffect, useRef } from "react";

const VibeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-up");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vibe" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Our Vibe
          </h2>
          <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="fade-in-up text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We're not just one venue—we're a collection of curated experiences. 
            Explore our four uniquely themed sections:
          </p>
        </div>

        {/* Four Themed Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Amazon",
              description: "A tropical escape drenched in greenery",
              gradient: "from-[#D7BD99]/25 to-[#D7BD99]/10"
            },
            {
              name: "Maze",
              description: "An architectural wonder that invites discovery",
              gradient: "from-purple-900/20 to-purple-700/20"
            },
            {
              name: "Brew",
              description: "Our heart of craft, where the beer flows and the mood stays lively",
              gradient: "from-[#c7a179]/20 to-[#c7a179]/20"
            },
            {
              name: "Penthouse",
              description: "An elevated experience with rooftop views and intimate vibes",
              gradient: "from-blue-900/20 to-blue-700/20"
            }
          ].map((area, index) => (
            <div
              key={index}
              className="fade-in-up group relative bg-gradient-to-br from-card to-secondary/30 rounded-xl p-6 border border-border/50 hover:border-primary-bright/30 transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {area.name}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-in-up text-center mt-12">
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're catching up with friends, celebrating a milestone, or sipping a handcrafted brew solo, 
            Stories offers a space that fits your mood—and a memory you'll want to relive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VibeSection;