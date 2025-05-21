"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Loader2, Upload } from "lucide-react"

export default function NewBookPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    type: "physical",
    pages: "",
    isbn: "",
    publishedDate: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard/books")
    }, 1500)
  }

  return (
    <div className="container px-4 md:px-6 py-6 space-y-6 max-w-4xl">
      <Link href="/dashboard/books" className="flex items-center text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to My Books
      </Link>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Add New Book</h1>
        <p className="text-muted-foreground">Fill in the details to list a new book for sale</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Book Information</CardTitle>
            <CardDescription>Provide accurate information to help buyers find your book</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Book Title *</Label>
                  <Input id="title" name="title" required value={formData.title} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author *</Label>
                  <Input id="author" name="author" required value={formData.author} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0.99"
                    required
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pages">Number of Pages *</Label>
                  <Input
                    id="pages"
                    name="pages"
                    type="number"
                    min="1"
                    required
                    value={formData.pages}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Book Type *</Label>
                <RadioGroup
                  defaultValue="physical"
                  value={formData.type}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="physical" id="physical" />
                    <Label htmlFor="physical" className="font-normal">
                      Physical Book
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ebook" id="ebook" />
                    <Label htmlFor="ebook" className="font-normal">
                      eBook
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.type === "physical" && (
                <div className="space-y-2">
                  <Label htmlFor="isbn">ISBN (Optional)</Label>
                  <Input id="isbn" name="isbn" value={formData.isbn} onChange={handleChange} />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="publishedDate">Publication Date (Optional)</Label>
                <Input
                  id="publishedDate"
                  name="publishedDate"
                  type="date"
                  value={formData.publishedDate}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Cover Image (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your cover image here, or click to browse
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    Upload Image
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Book"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
