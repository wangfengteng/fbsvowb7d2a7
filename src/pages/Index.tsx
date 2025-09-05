import Header from '@/components/blog/Header'
import Hero from '@/components/blog/Hero'
import FeaturedPosts from '@/components/blog/FeaturedPosts'
import Categories from '@/components/blog/Categories'
import Footer from '@/components/blog/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedPosts />
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default Index