"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"

interface QRCodeProps {
  value: string
  size?: number
  level?: "L" | "M" | "Q" | "H"
}

export default function QRCodeComponent({ value, size = 200, level = "M" }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: 2,
          errorCorrectionLevel: level,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        },
        (error) => {
          if (error) console.error(error)
        },
      )
    }
  }, [value, size, level])

  return <canvas ref={canvasRef} />
}
