import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail, Linkedin, FileText } from "lucide-react";

const Contato = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Contato</h1>
          <p className="text-xl text-muted-foreground">
            Pronto para transformar seus dados em resultados? Vamos conversar!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* LinkedIn */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Linkedin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">LinkedIn</h3>
              <p className="text-muted-foreground mb-6">
                A melhor forma de me encontrar e conversar sobre oportunidades de colaboração.
              </p>
              <Button className="w-full" size="lg">
                <a
                  href="https://linkedin.com/in/alexandre-catanante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Conectar no LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Email</h3>
              <p className="text-muted-foreground mb-6">
                Para discussões mais detalhadas sobre projetos específicos.
              </p>
              <Button variant="outline" className="w-full" size="lg">
                <a
                  href="mailto:alexandre.catanante@email.com"
                  className="flex items-center justify-center"
                >
                  Enviar Email
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-background rounded-lg p-8 shadow-card text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seja para discutir uma oportunidade de trabalho, uma consultoria em BI, 
            ou simplesmente trocar ideias sobre análise de dados, estou sempre aberto 
            para novas conversas e desafios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <a
                href="https://linkedin.com/in/alexandre-catanante"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Vamos Conversar
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* What I Can Help With */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Como Posso Ajudar Sua Empresa
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Consultoria em BI
                </h4>
                <p className="text-muted-foreground text-sm">
                  Análise de necessidades e implementação de soluções de Business Intelligence.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <Linkedin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Posições CLT
                </h4>
                <p className="text-muted-foreground text-sm">
                  Aberto para oportunidades como Analista de BI ou Cientista de Dados.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Projetos Freelance
                </h4>
                <p className="text-muted-foreground text-sm">
                  Desenvolvimento de dashboards e análises de dados sob demanda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;