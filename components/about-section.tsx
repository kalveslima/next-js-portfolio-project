'use client'

const interests = [
  'Segurança da Informação',
  'Governança de TI',
  'Análise de Dados',
  'Gestão de Riscos',
  'Infraestrutura',
  'Business Intelligence',
  'Python',
  'Power BI',
]

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-70">
            <span className="text-primary uppercase tracking-[0.3em] text-sm">
              Sobre Mim
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold">
  Uma trajetória guiada por
  <span className="text-primary"> tecnologia e conhecimento</span>
</h2>
          </div>

          {/* Texto Principal */}
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              comecei a aprender sobre desenvolvimento antes da faculdade de ciencias da computação, 
              com o curso de python do grande professor de todos nós, gustavo guanabara.
              com o incetivo do meu irmão que foi e é meu mentor, engressei na minha primeira faculdade,
              la aprendi e trouxe varias skills, desenvolvi alguns projetos,
               comecei a me envolver com APis, estruturas de dados, UI e UX, frameworks,arquiteturas,
               com o tempo, fui enxergando que o desenvolvimento era apenas uma parte de tudo que eu era capaz.

              o resto da minha história, você pode ler nas outra paginas.
              
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Ao longo da minha formação, passei a direcionar meus estudos para
              compreender como dados, controles e boas práticas podem apoiar
              decisões estratégicas e aumentar a segurança dos ambientes
              corporativos.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Atualmente busco construir uma carreira que conecte tecnologia,
              negócios e governança, contribuindo para organizações que
              valorizam informação, eficiência e inovação.
            </p>
          </div>

          {/* Indicadores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8 text-center">
              <h3 className="text-4xl font-bold text-primary">2</h3>
              <p className="text-muted-foreground mt-2">
                Graduações
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8 text-center">
              <h3 className="text-4xl font-bold text-primary">3</h3>
              <p className="text-muted-foreground mt-2">
                Áreas de atuação
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8 text-center">
              <h3 className="text-4xl font-bold text-primary">10+</h3>
              <p className="text-muted-foreground mt-2">
                Tecnologias estudadas
              </p>
            </div>
          </div>

          {/* Formação */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold mb-8">
              Formação Acadêmica
            </h3>

            <div className="space-y-4">
              <div className="rounded-xl border border-border p-6">
                <h4 className="font-semibold">
                  Segurança da Informação — FATEC
                </h4>
              </div>

              <div className="rounded-xl border border-border p-6">
                <h4 className="font-semibold">
                  Ciência da Computação — UNICID
                </h4>
              </div>
            </div>
          </div>

          {/* Áreas de Interesse */}
          <div className="mt-24">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Áreas de Interesse
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((item) => (
                <span
                  key={item}
                  className="px-5 py-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}