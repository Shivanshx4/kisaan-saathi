"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle } from "lucide-react"

export default function ReportForm({ dictionary }: { dictionary: any }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        issueType: "",
        description: "",
      })
    }, 1500)
  }

  return (
    <Card className="border-2 border-navy-blue/20 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-navy-blue">
          <AlertTriangle className="h-5 w-5" />
          {dictionary.title}
        </CardTitle>
        <CardDescription>Report issues or suspicious activities</CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="text-flag-green text-4xl mb-4">✓</div>
            <h3 className="text-lg font-medium mb-2">Thank you for your report!</h3>
            <p className="text-muted-foreground mb-4">Our team will review your report and take appropriate action.</p>
            <Button onClick={() => setIsSubmitted(false)} className="btn-primary">Submit Another Report</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">{dictionary.name}</Label>
              <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">{dictionary.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="issue-type">{dictionary.issue_type}</Label>
              <Select value={formData.issueType} onValueChange={(value) => handleChange("issueType", value)} required>
                <SelectTrigger id="issue-type">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scam">Potential Scam</SelectItem>
                  <SelectItem value="quality">Product Quality Issue</SelectItem>
                  <SelectItem value="delivery">Delivery Problem</SelectItem>
                  <SelectItem value="payment">Payment Issue</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">{dictionary.description}</Label>
              <Textarea
                id="description"
                rows={5}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : dictionary.submit}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

