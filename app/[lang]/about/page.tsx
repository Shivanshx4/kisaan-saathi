import { getDictionary } from "@/lib/dictionaries"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe } from "lucide-react"
import Image from "next/image"

export default async function AboutPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  const stats = [
    { icon: Users, label: "Farmers Connected", value: "10,000+", color: "text-flag-green" },
    { icon: Globe, label: "Cities Covered", value: "50+", color: "text-saffron" },
    { icon: Target, label: "Products Listed", value: "25,000+", color: "text-navy-blue" },
    { icon: Award, label: "Success Rate", value: "95%", color: "text-flag-green" }
  ]

  const team = [
    {
      name: "Shivansh Chowdhary",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Passionate about connecting farmers with technology and creating sustainable agricultural solutions."
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Expert in AI and machine learning, leading our technical innovation in agricultural technology."
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Operations",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Former farmer turned operations expert, ensuring our platform meets real farmer needs."
    }
  ]

  return (
    <div className="container mx-auto py-10 space-y-16">
      {/* Hero Section */}
      <div className="text-center mb-16 fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-navy-blue">About Kisaan Saathi</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-saffron via-flag-white to-flag-green mx-auto mb-8"></div>
        <p className="text-xl text-navy-blue/80 max-w-4xl mx-auto leading-relaxed">
          Empowering farmers and connecting communities through technology. We're building the future of agriculture in India.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="border-2 border-flag-green/20 shadow-lg card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-blue flex items-center gap-2">
              <Target className="h-6 w-6 text-flag-green" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-navy-blue/80 leading-relaxed">
              To eliminate middlemen in agricultural trade, ensuring fair prices for farmers and fresh produce for consumers. 
              We leverage technology to create direct connections that benefit everyone in the agricultural ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-saffron/20 shadow-lg card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-blue flex items-center gap-2">
              <Globe className="h-6 w-6 text-saffron" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-navy-blue/80 leading-relaxed">
              To become India's leading agricultural marketplace, transforming rural livelihoods through digital innovation. 
              We envision a future where every farmer has access to fair markets and every consumer knows their food's origin.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-br from-light-green/20 to-wheat/20 rounded-3xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-navy-blue mb-2">{stat.value}</div>
              <div className="text-navy-blue/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-navy-blue mb-6">Our Story</h2>
          <div className="space-y-4 text-navy-blue/80 leading-relaxed">
            <p>
              Kisaan Saathi was born from a simple observation: farmers were struggling to get fair prices for their produce 
              while consumers were paying inflated prices for the same products. The middlemen were taking the largest share, 
              leaving both parties unsatisfied.
            </p>
            <p>
              Our founder, having grown up in a farming family, understood these challenges firsthand. With a background in 
              technology and a passion for agriculture, the idea of creating a direct connection platform became a mission.
            </p>
            <p>
              Today, we're proud to serve thousands of farmers and consumers across India, using cutting-edge technology 
              including AI, voice recognition, and multilingual support to make agriculture more accessible and profitable for everyone.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="Farmers working in field"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-flag-green text-white p-4 rounded-xl shadow-lg">
            <div className="text-2xl font-bold">2023</div>
            <div className="text-sm">Founded</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-2 border-flag-green/20 shadow-lg card-hover text-center">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-navy-blue">{member.name}</CardTitle>
                <Badge className="bg-saffron text-white">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-navy-blue/70 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-saffron/10 to-flag-green/10 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-flag-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-navy-blue mb-2">Trust</h3>
            <p className="text-navy-blue/70">Building transparent relationships between farmers and consumers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-navy-blue mb-2">Innovation</h3>
            <p className="text-navy-blue/70">Using cutting-edge technology to solve agricultural challenges</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-navy-blue mb-2">Sustainability</h3>
            <p className="text-navy-blue/70">Promoting sustainable farming practices and environmental responsibility</p>
          </div>
        </div>
      </div>
    </div>
  )
}