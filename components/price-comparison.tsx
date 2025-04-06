import { Card, CardContent } from "@/components/ui/card"

export default function PriceComparison({ dictionary }: { dictionary: any }) {
  return (
    <section className="container py-12 bg-light-green/50 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-900">{dictionary.title}</h2>
        <p className="mt-4 text-lg text-dark-green max-w-2xl mx-auto">{dictionary.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-medium text-red-600">{dictionary.traditional.title}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>{dictionary.traditional.farmerPrice}</span>
                <span className="font-medium">₹20/kg</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>{dictionary.traditional.middleman1}</span>
                <span className="font-medium">+₹10/kg</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>{dictionary.traditional.middleman2}</span>
                <span className="font-medium">+₹15/kg</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>{dictionary.traditional.retailer}</span>
                <span className="font-medium">+₹15/kg</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold">{dictionary.traditional.consumerPrice}</span>
                <span className="text-lg font-bold">₹60/kg</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-red-600">
                <span className="font-medium">{dictionary.traditional.farmerShare}</span>
                <span className="font-medium">33%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dark-green bg-light-green/30">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-medium text-dark-green">{dictionary.kisaanSaathi.title}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>{dictionary.kisaanSaathi.farmerPrice}</span>
                <span className="font-medium">₹35/kg</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>{dictionary.kisaanSaathi.platformFee}</span>
                <span className="font-medium">+₹5/kg</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold">{dictionary.kisaanSaathi.consumerPrice}</span>
                <span className="text-lg font-bold">₹40/kg</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-dark-green">
                <span className="font-medium">{dictionary.kisaanSaathi.farmerShare}</span>
                <span className="font-medium">87.5%</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-dark-green">
                <span className="font-medium">{dictionary.kisaanSaathi.savings}</span>
                <span className="font-medium">33%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

