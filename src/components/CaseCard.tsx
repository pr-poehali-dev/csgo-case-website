
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, PercentCircle, DollarSign } from "lucide-react";

interface CaseCardProps {
  name: string;
  image: string;
  price: string;
  chance: string;
  profit: string;
  rating: number;
  description: string;
}

export const CaseCard = ({ name, image, price, chance, profit, rating, description }: CaseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <Badge className="absolute top-3 right-3 bg-primary">{profit}</Badge>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 py-2">
          <div className="flex flex-col items-center">
            <DollarSign className="h-5 w-5 text-muted-foreground mb-1" />
            <span className="text-sm font-medium">{price}</span>
            <span className="text-xs text-muted-foreground">Цена</span>
          </div>
          <div className="flex flex-col items-center">
            <PercentCircle className="h-5 w-5 text-muted-foreground mb-1" />
            <span className="text-sm font-medium">{chance}</span>
            <span className="text-xs text-muted-foreground">Шанс</span>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="h-5 w-5 text-muted-foreground mb-1" />
            <span className="text-sm font-medium">{profit}</span>
            <span className="text-xs text-muted-foreground">Профит</span>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Открыть кейс</Button>
      </CardFooter>
    </Card>
  );
};
