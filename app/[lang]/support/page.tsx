import { getDictionary } from "@/lib/dictionaries"
import SupportCenter from "@/components/support-center"
import ReportForm from "@/components/report-form"

export default async function SupportPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-12 fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy-blue">{dict.support.title}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-saffron via-flag-white to-flag-green mx-auto mb-6"></div>
        <p className="text-xl text-navy-blue/80 max-w-2xl mx-auto">{dict.support.subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <SupportCenter dictionary={dict.support} />
        <ReportForm dictionary={dict.support.reportForm} />
      </div>
    </div>
  )
}

