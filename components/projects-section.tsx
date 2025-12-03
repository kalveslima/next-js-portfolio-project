'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  
  {
    title: 'site feito para intervenção de uma ONG',
    description:
      'Site institucional para ONG, com informações sobre projetos, equipe e formulário de contato.',
    image: '/siteong.png',
    tags: ['React', 'Next.js', 'Tailwind', 'Vercel'],
    liveUrl: 'https://intinerario-extensionista.vercel.app',
    githubUrl: 'https://github.com/kalveslima/intinerario_extensionista',
  },
  {
    title: 'Mywork portifolios personalizados',
    description:
      'portifolios personalizados para profissionais de diversas áreas, com design responsivo e otimização SEO.',
    image: '/mywork.png',
    tags: ['Next.js','Tailwind', 'Vercel'],
    liveUrl: 'https://mywork-portifolios-personalizados.vercel.app',
    githubUrl: 'https://github.com/seuusuario/projeto',
  },
  {
    title: 'sistema de agendamento odontológico',
    description:
      'Sistema completo de agendamento para clínicas odontológicas, com gerenciamento de pacientes e lembretes automáticos.',
    image: '/odonto.png',
    tags: ['Next.js', 'Tailwind', 'Vercel','prisma','SQlite'],
    liveUrl: 'https://odonto-lab.vercel.app',
    githubUrl: 'https://github.com/kalveslima/odonto-lab',
  },
  
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Projetos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi. Cada um representa um desafio
              único e uma oportunidade de aprendizado.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden border-border hover:border-primary transition-all group hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={16} />
                      Código
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
