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
      <h1 className="text-3xl font-bold mb-6">{dict.support.title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <SupportCenter dictionary={dict.support} />
        <ReportForm dictionary={dict.support.reportForm} />
      </div>
    </div>
  )
}

