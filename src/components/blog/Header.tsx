import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-xl">TechBlog</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">首页</a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">文章</a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">分类</a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">关于</a>
        </nav>
        
        <Button variant="outline" size="sm">
          订阅
        </Button>
      </div>
    </header>
  )
}

export default Header