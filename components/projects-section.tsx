
'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Site Institucional para ONG',
    description:
      'Plataforma desenvolvida para divulgação de projetos sociais, informações institucionais e canais de contato, proporcionando uma presença digital moderna e acessível.',
    image: '/siteong.png',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://intinerario-extensionista.vercel.app',
    githubUrl: 'https://github.com/kalveslima/intinerario_extensionista',
  },
  {
    title: 'MyWork Portfólios Personalizados',
    description:
      'Landing page voltada para criação de portfólios profissionais personalizados, com foco em identidade visual, apresentação de serviços e presença digital.',
    image: '/mywork.png',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://mywork-portifolios-personalizados.vercel.app',
    githubUrl: 'https://github.com/seuusuario/projeto',
  },
  {
    title: 'Sistema de Gestão Odontológica',
    description:
      'Sistema para gerenciamento de pacientes, consultas e prontuários, desenvolvido com foco em organização operacional e experiência do usuário.',
    image: '/odonto.png',
    tags: ['Next.js', 'Prisma', 'SQLite', 'Tailwind CSS'],
    liveUrl: 'https://odonto-lab.vercel.app',
    githubUrl: 'https://github.com/kalveslima/odonto-lab',
  },
  {
    title: 'Jogo da Forca Interativo',
    description:
      'Aplicação web desenvolvida para fins acadêmicos, utilizando lógica de programação, gerenciamento de estado e interface responsiva.',
    image: '/forca.jpeg',
    tags: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://frontend-two-lac-48.vercel.app/',
    githubUrl: 'https://github.com/kalveslima/jogo-forca',
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-primary uppercase tracking-[0.3em] text-sm">
              Portfólio
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Projetos em Destaque
            </h2>

            <div className="w-24 h-px bg-primary mx-auto" />

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Projetos desenvolvidos ao longo da minha trajetória acadêmica e
              profissional, envolvendo desenvolvimento web, sistemas de gestão,
              automação e soluções voltadas para tecnologia.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="
                  overflow-hidden
                  bg-background/70
                  backdrop-blur-md
                  border-primary/20
                  hover:border-primary
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
                  transition-all
                  duration-300
                  group
                "
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
                </div>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-3
                          py-1
                          rounded-full
                          border
                          border-primary/20
                          bg-primary/5
                          text-primary
                          text-xs
                          font-medium
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="flex-1 shadow-lg shadow-primary/20"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Projeto
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="
                      flex-1
                      border-primary/20
                      hover:border-primary
                      hover:bg-primary/5
                    "
                  >
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

