import ArticleCard from './ArticleCard'

const FeaturedPosts = () => {
  const featuredArticles = [
    {
      title: "人工智能在医疗领域的革命性应用",
      excerpt: "探索AI如何改变医疗诊断、药物研发和患者护理，了解最新的技术突破和未来趋势。",
      author: "张博士",
      date: "2024-01-15",
      readTime: "8分钟阅读",
      category: "人工智能"
    },
    {
      title: "Web3.0：下一代互联网的技术架构",
      excerpt: "深入解析区块链、去中心化应用和智能合约如何构建全新的互联网生态系统。",
      author: "李工程师",
      date: "2024-01-12",
      readTime: "12分钟阅读",
      category: "区块链"
    },
    {
      title: "量子计算的现状与未来展望",
      excerpt: "了解量子比特、量子纠缠和量子算法，探索量子计算对传统计算的颠覆性影响。",
      author: "王研究员",
      date: "2024-01-10",
      readTime: "10分钟阅读",
      category: "量子计算"
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">精选文章</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            探索我们最新、最深入的技术文章，涵盖人工智能、区块链、量子计算等前沿领域
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts