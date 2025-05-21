import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { mockBooks } from "@/lib/mock-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketplacePage() {
  const categories = [...new Set(mockBooks.map((book) => book.category))].filter(Boolean) as string[]

  return (
    <div className="container px-4 md:px-6 py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Book Marketplace</h1>
        <p className="text-muted-foreground">Browse and purchase books from independent sellers</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search books by title, author, or ISBN..." className="pl-8" />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-full h-auto flex flex-wrap justify-start overflow-auto py-1">
          <TabsTrigger value="all" className="rounded-md">
            All Books
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="rounded-md">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockBooks.map((book) => (
              <Link key={book.id} href={`/marketplace/${book.id}`}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-800">
                    {book.coverImage ? (
                      <Image
                        src={book.coverImage || "/placeholder.svg"}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                    <Badge className="absolute top-2 right-2">{book.type === "ebook" ? "eBook" : "Physical"}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold line-clamp-1">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="font-medium">${book.price.toFixed(2)}</div>
                        <div className="text-xs text-muted-foreground">{book.seller}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mockBooks
                .filter((book) => book.category === category)
                .map((book) => (
                  <Link key={book.id} href={`/marketplace/${book.id}`}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                      <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-800">
                        {book.coverImage ? (
                          <Image
                            src={book.coverImage || "/placeholder.svg"}
                            alt={book.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <BookOpen className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                        <Badge className="absolute top-2 right-2">{book.type === "ebook" ? "eBook" : "Physical"}</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold line-clamp-1">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">{book.author}</p>
                          <div className="flex items-center justify-between pt-2">
                            <div className="font-medium">${book.price.toFixed(2)}</div>
                            <div className="text-xs text-muted-foreground">{book.seller}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
