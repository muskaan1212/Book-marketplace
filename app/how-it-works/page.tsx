import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, QrCode, ShieldCheck, CreditCard, Truck, Download, ShoppingBag } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="container px-4 md:px-6 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">How BookBazaar Works</h1>
        <p className="text-xl text-muted-foreground">
          Our platform makes selling and buying books simple, secure, and private
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <CardTitle>For Sellers</CardTitle>
            </div>
            <CardDescription>Sell your books without sharing sensitive financial information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">1</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Create Your Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Sign up for a free account and set up your seller profile with basic information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">2</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Add Payment Methods</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect your preferred payment methods like PayPal.me, UPI, or digital wallets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">3</div>
                <div className="space-y-1">
                  <h3 className="font-medium">List Your Books</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your physical books or eBooks with descriptions, images, and pricing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">4</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Receive Payments via QR Code</h3>
                  <p className="text-sm text-muted-foreground">
                    When someone buys your book, they'll pay directly to your linked payment method via QR code.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">5</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Ship or Provide Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Once payment is confirmed, ship physical books or provide download access for eBooks.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-4 w-4 text-primary" />
              </div>
              <CardTitle>For Buyers</CardTitle>
            </div>
            <CardDescription>Purchase books securely with direct payments to sellers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">1</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Browse the Marketplace</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore our collection of physical books and eBooks from independent sellers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">2</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Select a Book</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose the book you want to purchase and proceed to checkout.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">3</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Scan QR Code to Pay</h3>
                  <p className="text-sm text-muted-foreground">
                    Scan the seller's unique QR code with your payment app to complete the purchase.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">4</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Confirm Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    After making the payment, confirm it on our platform to notify the seller.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">5</div>
                <div className="space-y-1">
                  <h3 className="font-medium">Receive Your Book</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your physical book delivered or instant access to download eBooks.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform offers unique features to ensure a secure and private book marketplace
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">QR Code Payments</h3>
                  <p className="text-sm text-muted-foreground">
                    Unique QR codes for each seller linked to their preferred payment methods for secure transactions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Privacy Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Sell without sharing sensitive financial information. Your privacy is our priority.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Multiple Payment Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Support for UPI, PayPal.me, and various digital wallets to suit your preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Physical Book Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure shipping options for physical books with tracking and delivery confirmation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Secure eBook Downloads</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant access to eBooks after payment confirmation with secure download links.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Comprehensive Listings</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed book listings with descriptions, images, and seller information for informed purchases.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
