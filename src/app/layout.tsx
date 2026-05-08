import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevFolio — Full-Stack Developer & Conversion Specialist',
  description:
    'Full-stack developer specializing in high-performance web experiences, 3D/WebGL, and conversion rate optimization. Turning visitors into measurable revenue.',
  keywords: ['full-stack developer', 'WebGL', 'Three.js', 'CRO', 'conversion optimization', 'React', 'Next.js'],
  openGraph: {
    title: 'DevFolio — Full-Stack Developer & Conversion Specialist',
    description: 'High-performance web experiences that convert.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
