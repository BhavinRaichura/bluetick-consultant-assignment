
import Blogs from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Navbar from '@/components/utils/Navbar'
import Section from '@/components/utils/Section'


export default function Home() {
  return (
    <main className='px-32 max-2xl:px-20 max-lg:px-10 bg-white'>
      <Navbar/>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Products />
      </Section>
      <Section>
        <Blogs/>
      </Section>
      <Section>
        <Contact />
      </Section>
      <Footer />
    </main>
  )
}
