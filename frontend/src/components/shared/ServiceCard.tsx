import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
