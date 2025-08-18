import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardFinanceiro from "@/assets/dashboard-financeiro.jpg";
import dashboardVendas from "@/assets/dashboard-vendas.jpg";
import dashboardRH from "@/assets/dashboard-rh.jpg";

const Principal = () => {
  const projetos = [
    {
      title: "Dashboard de Gestão Financeira",
      description: "Reduzi em 15% os custos operacionais através da visualização de dados financeiros.",
      image: dashboardFinanceiro,
      href: "/projetos"
    },
    {
      title: "Dashboard de Performance de Vendas", 
      description: "Aumentei a taxa de conversão em 22% através da identificação de padrões de comportamento.",
      image: dashboardVendas,
      href: "/projetos"
    },
    {
      title: "Dashboard de Analytics de RH",
      description: "Diminuí o turnover em 18% através de ações preventivas baseadas em dados.",
      image: dashboardRH,
      href: "/projetos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Alexandre Catanante | Analista de Business Intelligence
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Transformo dados complexos em clareza estratégica, capacitando empresas a tomar decisões mais inteligentes e orientadas por resultados.
          </h2>
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
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Projetos em Destaque</h3>
            <p className="text-xl text-muted-foreground">
              Resultados comprovados que transformaram negócios através de dados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={projeto.image}
                      alt={`Dashboard ${projeto.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-3">{projeto.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{projeto.description}</p>
                    <Link to="/projetos">
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-lg p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Transformar Seus Dados em Estratégia?
            </h3>
            <p className="text-muted-foreground mb-6">
              Vamos conversar sobre como posso ajudar sua empresa a tomar decisões mais inteligentes.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Entre em Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principal;