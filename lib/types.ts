export interface Book {
  id: string
  title: string
  author: string
  description: string
  price: number
  type: "physical" | "ebook"
  coverImage?: string
  seller: string
  pages: number
  isbn?: string
  publishedDate?: string
  category?: string
}
