"use server"

import crypto from "crypto"

// Generate a unique payment ID for tracking
export async function generatePaymentId(sellerId: string, bookId: string): Promise<string> {
  const timestamp = Date.now().toString()
  const randomString = crypto.randomBytes(8).toString("hex")
  return `pay_${sellerId.substring(0, 6)}_${bookId.substring(0, 6)}_${randomString}`
}

// Generate payment data for QR code
export async function generatePaymentData(
  sellerId: string,
  bookId: string,
  amount: number,
  paymentMethod: string,
): Promise<string> {
  const paymentId = await generatePaymentId(sellerId, bookId)

  // Create payment data based on payment method
  let paymentData = ""

  switch (paymentMethod) {
    case "paypal":
      // PayPal.me link format
      paymentData = `https://paypal.me/${sellerId}/${amount}?reference=${paymentId}`
      break
    case "upi":
      // UPI payment link format
      paymentData = `upi://pay?pa=${sellerId}@upi&pn=Pagely&am=${amount}&tr=${paymentId}&cu=INR`
      break
    case "crypto":
      // Crypto payment link format (simplified)
      paymentData = `ethereum:${sellerId}?amount=${amount}&memo=${paymentId}`
      break
    default:
      // Generic payment link
      paymentData = `https://pagely.example/pay/${paymentId}?seller=${sellerId}&amount=${amount}&bookId=${bookId}`
  }

  return paymentData
}

// Encrypt payment data for additional security
export async function encryptPaymentData(paymentData: string, secretKey: string): Promise<string> {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(secretKey, "hex"), iv)

  let encrypted = cipher.update(paymentData, "utf8", "hex")
  encrypted += cipher.final("hex")

  return `${iv.toString("hex")}:${encrypted}`
}

// Decrypt payment data
export async function decryptPaymentData(encryptedData: string, secretKey: string): Promise<string> {
  const [ivHex, encryptedText] = encryptedData.split(":")
  const iv = Buffer.from(ivHex, "hex")
  const decipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(secretKey, "hex"), iv)

  let decrypted = decipher.update(encryptedText, "hex", "utf8")
  decrypted += decipher.final("utf8")

  return decrypted
}
