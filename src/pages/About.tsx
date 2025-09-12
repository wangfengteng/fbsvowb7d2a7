import Header from '@/components/blog/Header'
import Footer from '@/components/blog/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">关于我们</h1>
          <div className="bg-card rounded-lg p-8 text-center">
            <p className="text-muted-foreground text-lg">
              关于页面正在开发中...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About