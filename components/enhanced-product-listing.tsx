"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Filter, ShoppingCart, Heart, Star, MapPin, User, Truck } from "lucide-react"
import Image from "next/image"

const productImages = [
  "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
]

export default function EnhancedProductListing({ dictionary }: { dictionary: any }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: "Ramesh Patel",
      location: "Nashik, Maharashtra",
      price: 40,
      originalPrice: 55,
      unit: "kg",
      category: "Vegetables",
      image: productImages[0],
      rating: 4.5,
      reviews: 23,
      inStock: true,
      organic: true,
      freshness: "Harvested Today",
      deliveryTime: "2-3 days"
    },
    {
      id: 2,
      name: "Fresh Wheat",
      farmer: "Suresh Singh",
      location: "Amritsar, Punjab",
      price: 30,
      originalPrice: 38,
      unit: "kg",
      category: "Grains",
      image: productImages[1],
      rating: 4.2,
      reviews: 45,
      inStock: true,
      organic: false,
      freshness: "This Week",
      deliveryTime: "3-4 days"
    },
    {
      id: 3,
      name: "Alphonso Mangoes",
      farmer: "Dinesh Patil",
      location: "Ratnagiri, Maharashtra",
      price: 120,
      originalPrice: 150,
      unit: "dozen",
      category: "Fruits",
      image: productImages[2],
      rating: 4.8,
      reviews: 67,
      inStock: true,
      organic: true,
      freshness: "Harvested Yesterday",
      deliveryTime: "1-2 days"
    },
    {
      id: 4,
      name: "Organic Rice",
      farmer: "Venkatesh Reddy",
      location: "Warangal, Telangana",
      price: 60,
      originalPrice: 75,
      unit: "kg",
      category: "Grains",
      image: productImages[3],
      rating: 4.3,
      reviews: 34,
      inStock: true,
      organic: true,
      freshness: "This Month",
      deliveryTime: "4-5 days"
    },
    {
      id: 5,
      name: "Fresh Apples",
      farmer: "Prakash Sharma",
      location: "Shimla, Himachal Pradesh",
      price: 80,
      originalPrice: 95,
      unit: "kg",
      category: "Fruits",
      image: productImages[4],
      rating: 4.6,
      reviews: 56,
      inStock: true,
      organic: false,
      freshness: "This Week",
      deliveryTime: "3-4 days"
    },
    {
      id: 6,
      name: "Organic Potatoes",
      farmer: "Rajesh Kumar",
      location: "Agra, Uttar Pradesh",
      price: 25,
      originalPrice: 32,
      unit: "kg",
      category: "Vegetables",
      image: productImages[5],
      rating: 4.1,
      reviews: 28,
      inStock: false,
      organic: true,
      freshness: "This Week",
      deliveryTime: "2-3 days"
    },
  ])

  const [priceRange, setPriceRange] = useState([0, 150])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [showOnlyOrganic, setShowOnlyOrganic] = useState(false)
  const [showOnlyInStock, setShowOnlyInStock] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [cart, setCart] = useState<number[]>([])

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId])
    // Show success animation or notification
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

      // Filter by organic
      if (showOnlyOrganic && !product.organic) {
        return false
      }

      // Filter by stock
      if (showOnlyInStock && !product.inStock) {
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
        case "newest":
          return b.id - a.id
        default:
          return 0
      }
    })

  return (
    <div className="grid lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <Card className="border-2 border-flag-green/20 shadow-lg sticky top-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-navy-blue">
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
                className="transition-all duration-300 focus:border-flag-green"
              />
            </div>

            <div className="space-y-2">
              <Label>Price Range (₹)</Label>
              <div className="pt-4">
                <Slider 
                  defaultValue={[0, 150]} 
                  max={150} 
                  step={5} 
                  value={priceRange} 
                  onValueChange={setPriceRange}
                  className="[&_[role=slider]]:bg-flag-green [&_[role=slider]]:border-flag-green"
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Categories</Label>
              <div className="space-y-2">
                {["Vegetables", "Fruits", "Grains", "Dairy"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.toLowerCase()}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                      className="data-[state=checked]:bg-flag-green data-[state=checked]:border-flag-green"
                    />
                    <label
                      htmlFor={category.toLowerCase()}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Special Filters</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="organic"
                    checked={showOnlyOrganic}
                    onCheckedChange={setShowOnlyOrganic}
                    className="data-[state=checked]:bg-flag-green data-[state=checked]:border-flag-green"
                  />
                  <label htmlFor="organic" className="text-sm font-medium cursor-pointer">
                    Organic Only
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="instock"
                    checked={showOnlyInStock}
                    onCheckedChange={setShowOnlyInStock}
                    className="data-[state=checked]:bg-flag-green data-[state=checked]:border-flag-green"
                  />
                  <label htmlFor="instock" className="text-sm font-medium cursor-pointer">
                    In Stock Only
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="focus:border-flag-green">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              className="w-full hover:bg-flag-green/10 hover:border-flag-green transition-all duration-300"
              onClick={() => {
                setPriceRange([0, 150])
                setSelectedCategories([])
                setSearchTerm("")
                setSortBy("featured")
                setShowOnlyOrganic(false)
                setShowOnlyInStock(false)
              }}
            >
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-3">
        <div className="mb-6 flex justify-between items-center">
          <p className="text-navy-blue/70">
            Showing {filteredProducts.length} of {products.length} products
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-navy-blue/70">Cart:</span>
            <Badge variant="secondary" className="bg-flag-green text-white">
              {cart.length} items
            </Badge>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className={`overflow-hidden card-hover border-2 border-transparent hover:border-flag-green/30 transition-all duration-300 ${!product.inStock ? 'opacity-75' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-square relative group">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.organic && (
                      <Badge className="bg-flag-green text-white text-xs">
                        Organic
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="destructive" className="text-xs">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white transition-all duration-300 ${
                      favorites.includes(product.id) ? 'text-red-500' : 'text-gray-500'
                    }`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                  </Button>
                  <div className="absolute bottom-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-medium">
                    {product.freshness}
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-navy-blue line-clamp-1">{product.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                      <span className="text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>by {product.farmer}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{product.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Truck className="h-3 w-3" />
                      <span>Delivery: {product.deliveryTime}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-navy-blue">
                        ₹{product.price}/{product.unit}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <Badge variant="secondary" className="bg-saffron/20 text-saffron">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    className={`w-full flex items-center gap-2 transition-all duration-300 ${
                      product.inStock 
                        ? 'btn-primary hover:shadow-lg' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                    onClick={() => product.inStock && addToCart(product.id)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-navy-blue mb-2">No products found</h3>
              <p className="text-navy-blue/60 mb-4">Try adjusting your filters or search term</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setPriceRange([0, 150])
                  setSelectedCategories([])
                  setSearchTerm("")
                  setShowOnlyOrganic(false)
                  setShowOnlyInStock(false)
                }}
                className="hover:bg-flag-green/10 hover:border-flag-green"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}