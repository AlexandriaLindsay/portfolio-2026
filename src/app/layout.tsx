import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Builds by Alex — Web Development & Digital Marketing',
  description:
    'Builds by Alex creates modern, high-performance websites and digital marketing solutions that help businesses attract customers and grow online.',
  openGraph: {
    title: 'Builds by Alex — Web Development & Digital Marketing',
    description:
      'Custom websites, SEO, and digital marketing solutions designed to help businesses generate more leads.',
    type: 'website',
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
