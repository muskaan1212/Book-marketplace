"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { QrCode, Plus, Trash2, Edit, Check } from "lucide-react"

interface PaymentMethod {
  id: string
  type: "paypal" | "upi" | "crypto" | "other"
  identifier: string
  isDefault: boolean
}

export default function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "paypal",
      identifier: "johndoe",
      isDefault: true,
    },
    {
      id: "2",
      type: "upi",
      identifier: "johndoe@upi",
      isDefault: false,
    },
  ])

  const [isAdding, setIsAdding] = useState(false)
  const [newMethod, setNewMethod] = useState<Omit<PaymentMethod, "id">>({
    type: "paypal",
    identifier: "",
    isDefault: false,
  })

  const handleAddMethod = () => {
    if (!newMethod.identifier) return

    const newId = Date.now().toString()

    // If this is the first payment method or marked as default, update other methods
    let updatedMethods = [...paymentMethods]
    if (newMethod.isDefault) {
      updatedMethods = updatedMethods.map((method) => ({
        ...method,
        isDefault: false,
      }))
    }

    setPaymentMethods([
      ...updatedMethods,
      {
        id: newId,
        ...newMethod,
      },
    ])

    // Reset form
    setNewMethod({
      type: "paypal",
      identifier: "",
      isDefault: false,
    })
    setIsAdding(false)
  }

  const handleRemoveMethod = (id: string) => {
    const updatedMethods = paymentMethods.filter((method) => method.id !== id)

    // If we removed the default method and there are other methods, make the first one default
    if (paymentMethods.find((m) => m.id === id)?.isDefault && updatedMethods.length > 0) {
      updatedMethods[0].isDefault = true
    }

    setPaymentMethods(updatedMethods)
  }

  const handleSetDefault = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
  }

  const getMethodLabel = (type: string) => {
    switch (type) {
      case "paypal":
        return "PayPal.me"
      case "upi":
        return "UPI ID"
      case "crypto":
        return "Ethereum Address"
      default:
        return "Other"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Payment Methods</h2>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Method
          </Button>
        )}
      </div>

      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>Add Payment Method</CardTitle>
            <CardDescription>Add a new payment method to receive payments from buyers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Payment Method Type</Label>
              <RadioGroup
                value={newMethod.type}
                onValueChange={(value) => setNewMethod({ ...newMethod, type: value as any })}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="font-normal">
                    PayPal.me
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="font-normal">
                    UPI ID
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="crypto" id="crypto" />
                  <Label htmlFor="crypto" className="font-normal">
                    Ethereum Address
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-normal">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="identifier">
                {newMethod.type === "paypal" && "PayPal.me Username"}
                {newMethod.type === "upi" && "UPI ID"}
                {newMethod.type === "crypto" && "Ethereum Address"}
                {newMethod.type === "other" && "Payment Identifier"}
              </Label>
              <Input
                id="identifier"
                placeholder={
                  newMethod.type === "paypal"
                    ? "yourusername"
                    : newMethod.type === "upi"
                      ? "yourname@upi"
                      : newMethod.type === "crypto"
                        ? "0x..."
                        : "Payment identifier"
                }
                value={newMethod.identifier}
                onChange={(e) => setNewMethod({ ...newMethod, identifier: e.target.value })}
              />
              {newMethod.type === "paypal" && (
                <p className="text-xs text-muted-foreground">
                  Your PayPal.me link will be: paypal.me/{newMethod.identifier}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isDefault"
                checked={newMethod.isDefault}
                onChange={(e) => setNewMethod({ ...newMethod, isDefault: e.target.checked })}
                className="rounded border-gray-300"
              />
              <Label htmlFor="isDefault" className="font-normal text-sm">
                Set as default payment method
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddMethod}>Add Payment Method</Button>
          </CardFooter>
        </Card>
      )}

      <div className="space-y-4">
        {paymentMethods.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No payment methods added yet</p>
          </div>
        ) : (
          paymentMethods.map((method) => (
            <Card key={method.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <QrCode className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{getMethodLabel(method.type)}</p>
                      <p className="text-sm text-muted-foreground">
                        {method.type === "paypal" ? `paypal.me/${method.identifier}` : method.identifier}
                      </p>
                    </div>
                    {method.isDefault && <Badge className="ml-2 bg-primary/10 text-primary border-none">Default</Badge>}
                  </div>
                  <div className="flex items-center gap-2">
                    {!method.isDefault && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSetDefault(method.id)}
                        title="Set as default"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" title="Edit">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveMethod(method.id)} title="Remove">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
