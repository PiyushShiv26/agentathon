import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CursorGlow from '@/components/cursor-glow'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Agentathon - MCP + Agentic AI Hackathon',
  description: 'Join us for Agentathon, a 30-hour hackathon focused on building AI-powered applications using Model Context Protocol (MCP) and Agentic AI. Nov 8-9, 2025 at PES University.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased cursor-none`}>
        <CursorGlow />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
