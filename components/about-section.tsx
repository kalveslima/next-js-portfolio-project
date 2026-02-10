'use client'

import { Code2, Palette, Rocket, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const skills = [
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Experiência sólida em TypeScript, React, python, Next.js e Node.js. Criando aplicações web modernas e escaláveis.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Habilidade em design de interfaces e experiência do usuário, garantindo produtos visuais atraentes e intuitivos.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description:
      'Otimização de aplicações para máxima velocidade e eficiência, garantindo a melhor experiência.',
  },
  {
    icon: Users,
    title: 'Colaboração',
    description:
      'Trabalho em equipe, comunicação clara e metodologias ágeis para entregar projetos de qualidade.',
  },
]

const technologies = [
  'python',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git',
  'PostgreSQL',
 
  'IA ',
  'Excel',
  'Power BI',
  'Banco de dados'
 
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Sou estudante desenvolvedor apaixonado por tecnologia e inovação, com
              foco em criar soluções digitais que transformam ideias em
              realidade. Minha jornada no desenvolvimento e analise começou há alguns
              anos, e desde então tenho me dedicado a aprender e evoluir
              constantemente.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Meu objetivo é desenvolver aplicações que não apenas funcionem
              bem, mas que proporcionem experiências memoráveis aos usuários.
              Acredito que a tecnologia deve ser acessível, intuitiva e
              inclusiva para todos.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.title}
                  className="border-border hover:border-primary transition-colors group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-center">
              Tecnologias que Utilizo
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
