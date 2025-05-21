"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockBooks } from "@/lib/mock-data"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedBooks() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const booksPerPage = 4
  const totalPages = Math.ceil(mockBooks.length / booksPerPage)

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleBooks = mockBooks.slice(currentIndex * booksPerPage, (currentIndex + 1) * booksPerPage)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleBooks.map((book, index) => (
          <Link key={index} href={`/marketplace/${book.id}`}>
            <Card className="overflow-hidden h-full transition-all hover:shadow-md">
              <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-800">
                {book.coverImage ? (
                  <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookIcon className="h-12 w-12 text-muted-foreground" />
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button variant="outline" size="icon" onClick={prevPage} aria-label="Previous page">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={i === currentIndex ? "default" : "outline"}
                size="icon"
                className="w-8 h-8"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={nextPage} aria-label="Next page">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
