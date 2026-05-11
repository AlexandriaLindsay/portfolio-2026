'use client'

import { useState } from 'react'
import Cursor      from '@/components/Cursor'
import Loader      from '@/components/Loader'
import Nav         from '@/components/Nav'
import Hero        from '@/components/Hero'
import Marquee     from '@/components/Marquee'
import IntroAbout  from '@/components/IntroAbout'
import Work        from '@/components/Work'
import About       from '@/components/About'
import { Services, Process, Contact, Footer } from '@/components/Sections'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <main className="bg-white min-h-screen">
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Nav />

      <Hero        loaded={loaded} />
      <Marquee />
      <IntroAbout />
      <Work />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
