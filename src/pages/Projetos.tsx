import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dashboardFinanceiro from "@/assets/dashboard-financeiro.jpg";
import dashboardVendas from "@/assets/dashboard-vendas.jpg";
import dashboardRH from "@/assets/dashboard-rh.jpg";

const Projetos = () => {
  const projetos = [
    {
      id: "financeiro",
      title: "Dashboard de Gestão Financeira",
      image: dashboardFinanceiro,
      ferramentas: ["Power BI", "Power Query", "SQL"],
      problema: "Uma entidade pública enfrentava dificuldade para rastrear gastos em tempo real, resultando em estouros de orçamento e falta de visibilidade sobre a alocação de recursos entre diferentes centros de custo.",
      acao: "Utilizei o Power Query para conectar, limpar e transformar os dados brutos de gastos, tratando inconsistências e dados ausentes. Modelei os dados para criar um esquema relacional otimizado para análise. Desenvolvi métricas DAX para calcular KPIs essenciais como \"Orçado vs. Realizado\" e \"Variação Percentual\".",
      solucao: [
        "Desenvolvi um dashboard interativo que permitia aos gestores filtrar os gastos por departamento, período e categoria de despesa.",
        "A tela principal utiliza um gráfico de cascata para decompor a variação orçamentária, tornando claro onde ocorreram os maiores desvios.",
        "Usei a cor vermelha de forma estratégica para destacar apenas os desvios negativos acima de 10%, focando a atenção do usuário nos problemas mais críticos, sem criar saturação visual."
      ],
      resultados: [
        "O dashboard reduziu o tempo de análise de gastos de dias para minutos.",
        "Proporcionou uma visão clara que permitiu aos gestores identificar e cortar 15% em despesas não essenciais no primeiro trimestre de uso."
      ]
    },
    {
      id: "vendas",
      title: "Dashboard de Performance de Vendas",
      image: dashboardVendas,
      ferramentas: ["Power BI", "SQL Server", "DAX"],
      problema: "Uma empresa de varejo não conseguia identificar padrões de vendas por região e produto, perdendo oportunidades de otimização e tendo dificuldades para prever demanda futura.",
      acao: "Integrei dados de vendas de múltiplas fontes usando SQL Server, criando um modelo de dados dimensional. Implementei análises de tendência e sazonalidade usando DAX avançado. Desenvolvi métricas de conversão e lifetime value dos clientes.",
      solucao: [
        "Criei um dashboard multicamadas com visão executiva, tática e operacional das vendas.",
        "Implementei análise de funil de vendas com identificação de gargalos por região.",
        "Desenvolvi um sistema de alertas visuais para metas não atingidas e oportunidades de cross-selling."
      ],
      resultados: [
        "Aumentou a taxa de conversão em 22% através da identificação de padrões de comportamento do cliente.",
        "Melhorou a precisão de previsão de vendas em 35%, otimizando o planejamento de estoque."
      ]
    },
    {
      id: "rh",
      title: "Dashboard de Analytics de RH",
      image: dashboardRH,
      ferramentas: ["Power BI", "Excel", "Power Query"],
      problema: "O departamento de RH gastava horas compilando relatórios manuais sobre turnover, absenteísmo e performance, sem conseguir identificar tendências ou fatores de risco.",
      acao: "Automatizei a coleta de dados de RH usando Power Query, integrando informações de múltiplas planilhas. Criei KPIs específicos para gestão de pessoas e desenvolvi modelos preditivos simples para identificação de riscos de turnover.",
      solucao: [
        "Desenvolvi um dashboard centralizado com métricas de headcount, turnover e satisfação por departamento.",
        "Implementei análise de correlação entre performance e permanência na empresa.",
        "Criei visualizações de heat map para identificar departamentos com maior risco de rotatividade."
      ],
      resultados: [
        "Reduziu o tempo de geração de relatórios de RH de 8 horas para 15 minutos.",
        "Permitiu ações preventivas que diminuíram o turnover em 18% no período de 6 meses."
      ]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Meus Projetos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada projeto conta uma história de transformação: como dados se tornaram insights, 
            insights se tornaram estratégias, e estratégias se tornaram resultados mensuráveis.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projetos.map((projeto, index) => (
            <Card key={projeto.id} className="shadow-card hover:shadow-elegant transition-smooth overflow-hidden">
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="bg-primary text-primary-foreground p-8">
                  <h2 className="text-3xl font-bold mb-4">{projeto.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {projeto.ferramentas.map((ferramenta, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary-foreground text-primary">
                        {ferramenta}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Dashboard Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={projeto.image}
                    alt={`Dashboard ${projeto.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-8">
                  {/* Problema */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      🎯 Problema de Negócio
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projeto.problema}
                    </p>
                  </div>

                  {/* Ação */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      🛠️ Minha Ação e Ferramentas
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Processo:</strong> {projeto.acao}
                    </p>
                  </div>

                  {/* Solução */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      📊 A Solução (Storytelling com Dados)
                    </h3>
                    <ul className="space-y-2">
                      {projeto.solucao.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resultados */}
                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      📈 Impacto e Resultados
                    </h3>
                    <ul className="space-y-2">
                      {projeto.resultados.map((resultado, i) => (
                        <li key={i} className="text-primary font-medium leading-relaxed">
                          ✓ {resultado}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-background rounded-lg p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Gostou dos resultados?
          </h3>
          <p className="text-muted-foreground mb-6">
            Estes são apenas alguns exemplos do que podemos alcançar quando dados se encontram com estratégia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linkedin.com/in/alexandre-catanante"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              Vamos Conversar no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;