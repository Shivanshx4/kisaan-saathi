"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Eye, EyeOff, User, Tractor, MapPin, Phone } from "lucide-react"

export default function RegisterPage({
  params,
}: {
  params: { lang: string }
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    location: "",
    farmSize: "",
    crops: "",
    agreeToTerms: false
  })

  const handleSubmit = async (e: React.FormEvent, userType: 'farmer' | 'consumer') => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Registration successful! Please check your email for verification.")
      window.location.href = `/${params.lang}/login`
    }, 2000)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-wheat/30 to-light-green/30 p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8 fade-in-up">
          <h1 className="text-3xl font-bold text-navy-blue mb-2">Join Kisaan Saathi</h1>
          <p className="text-navy-blue/70">Create your account and start connecting</p>
        </div>

        <Card className="border-2 border-flag-green/20 shadow-xl card-hover">
          <CardHeader className="text-center">
            <CardTitle className="text-navy-blue">Create Account</CardTitle>
            <CardDescription>Choose your account type to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="farmer" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="farmer" className="flex items-center gap-2">
                  <Tractor className="h-4 w-4" />
                  Farmer
                </TabsTrigger>
                <TabsTrigger value="consumer" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Consumer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="farmer">
                <form onSubmit={(e) => handleSubmit(e, 'farmer')} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-name">Full Name</Label>
                      <Input
                        id="farmer-name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-email">Email</Label>
                      <Input
                        id="farmer-email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-phone">Phone Number</Label>
                      <Input
                        id="farmer-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-location">Location</Label>
                      <Input
                        id="farmer-location"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farm-size">Farm Size</Label>
                      <Select onValueChange={(value) => handleChange('farmSize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select farm size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (< 2 acres)</SelectItem>
                          <SelectItem value="medium">Medium (2-10 acres)</SelectItem>
                          <SelectItem value="large">Large (> 10 acres)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="crops">Primary Crops</Label>
                      <Input
                        id="crops"
                        placeholder="e.g., Rice, Wheat, Vegetables"
                        value={formData.crops}
                        onChange={(e) => handleChange('crops', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="farmer-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={(e) => handleChange('password', e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="farmer-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleChange('confirmPassword', e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="farmer-terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleChange('agreeToTerms', checked as boolean)}
                    />
                    <Label htmlFor="farmer-terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-flag-green hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-flag-green hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Farmer Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="consumer">
                <form onSubmit={(e) => handleSubmit(e, 'consumer')} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="consumer-name">Full Name</Label>
                      <Input
                        id="consumer-name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consumer-email">Email</Label>
                      <Input
                        id="consumer-email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="consumer-phone">Phone Number</Label>
                      <Input
                        id="consumer-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consumer-location">Location</Label>
                      <Input
                        id="consumer-location"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="consumer-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="consumer-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={(e) => handleChange('password', e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consumer-confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="consumer-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleChange('confirmPassword', e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consumer-terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleChange('agreeToTerms', checked as boolean)}
                    />
                    <Label htmlFor="consumer-terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-flag-green hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-flag-green hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full btn-secondary" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Consumer Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <div className="text-sm text-navy-blue/70">
                Already have an account?{" "}
                <Link href={`/${params.lang}/login`} className="text-flag-green hover:underline font-medium">
                  Sign in
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
  )
}