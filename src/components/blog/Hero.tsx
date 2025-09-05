import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">🚀 探索科技前沿</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            探索科技世界的
            <span className="text-primary">无限可能</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            最新技术动态、深度技术解析、编程技巧分享，尽在TechBlog
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              开始阅读
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero