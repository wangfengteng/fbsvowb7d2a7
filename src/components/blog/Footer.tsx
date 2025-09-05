const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl">TechBlog</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              专注于分享最新的技术趋势、深度技术解析和实用的编程技巧，
              帮助开发者和技术爱好者不断成长。
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">首页</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">文章</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">分类</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">关于</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>邮箱: contact@techblog.com</li>
              <li>GitHub: @techblog</li>
              <li>Twitter: @techblog</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 TechBlog. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer