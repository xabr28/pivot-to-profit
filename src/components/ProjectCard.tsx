import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const ProjectCard = ({ title, description, image, href }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-smooth overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`Dashboard ${title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
            Ver Detalhes
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;