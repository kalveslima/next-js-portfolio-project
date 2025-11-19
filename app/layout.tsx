import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Seu Nome | Desenvolvedor Full Stack',
  description: 'Portfólio profissional de desenvolvimento web. Especializado em React, Next.js e TypeScript. Criando experiências digitais modernas e acessíveis.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Seu Nome' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Seu Nome | Desenvolvedor Full Stack',
    description: 'Portfólio profissional de desenvolvimento web',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
