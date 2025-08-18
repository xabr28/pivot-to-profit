import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  const competencias = [
    {
      categoria: "BI & Visualização",
      skills: ["Power BI", "Google Sheets", "Excel", "Figma"]
    },
    {
      categoria: "Dados & Banco de Dados", 
      skills: ["SQL (SQL Server)", "Modelagem de Dados"]
    },
    {
      categoria: "Análise & Storytelling",
      skills: ["Análise de KPIs", "Otimização de Processos", "Storytelling com Dados"]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Sobre Mim</h1>
          <p className="text-xl text-muted-foreground">
            A jornada de transformar dados em estratégia de negócio
          </p>
        </div>

        {/* Biografia */}
        <Card className="mb-12 shadow-card">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Minha Jornada</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Minha carreira começou na área financeira, onde percebi rapidamente que as decisões mais impactantes eram aquelas apoiadas por dados sólidos. Essa percepção me levou a uma jornada de aprofundamento em análise e desenvolvimento de sistemas, onde me especializei em transformar grandes volumes de dados em dashboards intuitivos e acionáveis.
              </p>
              <p>
                Hoje, atuo como um elo entre a tecnologia e a estratégia de negócio. Minha paixão é capacitar equipes com ferramentas visuais que não apenas monitoram o desempenho, mas também revelam oportunidades escondidas e impulsionam o crescimento. Domino o ecossistema de BI, desde a modelagem de dados com SQL até a criação de narrativas visuais em Power BI e Figma, sempre com o objetivo de entregar não apenas gráficos, mas respostas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Competências */}
        <Card className="mb-12 shadow-card">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Minhas Competências</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {competencias.map((grupo, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-foreground text-lg">{grupo.categoria}</h3>
                  <div className="flex flex-wrap gap-2">
                    {grupo.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Actions */}
        <div className="text-center bg-background rounded-lg p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Vamos Trabalhar Juntos?
          </h3>
          <p className="text-muted-foreground mb-6">
            Estou sempre aberto a novos desafios e oportunidades de transformar dados em valor para o negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projetos">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Ver Meus Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://linkedin.com/in/alexandre-catanante"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Fale Comigo no LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;