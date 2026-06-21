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
    title: 'Inovação',
    description:
      'Sempre buscando novas tecnologias e abordagens para criar soluções inovadoras e eficientes.',
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
            Sou estudante de Segurança da Informação com interesse em análise, gestão de riscos, governança e tecnologia aplicada aos negócios. 
            Minha trajetória começou na área de desenvolvimento, mas ao longo dos estudos descobri que meu maior interesse estava em 
            compreender como dados, processos e controles podem apoiar decisões mais seguras e eficientes. Desde então, venho construindo uma formação voltada
             para tecnologia, segurança e análise, buscando desenvolver uma visão cada vez mais estratégica sobre como a informação gera valor para organizações e pessoas.

            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Minha trajetória na tecnologia começou pela curiosidade de entender como sistemas são construídos. 
            Com o tempo, percebi que meu interesse ia além do desenvolvimento e estava cada vez mais ligado 
            à análise, à compreensão de riscos e ao papel da informação na tomada de decisões.
             Atualmente, estudo Segurança da Informação e busco desenvolver uma visão que 
             conecte tecnologia, governança e negócios, acreditando que as melhores soluções surgem
              quando conhecimento técnico e pensamento estratégico caminham juntos.

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
