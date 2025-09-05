import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ArticleCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
}

const ArticleCard = ({ title, excerpt, author, date, readTime, category }: ArticleCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
            {category}
          </span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="font-semibold text-xl group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-3">
        <span className="text-sm text-muted-foreground">
          作者: {author}
        </span>
        <Button variant="ghost" size="sm" className="text-primary">
          阅读更多 →
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ArticleCard