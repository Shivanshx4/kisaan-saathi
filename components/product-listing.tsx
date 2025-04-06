"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function ProductListing({ dictionary }: { dictionary: any }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: "Ramesh Patel",
      location: "Nashik, Maharashtra",
      price: 40,
      unit: "kg",
      category: "Vegetables",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Fresh Wheat",
      farmer: "Suresh Singh",
      location: "Amritsar, Punjab",
      price: 30,
      unit: "kg",
      category: "Grains",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Alphonso Mangoes",
      farmer: "Dinesh Patil",
      location: "Ratnagiri, Maharashtra",
      price: 120,
      unit: "dozen",
      category: "Fruits",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Organic Rice",
      farmer: "Venkatesh Reddy",
      location: "Warangal, Telangana",
      price: 60,
      unit: "kg",
      category: "Grains",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
    },
    {
      id: 5,
      name: "Fresh Apples",
      farmer: "Prakash Sharma",
      location: "Shimla, Himachal Pradesh",
      price: 80,
      unit: "kg",
      category: "Fruits",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Organic Potatoes",
      farmer: "Rajesh Kumar",
      location: "Agra, Uttar Pradesh",
      price: 25,
      unit: "kg",
      category: "Vegetables",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.1,
    },
  ])

  const [priceRange, setPriceRange] = useState([0, 150])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const filteredProducts = products
    .filter((product) => {
      // Filter by price range
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      // Filter by category
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }

      // Filter by search term
      if (
        searchTerm &&
        !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !product.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Search</Label>
              <Input
                placeholder="Search products or farmers"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Price Range (₹)</Label>
              <div className="pt-4">
                <Slider defaultValue={[0, 150]} max={150} step={5} value={priceRange} onValueChange={setPriceRange} />
                <div className="flex justify-between mt-2 text-sm">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Categories</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vegetables"
                    checked={selectedCategories.includes("Vegetables")}
                    onCheckedChange={() => handleCategoryChange("Vegetables")}
                  />
                  <label
                    htmlFor="vegetables"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Vegetables
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="fruits"
                    checked={selectedCategories.includes("Fruits")}
                    onCheckedChange={() => handleCategoryChange("Fruits")}
                  />
                  <label
                    htmlFor="fruits"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Fruits
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="grains"
                    checked={selectedCategories.includes("Grains")}
                    onCheckedChange={() => handleCategoryChange("Grains")}
                  />
                  <label
                    htmlFor="grains"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Grains & Pulses
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dairy"
                    checked={selectedCategories.includes("Dairy")}
                    onCheckedChange={() => handleCategoryChange("Dairy")}
                  />
                  <label
                    htmlFor="dairy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Dairy Products
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setPriceRange([0, 150])
                setSelectedCategories([])
                setSearchTerm("")
                setSortBy("featured")
              }}
            >
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-3">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    <div>by {product.farmer}</div>
                    <div>{product.location}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                      ₹{product.price}/{product.unit}
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="text-4xl mb-4">😕</div>
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

