"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ShoppingCart, ArrowLeft, Check, Loader2, Star } from "lucide-react"
import { mockBooks } from "@/lib/mock-data"
import QRCodeComponent from "@/components/qr-code"

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = mockBooks.find((b) => b.id === params.id)

  const [paymentStep, setPaymentStep] = useState<"info" | "payment" | "confirmation">("info")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleBuyNow = () => {
    setPaymentStep("payment")
  }

  const handleConfirmPayment = () => {
    setIsProcessing(true)
    // Simulate payment verification
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentStep("confirmation")
    }, 2000)
  }

  if (!book) {
    return (
      <div className="container px-4 md:px-6 py-6">
        <p>Book not found</p>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-6 space-y-6">
      <Link href="/marketplace" className="flex items-center text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Marketplace
      </Link>

      {paymentStep === "info" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden max-w-md mx-auto lg:mx-0">
            {book.coverImage ? (
              <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-muted-foreground" />
              </div>
            )}
            <Badge className="absolute top-4 right-4 text-sm px-3 py-1">
              {book.type === "ebook" ? "eBook" : "Physical Book"}
            </Badge>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {book.category && (
                  <Badge variant="outline" className="text-xs">
                    {book.category}
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold tracking-tight">{book.title}</h1>
              <p className="text-xl text-muted-foreground">by {book.author}</p>
              <div className="flex items-center gap-2 pt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">(24 reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-2xl font-bold">${book.price.toFixed(2)}</div>
                <Badge variant="outline">Seller: {book.seller}</Badge>
              </div>
            </div>

            <Tabs defaultValue="description" className="space-y-4">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="seller">Seller Info</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <p>{book.description}</p>
              </TabsContent>
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-muted-foreground">Format</div>
                  <div>{book.type === "ebook" ? "eBook (PDF, EPUB)" : "Physical Book"}</div>

                  <div className="text-muted-foreground">Pages</div>
                  <div>{book.pages}</div>

                  <div className="text-muted-foreground">Language</div>
                  <div>English</div>

                  <div className="text-muted-foreground">ISBN</div>
                  <div>{book.isbn || "N/A"}</div>

                  <div className="text-muted-foreground">Published</div>
                  <div>{book.publishedDate || "N/A"}</div>
                </div>
              </TabsContent>
              <TabsContent value="seller" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">{book.seller}</h3>
                  <p className="text-sm text-muted-foreground">Seller since January 2023</p>
                  <p className="text-sm">Specializes in {book.type === "ebook" ? "digital" : "physical"} books.</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="flex-1" onClick={handleBuyNow}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Contact Seller
              </Button>
            </div>
          </div>
        </div>
      )}

      {paymentStep === "payment" && (
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Scan & Pay</h2>
              <p className="text-muted-foreground">Scan the QR code below to pay directly to the seller</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="border rounded-lg p-4 bg-white">
                <QRCodeComponent
                  value={`https://pay.example.com/${book.seller}?amount=${book.price}&reference=BOOK-${book.id}`}
                  size={200}
                />
              </div>
              <div className="text-center space-y-1">
                <p className="font-medium">Amount: ${book.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Seller: {book.seller}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Button className="w-full" onClick={handleConfirmPayment} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying Payment...
                  </>
                ) : (
                  "I Have Made the Payment"
                )}
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setPaymentStep("info")}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {paymentStep === "confirmation" && (
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 space-y-6">
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Payment Confirmed!</h2>
                <p className="text-muted-foreground">
                  {book.type === "ebook" ? "Your eBook is ready for download" : "Your book will be shipped soon"}
                </p>
              </div>
            </div>

            {book.type === "ebook" ? (
              <Button className="w-full">Download eBook</Button>
            ) : (
              <div className="space-y-2 text-center">
                <p className="font-medium">Shipping Details</p>
                <p className="text-sm text-muted-foreground">Your book will be shipped within 2-3 business days.</p>
              </div>
            )}

            <Button variant="outline" className="w-full" onClick={() => setPaymentStep("info")}>
              Back to Book Details
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Related Books Section */}
      {paymentStep === "info" && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockBooks
              .filter((b) => b.id !== book.id && b.category === book.category)
              .slice(0, 4)
              .map((relatedBook) => (
                <Link key={relatedBook.id} href={`/marketplace/${relatedBook.id}`}>
                  <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                    <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-800">
                      {relatedBook.coverImage ? (
                        <Image
                          src={relatedBook.coverImage || "/placeholder.svg"}
                          alt={relatedBook.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                      <Badge className="absolute top-2 right-2">
                        {relatedBook.type === "ebook" ? "eBook" : "Physical"}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-1">
                        <h3 className="font-semibold line-clamp-1">{relatedBook.title}</h3>
                        <p className="text-sm text-muted-foreground">{relatedBook.author}</p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="font-medium">${relatedBook.price.toFixed(2)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
