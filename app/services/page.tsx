
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, FileText, PenLine, Search, Newspaper, MessageCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nowsheen G. Ahmed's Services - Digital Content Writing & Marketing",
  description:
    "Explore professional digital content writing, technical content, grant proposal writing, SEO optimization, social media content, UX/UI documentation, and digital marketing services by Nowsheen G. Ahmed.",
  keywords: [
    "Nowsheen G. Ahmed",
    "technical content writer",
    "digital content writer",
    "grant proposal writing",
    "digital marketing services",
    "SEO content writing",
    "social media content creation",
    "UX UI content",
    "technical documentation",
    "blog writing",
    "e-commerce product descriptions",
    "email marketing content",
    "software user manuals",
    "LMS documentation",
    "WordPress content",
    "content management",
    "content writer Pakistan",
  ],
  authors: [{ name: "Nowsheen G. Ahmed" }],
  openGraph: {
    title: "Nowsheen G. Ahmed's Services - Digital Content Writing & Marketing",
    description:
      "Professional technical content writing, grant proposal writing, SEO optimization, digital marketing, social media content, UX/UI documentation, and content management services.",
    type: "website",
    url: "https://storycup.vercel.app/services",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nowsheen G. Ahmed Digital Content Writing Services",
      },
    ],
    siteName: "Nowsheen G. Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nowsheen G. Ahmed's Services - Digital Content Writer",
    description:
      "Professional technical content writing, grant proposal writing, SEO, digital marketing, social media content, and documentation services.",
    images: ["/services-og-image.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Digital Content Writing & Marketing",
      provider: {
        "@type": "Person",
        name: "Nowsheen G. Ahmed",
        jobTitle: "Digital Content Writer & Expert",
      },
      url: "https://storycup.vercel.app/services",
      sameAs: [
        "https://www.linkedin.com/in/nowsheen-g-7b204421b",
        "https://canva.link/g90d43lnetb0cgp",
      ],
      description:
        "Nowsheen G. Ahmed provides professional technical content writing, grant proposal writing, digital marketing, SEO optimization, social media content creation, UX/UI documentation, WordPress content management, and technical documentation services.",
      areaServed: [
        "Pakistan",
        "Canada",
        "USA",
        "UK",
        "UAE",
        "India",
      ],
    }),
  },
}

const services = [
  {
    icon: FileText,
    title: "Technical Content Writing",
    description:
      "Professional, research-driven technical content created for businesses, websites, software products, and diverse industries.",
    features: [
      "Technical Research",
      "SEO-Optimized Content",
      "Industry-Specific Writing",
      "Clear & Professional Content",
    ],
    price: "Custom Quote",
  },
  {
    icon: PenLine,
    title: "Grant Proposal Writing",
    description:
      "Well-researched and professionally structured grant proposals designed to communicate business value and funding requirements.",
    features: [
      "Grant Proposal Development",
      "Business Research",
      "Professional Documentation",
      "SME Funding Content",
    ],
    price: "Custom Quote",
  },
  {
    icon: Newspaper,
    title: "Social Media & Marketing Content",
    description:
      "Strategic social media and digital marketing content designed to improve brand visibility, engagement, and audience connection.",
    features: [
      "Social Media Content",
      "Campaign Content",
      "Brand Messaging",
      "Engagement-Focused Content",
    ],
    price: "Custom Quote",
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    description:
      "SEO-focused content strategies that combine keyword research, optimization, content planning, and business goals.",
    features: [
      "SEO Optimization",
      "Content Strategy",
      "Website Content Planning",
      "Organic Growth Support",
    ],
    price: "Custom Quote",
  },
]

const packages = [
  {
    name: "Starter",
    price: "Custom Quote",
    description: "Perfect for startups and personal brands",
    features: [
      "Technical or blog content",
      "SEO keyword integration",
      "Content optimization",
      "Basic content strategy",
      "Email support",
    ],
    popular: false,
    discount: "25% OFF",
  },
  {
    name: "Professional",
    price: "Custom Quote",
    description: "Ideal for growing businesses and agencies",
    features: [
      "Multiple content pieces",
      "Website content",
      "Advanced SEO strategy",
      "Social media content",
      "Priority support",
    ],
    popular: true,
    discount: "30% OFF",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "For brands with large-scale content needs",
    features: [
      "Custom content volume",
      "Grant proposals & campaigns",
      "Full SEO & content strategy",
      "Technical documentation",
      "Dedicated content support",
    ],
    popular: false,
    discount: "0% OFF",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Digital Content Writing Services
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional technical content, grant proposals, SEO, digital
            marketing, social media content, and documentation solutions
            designed to inform, engage, and support business growth.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue" />
                      </div>

                      <div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>

                        <Badge variant="secondary">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing Packages */}

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Briefing",
                description:
                  "Understanding your business, content goals, audience, and project requirements",
              },
              {
                step: "02",
                title: "Research",
                description:
                  "Industry, audience, competitor, keyword, and topic research",
              },
              {
                step: "03",
                title: "Content Creation",
                description:
                  "Creating clear, engaging, professional, and SEO-friendly content",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Final review, editing, approval, and publishing support",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-blue-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What industries do you specialize in?",
                answer:
                  "I have experience creating content for diverse industries including healthcare, IT, travel, education, property, construction, finance, software, and e-commerce.",
              },
              {
                question: "Do you provide grant proposal writing?",
                answer:
                  "Yes. I have authored 50+ successful grant proposals approved under the Government of Canada's CDAP initiative for SMEs.",
              },
              {
                question: "Do you offer SEO content writing?",
                answer:
                  "Yes. I provide SEO-optimized website content, blogs, articles, product descriptions, digital marketing content, and content strategies.",
              },
              {
                question: "Can you create technical documentation?",
                answer:
                  "Yes. My expertise includes software user manuals, web and app feature documentation, LMS systems documentation, technical content, and other business documentation.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {faq.question}
                  </h3>

                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-blue mx-auto mb-4" />

              <h2 className="text-2xl font-bold mb-4">
                Ready to Elevate Your Content?
              </h2>

              <p className="text-muted-foreground mb-6">
                Let's discuss your content needs and create impactful,
                professional content for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a
                    href="https://wa.me/923242387403?text=Hello%20Nowsheen%2C%20I%20would%20like%20to%20discuss%20my%20content%20needs%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Free Quote
                  </a>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">
                    View Writing Samples
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
