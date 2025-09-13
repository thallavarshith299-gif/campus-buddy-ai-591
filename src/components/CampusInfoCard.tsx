import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CampusInfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const CampusInfoCard = ({ title, description, icon: Icon, items }: CampusInfoCardProps) => {
  return (
    <Card className="h-full bg-campus-surface border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg text-foreground">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-foreground">
              <div className="w-1.5 h-1.5 bg-campus-primary rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};