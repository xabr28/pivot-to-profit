import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink, BarChart3, Database, TrendingUp } from "lucide-react";

const Sobre = () => {
  const competencias = [
    {
      category: "BI & Visualização",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      skills: ["Power BI", "Google Sheets", "Excel", "Figma"]
    },
    {
      category: "Dados & Banco de Dados",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["SQL (SQL Server)", "Modelagem de Dados"]
    },
    {
      category: "Análise & Storytelling",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
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
            Transformando dados em estratégia há mais de uma década
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-background rounded-lg p-8 mb-12 shadow-card">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Minha carreira começou na área financeira, onde percebi rapidamente que as decisões mais impactantes eram aquelas apoiadas por dados sólidos. Essa percepção me levou a uma jornada de aprofundamento em análise e desenvolvimento de sistemas, onde me especializei em transformar grandes volumes de dados em dashboards intuitivos e acionáveis.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Hoje, atuo como um elo entre a tecnologia e a estratégia de negócio. Minha paixão é capacitar equipes com ferramentas visuais que não apenas monitoram o desempenho, mas também revelam oportunidades escondidas e impulsionam o crescimento.
            </p>
            <p className="text-lg leading-relaxed">
              Domino o ecossistema de BI, desde a modelagem de dados com SQL até a criação de narrativas visuais em Power BI e Figma, sempre com o objetivo de entregar não apenas gráficos, mas respostas.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Minhas Competências
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {competencias.map((comp, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {comp.icon}
                    <h3 className="text-lg font-semibold text-foreground ml-3">
                      {comp.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {comp.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-lg p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Vamos trabalhar juntos?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades em BI e análise de dados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Link to="/projetos" className="flex items-center">
                Ver Meus Projetos
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <a
                href="https://linkedin.com/in/alexandre-catanante"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Fale Comigo no LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;