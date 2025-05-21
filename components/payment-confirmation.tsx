"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Upload } from "lucide-react"
import { verifyPayment } from "@/lib/payment-verification"

interface PaymentConfirmationProps {
  bookId: string
  sellerId: string
  amount: number
  onSuccess: () => void
  onCancel: () => void
}

export default function PaymentConfirmation({
  bookId,
  sellerId,
  amount,
  onSuccess,
  onCancel,
}: PaymentConfirmationProps) {
  const [isVerifying, setIsVerifying] = useState(false)
  const [paymentProof, setPaymentProof] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleVerify = async () => {
    if (!paymentProof) {
      setError("Please provide payment proof or transaction ID")
      return
    }

    setIsVerifying(true)
    setError(null)

    try {
      const result = await verifyPayment(paymentProof, amount, sellerId, bookId)

      if (result.success) {
        onSuccess()
      } else {
        setError(result.message || "Payment verification failed")
      }
    } catch (err) {
      setError("An error occurred during verification")
      console.error(err)
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Confirm Your Payment</h3>
          <p className="text-sm text-muted-foreground">Please provide proof of your payment to complete the purchase</p>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="paymentProof">Transaction ID or Reference</Label>
            <Input
              id="paymentProof"
              placeholder="Enter transaction ID or reference"
              value={paymentProof}
              onChange={(e) => setPaymentProof(e.target.value)}
            />
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">- OR -</p>
          </div>

          <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center gap-2">
            <Upload className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Upload screenshot of payment confirmation</p>
            <Button type="button" variant="outline" size="sm">
              Upload Image
            </Button>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Button onClick={handleVerify} disabled={isVerifying}>
            {isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify Payment"
            )}
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
