import { Phone } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto flex items-center justify-center gap-2 px-4">
        <Phone className="h-3.5 w-3.5" />
        <span>Schedule your free consultation today — Call</span>
        <a href="tel:+18681234567" className="font-semibold underline underline-offset-2 hover:opacity-80">
          (868) 123-4567
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
