import { Card, CardContent } from "@/components/ui/card"

export default function PriceComparison({ dictionary }: { dictionary: any }) {
  return (
    <section className="container py-20">
      <div className="bg-gradient-to-br from-light-green/30 to-wheat/30 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">{dictionary.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron via-flag-white to-flag-green mx-auto mb-6"></div>
          <p className="mt-4 text-xl text-navy-blue/80 max-w-3xl mx-auto leading-relaxed">{dictionary.subtitle}</p>
        </div>
      </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="slide-in-left card-hover border-2 border-red-200 bg-red-50/50">
            <CardContent className="pt-8">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-red-600 mb-2">{dictionary.traditional.title}</h3>
              <div className="w-16 h-1 bg-red-400 mx-auto"></div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex justify-between items-center border-b-2 border-red-200 pb-3">
                <span>{dictionary.traditional.farmerPrice}</span>
                <span className="font-bold text-lg">₹20/kg</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-red-200 pb-3">
                <span>{dictionary.traditional.middleman1}</span>
                <span className="font-bold text-lg text-red-500">+₹10/kg</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-red-200 pb-3">
                <span>{dictionary.traditional.middleman2}</span>
                <span className="font-bold text-lg text-red-500">+₹15/kg</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-red-200 pb-3">
                <span>{dictionary.traditional.retailer}</span>
                <span className="font-bold text-lg text-red-500">+₹15/kg</span>
              </div>
              <div className="flex justify-between items-center pt-4 bg-red-100 p-4 rounded-lg">
                <span className="text-xl font-bold">{dictionary.traditional.consumerPrice}</span>
                <span className="text-2xl font-bold text-red-600">₹60/kg</span>
              </div>
              <div className="flex justify-between items-center pt-4 bg-red-200 p-4 rounded-lg">
                <span className="font-bold text-red-700">{dictionary.traditional.farmerShare}</span>
                <span className="font-bold text-xl text-red-700">33%</span>
              </div>
            </div>
          </CardContent>
        </Card>

          <Card className="slide-in-right card-hover border-2 border-flag-green bg-flag-green/5">
            <CardContent className="pt-8">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-flag-green mb-2">{dictionary.kisaanSaathi.title}</h3>
              <div className="w-16 h-1 bg-flag-green mx-auto"></div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex justify-between items-center border-b-2 border-flag-green/30 pb-3">
                <span>{dictionary.kisaanSaathi.farmerPrice}</span>
                <span className="font-bold text-lg text-flag-green">₹35/kg</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-flag-green/30 pb-3">
                <span>{dictionary.kisaanSaathi.platformFee}</span>
                <span className="font-bold text-lg">+₹5/kg</span>
              </div>
              <div className="flex justify-between items-center pt-4 bg-flag-green/10 p-4 rounded-lg">
                <span className="text-xl font-bold">{dictionary.kisaanSaathi.consumerPrice}</span>
                <span className="text-2xl font-bold text-flag-green">₹40/kg</span>
              </div>
              <div className="flex justify-between items-center pt-2 bg-flag-green/20 p-4 rounded-lg">
                <span className="font-bold text-flag-green">{dictionary.kisaanSaathi.farmerShare}</span>
                <span className="font-bold text-xl text-flag-green">87.5%</span>
              </div>
              <div className="flex justify-between items-center pt-2 bg-saffron/20 p-4 rounded-lg">
                <span className="font-bold text-saffron">{dictionary.kisaanSaathi.savings}</span>
                <span className="font-bold text-xl text-saffron">33%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  )
}

