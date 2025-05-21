"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Pencil, Trash2, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Book } from "@/lib/types"

interface BooksListProps {
  books: Book[]
}

export default function BooksList({ books }: BooksListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <Card key={book.id} className="overflow-hidden">
          <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-800">
            {book.coverImage ? (
              <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
            <Badge className="absolute top-2 right-2">{book.type === "ebook" ? "eBook" : "Physical"}</Badge>
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
                <div className="font-medium">${book.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <Link href={`/marketplace/${book.id}`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                </Link>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
