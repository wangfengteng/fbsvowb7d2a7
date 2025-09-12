import Header from '@/components/blog/Header'
import Footer from '@/components/blog/Footer'

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">所有文章</h1>
          <div className="bg-card rounded-lg p-8 text-center">
            <p className="text-muted-foreground text-lg">
              文章列表页面正在开发中...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Articles