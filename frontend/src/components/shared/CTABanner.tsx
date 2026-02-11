import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  description?: string;
}

const CTABanner = ({
  title = "Ready to Take the First Step Toward Better Hearing?",
  description = "Schedule your comprehensive hearing evaluation today and discover how we can help you hear the world more clearly.",
}: CTABannerProps) => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link to="/contact">Book Appointment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary hover:bg-primary-foreground/10"
          >
            <a href="tel:+18681234567">Call (868) 123-4567</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
