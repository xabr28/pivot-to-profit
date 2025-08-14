import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import dashboardFinanceiro from "@/assets/dashboard-financeiro.jpg";
import dashboardVendas from "@/assets/dashboard-vendas.jpg";
import dashboardRH from "@/assets/dashboard-rh.jpg";

const Principal = () => {
  const featuredProjects = [
    {
      title: "Gestão Financeira",
      description: "Reduzi em 15% os custos operacionais através da visualização de dados financeiros.",
      image: dashboardFinanceiro,
      href: "/projetos/financeiro"
    },
    {
      title: "Vendas",
      description: "Aumentei a taxa de conversão em 22% com análise preditiva de vendas.",
      image: dashboardVendas,
      href: "/projetos/vendas"
    },
    {
      title: "RH",
      description: "Otimizei processos de RH, reduzindo tempo de análise em 60%.",
      image: dashboardRH,
      href: "/projetos/rh"
    }
  ];

  return (
    <div className="bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Alexandre Catanante | Analista de Business Intelligence
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Transformo dados complexos em clareza estratégica, capacitando empresas a tomar decisões mais inteligentes e orientadas por resultados.
          </h2>
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
                Conectar no LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para transformar seus dados em insights acionáveis?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Vamos conversar sobre como posso ajudar sua empresa a tomar decisões mais inteligentes.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            <a
              href="https://linkedin.com/in/alexandre-catanante"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Fale Comigo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Principal;