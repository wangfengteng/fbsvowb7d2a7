import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = [
    { name: '人工智能', count: 24, color: 'bg-blue-500' },
    { name: '区块链', count: 18, color: 'bg-green-500' },
    { name: '云计算', count: 15, color: 'bg-purple-500' },
    { name: '物联网', count: 12, color: 'bg-orange-500' },
    { name: '量子计算', count: 8, color: 'bg-red-500' },
    { name: '网络安全', count: 20, color: 'bg-cyan-500' }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">热门分类</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            探索不同技术领域的深度内容，找到你最感兴趣的话题
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link to="/categories" key={index}>
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center h-24 p-4 border-2 hover:border-primary/50 transition-all group w-full"
              >
                <div className={`w-8 h-8 ${category.color} rounded-full mb-2`} />
                <span className="font-semibold text-sm">{category.name}</span>
                <span className="text-muted-foreground text-xs">{category.count}篇文章</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories