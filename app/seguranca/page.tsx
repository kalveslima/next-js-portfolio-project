'use client'
import Link from 'next/link'
import {
  Shield,
  Network,
  Lock,
  Server,
  ExternalLink,
  Github,
  FileText,

} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const securitySkills = [
  {
    icon: Network,
    title: 'Infraestrutura de TI',
    description:
      'Conhecimentos em redes, sistemas operacionais, serviços e suporte à infraestrutura tecnológica.',
  },
  {
    icon: Shield,
    title: 'Governança e Segurança',
    description:
      'Estudo de boas práticas, gestão de riscos, políticas de segurança e proteção dos ativos de informação.',
  },
  {
    icon: Lock,
    title: 'Gestão de Acessos',
    description:
      'Aplicação dos princípios de autenticação, autorização e controle de acesso em ambientes corporativos.',
  },
  {
    icon: Server,
    title: 'Administração de Sistemas',
    description:
      'Configuração, gerenciamento e monitoramento de ambientes Linux, além da automação de tarefas.',
  },
]

const resources = [
  {
    title: 'Tecnologias Sem Fio e Vulnerabilidades',
    description:
      'Trabalho acadêmico sobre tecnologias sem fio, vulnerabilidades conhecidas, métodos de defesa e boas práticas de segurança.',
    document: '/docs/VUL.doc',
  },
  {
    title: 'Sistema de Gerenciamento de Pacientes',
    description:
      'Aplicação desenvolvida com Next.js, Prisma e PostgreSQL para gerenciamento de pacientes.',
    projectUrl: 'https://odonto-lab.vercel.app/',
    githubUrl: 'https://github.com/kalveslima/odonto-lab',
  },
  {
    title: 'Estufa Inteligente ESP32',
    description:
      'Projeto IoT para monitoramento e automação utilizando sensores, atuadores e ESP32.',
    githubUrl: 'https://wokwi.com/projects/466808635402932225',
  },

]

const technologies = [
  'Linux',
  'Windows',
  'Redes TCP/IP',
  'Python',
  'Git',
  'Docker',
  'PostgreSQL',
  'Segurança da Informação',
  'Governança de TI',
  'LGPD',
  'ESP32',
  'Next.js',
]

export default function SegurancaPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Segurança da Informação
            </h1>
            <div className="flex justify-center">
  <Link
    href="/"
    className="inline-flex items-left px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
  >
   {'<Kauan />'}
  </Link>
</div>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>


          

          {/* Introdução */}
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Esta seção reúne meus estudos e projetos relacionados à
              Segurança da Informação, Infraestrutura e Governança de TI.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Atualmente curso Segurança da Informação pela FATEC e busco
              desenvolver conhecimentos em redes, administração de sistemas,
              gestão de riscos, governança e boas práticas de proteção das
              informações em ambientes corporativos.
            </p>
          </div>

          {/* Competências */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securitySkills.map((skill) => {
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

                    <h3 className="text-xl font-semibold">
                      {skill.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Projetos e Documentação */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Projetos e Documentação Técnica
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Card
                  key={resource.title}
                  className="border-border hover:border-primary transition-colors"
                >
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">
                      {resource.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {resource.document && (
                        <a
                          href={resource.document}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground"
                        >
                          <FileText size={18} />
                          Documento
                        </a>
                      )}

                      {resource.projectUrl && (
                        <a
                          href={resource.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground"
                        >
                          <ExternalLink size={18} />
                          Projeto
                        </a>
                      )}

                      {resource.githubUrl && (
                        <a
                          href={resource.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border hover:border-primary transition-colors"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tecnologias */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Tecnologias e Conhecimentos
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
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