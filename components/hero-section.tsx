'use client'

import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-sm sm:text-base text-white uppercase tracking-wider">
              Olá, meu nome é
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-balance">
              Kauan
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white/80 text-balance">
              Dev Web & Estudante de Desenvolvimento
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed text-pretty">
            Construo experiências digitais modernas, acessíveis e performáticas.
            Estudante de React, Next.js, com foco em criar soluções que fazem a
            diferença.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/kalveslima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/kauanalveslima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:k.alves1427@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre" aria-label="Scroll para baixo">
            <ArrowDown className="text-white/80" size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}