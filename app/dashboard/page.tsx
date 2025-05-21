"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Plus, BookText, ShoppingBag, QrCode, DollarSign, TrendingUp } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import BooksList from "@/components/books-list"
import { mockBooks } from "@/lib/mock-data"
import { AreaChart, BarChart } from "@/components/charts"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] px-4 md:px-6 py-6">
        <DashboardNav />
        <main className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your books, sales, and payment methods</p>
            </div>
            <Link href="/dashboard/books/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Book
              </Button>
            </Link>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="books">My Books</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                    <BookText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">8 eBooks, 4 physical books</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">28</div>
                    <p className="text-xs text-muted-foreground">+4 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$580.00</div>
                    <p className="text-xs text-muted-foreground">+$120.00 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12.5%</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Sales Overview</CardTitle>
                    <CardDescription>Your sales performance over the last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Selling Books</CardTitle>
                    <CardDescription>Your best performing books this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockBooks.slice(0, 5).map((book) => (
                        <div key={book.id} className="flex items-center gap-4">
                          <div className="w-12 h-16 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                            {book.coverImage ? (
                              <Image
                                src={book.coverImage || "/placeholder.svg"}
                                alt={book.title}
                                width={48}
                                height={64}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <BookOpen className="h-6 w-6 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="font-medium leading-none">{book.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {book.type === "ebook" ? "eBook" : "Physical Book"}
                            </p>
                          </div>
                          <div className="font-medium">${book.price.toFixed(2)}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Your QR code payment methods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <QrCode className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium leading-none">PayPal.me</p>
                          <p className="text-sm text-muted-foreground">paypal.me/johndoe</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <QrCode className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium leading-none">UPI</p>
                          <p className="text-sm text-muted-foreground">johndoe@upi</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="books" className="space-y-4">
              <BooksList books={mockBooks} />
            </TabsContent>
            <TabsContent value="sales" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sales History</CardTitle>
                  <CardDescription>View all your completed and pending sales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Sales history would go here */}
                    <p className="text-muted-foreground">No sales data to display.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your QR code payment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <QrCode className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium leading-none">PayPal.me</p>
                        <p className="text-sm text-muted-foreground">paypal.me/johndoe</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <QrCode className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium leading-none">UPI</p>
                        <p className="text-sm text-muted-foreground">johndoe@upi</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
