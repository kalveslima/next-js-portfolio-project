
'use client'

import Link from 'next/link'
import {
  ExternalLink,
  Github,
  FileText,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const resources = [
  {
    title: 'Tecnologias Sem Fio e Vulnerabilidades',
    description:
      'Estudo acadêmico sobre redes sem fio, vulnerabilidades conhecidas, métodos de mitigação e boas práticas de proteção.',
    document: '/docs/VUL.doc',
  },
  {
    title: 'Sistema de Gerenciamento de Pacientes',
    description:
      'Aplicação desenvolvida utilizando Next.js, Prisma e PostgreSQL para gerenciamento de pacientes.',
    projectUrl: 'https://odonto-lab.vercel.app/',
    githubUrl: 'https://github.com/kalveslima/odonto-lab',
  },
  {
    title: 'Estufa Inteligente ESP32',
    description:
      'Projeto IoT voltado para monitoramento e automação utilizando sensores e microcontroladores.',
    githubUrl: 'https://wokwi.com/projects/466808635402932225',
  },
]

const interests = [
  'Governança de TI',
  'Segurança da Informação',
  'Gestão de Riscos',
  'Infraestrutura',
  'Redes',
  'LGPD',
  'Compliance',
  'Linux',
  'Gestão de Acessos',
  'Continuidade de Negócios',
]

const technologies = [
  'Linux',
  'Windows',
  'Redes TCP/IP',
  'Python',
  'Git',
  'Docker',
  'PostgreSQL',
  'LGPD',
  'Governança de TI',
  'Next.js',
  'ESP32',
]

export default function SegurancaPage() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <div className="text-center space-y-8">
            <Link
              href="/"
              className="inline-flex px-4 py-2 rounded-lg border border-primary/20 hover:border-primary transition-colors"
            >
              {'<Kauan />'}
            </Link>

            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-sm">
                Segurança da Informação
              </span>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold">
                Protegendo informações,
                <span className="text-primary">
                  {' '}reduzindo riscos
                </span>
              </h1>
            </div>

            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* INTRODUÇÃO */}
          <div className="max-w-4xl mx-auto mt-20 space-y-8 text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Minha formação em Segurança da Informação é direcionada para
              compreender como tecnologia, processos e governança podem
              contribuir para ambientes mais seguros, eficientes e alinhados
              aos objetivos das organizações.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Tenho interesse especial por infraestrutura, gestão de riscos,
              governança de TI e controles de segurança, buscando sempre
              conectar aspectos técnicos às necessidades do negócio.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Acredito que a segurança deve ser encarada como um elemento
              estratégico, capaz de apoiar decisões, fortalecer processos e
              aumentar a confiabilidade das informações.
            </p>
          </div>

          {/* ÁREAS DE INTERESSE */}
          <div className="mt-24">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Áreas de Interesse
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((item) => (
                <span
                  key={item}
                  className="
                    px-5 py-3
                    rounded-full
                    border border-primary/20
                    bg-background/50
                    backdrop-blur-sm
                    hover:border-primary
                    transition-colors
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FORMAÇÃO */}
          <div className="mt-24">
            <h2 className="text-2xl font-semibold text-center mb-10">
              Formação e Estudos
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="rounded-2xl border border-primary/20 p-6 bg-background/60 backdrop-blur-sm">
                <h3 className="font-semibold text-lg">
                  Segurança da Informação — FATEC
                </h3>

                <p className="text-muted-foreground mt-2">
                  Formação voltada para infraestrutura, redes,
                  governança, gestão de riscos e proteção de ativos
                  de informação.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 p-6 bg-background/60 backdrop-blur-sm">
                <h3 className="font-semibold text-lg">
                  Estudos e Projetos Práticos
                </h3>

                <p className="text-muted-foreground mt-2">
                  Desenvolvimento de projetos acadêmicos e estudos
                  independentes relacionados à segurança, automação,
                  infraestrutura e análise tecnológica.
                </p>
              </div>
            </div>
          </div>

          {/* PROJETOS */}
          <div className="mt-24">
            <h2 className="text-2xl font-semibold text-center mb-10">
              Projetos e Documentação Técnica
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Card
                  key={resource.title}
                  className="
                    bg-background/60
                    backdrop-blur-sm
                    border-primary/20
                    hover:border-primary
                    transition-all
                  "
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
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 hover:border-primary transition-colors"
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

          {/* TECNOLOGIAS */}
          <div className="mt-24">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Tecnologias e Conhecimentos
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-2
                    rounded-full
                    border border-primary/20
                    bg-background/50
                    backdrop-blur-sm
                    text-sm
                    hover:border-primary
                    transition-colors
                  "
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

