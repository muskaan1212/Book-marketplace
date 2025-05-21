import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, ShieldCheck, QrCode } from "lucide-react"
import FeaturedBooks from "@/components/featured-books"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Sell Books Securely Without Sharing Bank Details
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Pagely lets you sell physical books and eBooks using QR code payments. No need to share sensitive
                  financial information.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/marketplace">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Browse Books
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Start Selling
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-10 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-4 p-6 absolute inset-0 z-20">
                  <div className="transform -rotate-6 shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-iQoWgplAp0lFMMFrjwSG38cX9ApRpp.jpeg"
                      alt="The Great Gatsby"
                      width={180}
                      height={280}
                      className="rounded-md object-cover h-full"
                    />
                  </div>
                  <div className="transform rotate-6 shadow-lg mt-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-bbgvNXTi1BekJpAMD7lCSl4qE0Fdkb.jpeg"
                      alt="To Kill a Mockingbird"
                      width={180}
                      height={280}
                      className="rounded-md object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Books</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our curated selection of top books from independent sellers
              </p>
            </div>
          </div>
          <div className="mt-12">
            <FeaturedBooks />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform makes selling books simple, secure, and hassle-free
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">List Your Books</h3>
              <p className="text-muted-foreground">
                Create a profile and upload your physical books or eBooks for sale with descriptions and pricing.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">QR Code Payments</h3>
              <p className="text-muted-foreground">
                We generate a unique QR code linked to your preferred payment method for secure transactions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure Delivery</h3>
              <p className="text-muted-foreground">
                Once payment is confirmed, physical books are shipped or eBook downloads are unlocked automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our community of book sellers and buyers
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "Pagely has transformed how I sell my books. The QR payment system is brilliant - no more worrying
                  about sharing my bank details!"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Book Seller</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "As someone who buys a lot of books, I love how easy Pagely makes the process. Scan, pay, and my books
                  arrive quickly!"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Book Buyer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "I've been selling my eBooks on Pagely for 6 months now. The platform is secure, professional, and has
                  helped me reach more readers."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-medium">Emily Rodriguez</p>
                  <p className="text-sm text-muted-foreground">eBook Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Selling?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Pagely today and start selling your books securely without sharing bank details.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/register">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Create Account
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
