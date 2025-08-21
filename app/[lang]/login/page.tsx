"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, User, Tractor } from "lucide-react"
import { getDictionary } from "@/lib/dictionaries"

export default function LoginPage({
  params,
}: {
  params: { lang: string }
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleSubmit = async (e: React.FormEvent, userType: 'farmer' | 'consumer') => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect based on user type
      window.location.href = `/${params.lang}/${userType === 'farmer' ? 'farmers' : 'consumers'}`
    }, 1500)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-wheat/30 to-light-green/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 fade-in-up">
          <h1 className="text-3xl font-bold text-navy-blue mb-2">Welcome Back</h1>
          <p className="text-navy-blue/70">Sign in to your Kisaan Saathi account</p>
        </div>

        <Card className="border-2 border-flag-green/20 shadow-xl card-hover">
          <CardHeader className="text-center">
            <CardTitle className="text-navy-blue">Login</CardTitle>
            <CardDescription>Choose your account type to continue</CardDescription>
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
                  <div className="space-y-2">
                    <Label htmlFor="farmer-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="farmer-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
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
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="farmer-remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleChange('rememberMe', checked as boolean)}
                    />
                    <Label htmlFor="farmer-remember" className="text-sm">Remember me</Label>
                  </div>
                  <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in as Farmer"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="consumer">
                <form onSubmit={(e) => handleSubmit(e, 'consumer')} className="space-y-4">
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
                  <div className="space-y-2">
                    <Label htmlFor="consumer-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="consumer-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
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
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consumer-remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleChange('rememberMe', checked as boolean)}
                    />
                    <Label htmlFor="consumer-remember" className="text-sm">Remember me</Label>
                  </div>
                  <Button type="submit" className="w-full btn-secondary" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in as Consumer"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center space-y-2">
              <Link href="#" className="text-sm text-flag-green hover:underline">
                Forgot your password?
              </Link>
              <div className="text-sm text-navy-blue/70">
                Don't have an account?{" "}
                <Link href={`/${params.lang}/register`} className="text-flag-green hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}