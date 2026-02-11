import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  centered?: boolean;
  children?: React.ReactNode;
}

const Hero = ({
  badge,
  title,
  titleAccent,
  description,
  primaryCTA,
  secondaryCTA,
  centered = false,
  children,
}: HeroProps) => {
  return (
    <section className="bg-section-alt py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className={`${centered ? "text-center max-w-3xl mx-auto" : "grid lg:grid-cols-2 gap-12 items-center"}`}>
          <div className={centered ? "" : ""}>
            {badge && (
              <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                {badge}
              </span>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {title}
              {titleAccent && <span className="text-primary"> {titleAccent}</span>}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            {(primaryCTA || secondaryCTA) && (
              <div className={`flex gap-4 ${centered ? "justify-center" : ""} flex-wrap`}>
                {primaryCTA && (
                  <Button asChild size="lg">
                    <Link to={primaryCTA.href}>{primaryCTA.label}</Link>
                  </Button>
                )}
                {secondaryCTA && (
                  <Button asChild variant="outline" size="lg">
                    <Link to={secondaryCTA.href}>{secondaryCTA.label}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
