"use client"

import { ethers } from "ethers"

// Simple interface for our Web3 service
export interface Web3Service {
  connectWallet: () => Promise<string | null>
  isConnected: () => Promise<boolean>
  getCurrentAddress: () => Promise<string | null>
  verifyPayment: (txHash: string, amount: number, recipient: string) => Promise<boolean>
  generatePaymentQRCode: (seller: string, amount: number, bookId: string) => string
}

// Implementation of our Web3 service
export const createWeb3Service = (): Web3Service => {
  // Check if window is defined (client-side)
  const isClient = typeof window !== "undefined"

  // Get Ethereum provider if available
  const getProvider = () => {
    if (!isClient) return null

    if (window.ethereum) {
      return new ethers.BrowserProvider(window.ethereum)
    }

    return null
  }

  return {
    // Connect to wallet and return address
    connectWallet: async (): Promise<string | null> => {
      try {
        const provider = getProvider()
        if (!provider) throw new Error("No Ethereum provider found")

        const accounts = await provider.send("eth_requestAccounts", [])
        return accounts[0] || null
      } catch (error) {
        console.error("Error connecting wallet:", error)
        return null
      }
    },

    // Check if wallet is connected
    isConnected: async (): Promise<boolean> => {
      try {
        const provider = getProvider()
        if (!provider) return false

        const accounts = await provider.send("eth_accounts", [])
        return accounts.length > 0
      } catch (error) {
        console.error("Error checking connection:", error)
        return false
      }
    },

    // Get current connected address
    getCurrentAddress: async (): Promise<string | null> => {
      try {
        const provider = getProvider()
        if (!provider) return null

        const accounts = await provider.send("eth_accounts", [])
        return accounts[0] || null
      } catch (error) {
        console.error("Error getting address:", error)
        return null
      }
    },

    // Verify a payment transaction
    verifyPayment: async (txHash: string, amount: number, recipient: string): Promise<boolean> => {
      try {
        const provider = getProvider()
        if (!provider) throw new Error("No Ethereum provider found")

        // Get transaction details
        const tx = await provider.getTransaction(txHash)
        if (!tx) throw new Error("Transaction not found")

        // Wait for transaction to be mined
        const receipt = await tx.wait()
        if (!receipt) throw new Error("Transaction failed")

        // Verify recipient and amount
        const txRecipient = tx.to?.toLowerCase()
        const txValue = Number.parseFloat(ethers.formatEther(tx.value))

        return txRecipient === recipient.toLowerCase() && txValue >= amount && receipt.status === 1
      } catch (error) {
        console.error("Error verifying payment:", error)
        return false
      }
    },

    // Generate a payment QR code URL
    generatePaymentQRCode: (seller: string, amount: number, bookId: string): string => {
      // Create a payment URL (this could be a deep link to a wallet app or a payment gateway)
      // For demonstration, we're using a simple URL format
      const paymentUrl = `bookbazaar://pay?seller=${encodeURIComponent(seller)}&amount=${amount}&bookId=${bookId}`

      // In a real application, you would generate an actual QR code image or use a QR code service
      return paymentUrl
    },
  }
}

// Export a singleton instance
export const web3Service = createWeb3Service()
