"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HelpCircle, Mail, Phone, Clock } from "lucide-react"

export default function SupportCenter({ dictionary }: { dictionary: any }) {
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = dictionary.faq.questions.filter(
    (faq: any) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            {dictionary.faq.title}
          </CardTitle>
          <CardDescription>Find answers to commonly asked questions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Search FAQs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

          {faqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted-foreground">No FAQs found matching your search.</p>
              <Button variant="link" className="mt-2" onClick={() => setSearchTerm("")}>
                Clear search
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            {dictionary.contact.title}
          </CardTitle>
          <CardDescription>Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <div className="font-medium">Email</div>
                <a href={`mailto:${dictionary.contact.email}`} className="text-sm text-blue-600 hover:underline">
                  {dictionary.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <div className="font-medium">Phone</div>
                <a href={`tel:${dictionary.contact.phone}`} className="text-sm text-blue-600 hover:underline">
                  {dictionary.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <div className="font-medium">Hours</div>
                <div className="text-sm text-muted-foreground">{dictionary.contact.hours}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

