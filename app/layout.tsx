import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'kauan alves  |Estudante de desenvolvimento ',
  description: 'Portfólio profissional de desenvolvimento web. Especializado em Python, Excel e Banco de dados. Criando experiências digitais modernas e acessíveis.',
  keywords: ['desenvolvedor', 'Kpis', 'Pandas', 'Excel', 'Power BI', ''],
  authors: [{ name: 'kauan alves' }],
  generator: '',
  openGraph: {
    title: 'KAUAN ALVES | Desenvolvedor ',
    description: '',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
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
