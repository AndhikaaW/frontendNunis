import '../../styles/globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        {children}
      </div>
  )
}
