import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nowsheen G. Ahmed Portfolio - Technical Content & Digital Content",
  description:
    "Explore Nowsheen G. Ahmed's professional portfolio featuring technical content, healthcare, IT education, travel, digital marketing, software, AI automation, and business website content.",
  keywords: [
    "Nowsheen G. Ahmed portfolio",
    "technical content writer portfolio",
    "digital content writer portfolio",
    "grant proposal writer",
    "technical content writing",
    "SEO content writing",
    "website content writing",
    "digital marketing content",
    "social media content",
    "IT content writer",
    "healthcare content writer",
    "travel content writer",
    "technical documentation",
    "content management",
    "professional content writer Pakistan",
  ],
  authors: [{ name: "Nowsheen G. Ahmed" }],
  openGraph: {
    title: "Nowsheen G. Ahmed Portfolio - Technical Content & Digital Content",
    description:
      "View Nowsheen G. Ahmed's professional content portfolio featuring technical writing, website content, SEO content, digital marketing, healthcare, IT, travel, and software-related projects.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "Nowsheen G. Ahmed Content Writing Portfolio",
      },
    ],
    siteName: "Nowsheen G. Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nowsheen G. Ahmed Portfolio - Technical Content & SEO",
    description:
      "Discover Nowsheen G. Ahmed's portfolio of technical content, website content, SEO writing, digital marketing, and professional documentation.",
    images: ["/worldwideartical.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio",
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
      "@type": "CreativeWork",
      name: "Nowsheen G. Ahmed Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "Nowsheen G. Ahmed",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Nowsheen G. Ahmed's portfolio showcases technical content writing, website content, SEO content, digital marketing content, social media content, technical documentation, and professional business writing.",
    }),
  },
}

const projects = [
  {
    id: 1,
    title: "HealthHive - Healthcare Content",
    description:
      "Professional healthcare website content for a digital care coordination platform focused on connecting patients, families, caregivers, and healthcare providers through a more accessible and connected care experience.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: [
      "Healthcare Content",
      "Technical Writing",
      "Website Content",
    ],
    liveUrl: "https://health-hive.org",
    featured: true,
  },

  {
    id: 2,
    title: "CICADAS IT Academy - IT & Cybersecurity Content",
    description:
      "Content created for an online IT academy covering professional technology education, cybersecurity awareness, risk management, IT compliance auditing, and career-focused learning programs.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: [
      "IT Content",
      "Cybersecurity",
      "Educational Content",
    ],
    liveUrl: "https://cicadasitacademy.com",
    featured: true,
  },

  {
    id: 3,
    title: "Snydex Travel - Travel & Study Abroad",
    description:
      "Website content for an international travel and education consultancy combining study-abroad opportunities, student visa services, academic support, IELTS preparation, educational scholarships, and customized travel experiences.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: [
      "Travel Content",
      "Study Abroad",
      "Website Copy",
    ],
    liveUrl: "https://www.snydextravel.com",
    featured: true,
  },

  {
    id: 4,
    title: "Dynamo Bytes - Digital Solutions",
    description:
      "Professional website and digital content for a technology and digital solutions company offering software development, web and mobile applications, AI and SaaS solutions, e-commerce, digital marketing, and content management services.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: [
      "Technical Content",
      "Digital Marketing",
      "Technology Writing",
    ],
    liveUrl: "https://dynamobytes.com",
    featured: true,
  },

  {
    id: 5,
    title: "STP - E-Commerce & Maintenance Platform",
    description:
      "Content associated with an e-commerce and maintenance-focused digital platform developed within the Dynamo Bytes ecosystem, supporting business operations and online service delivery.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    category: "Copywriting",
    technologies: [
      "E-Commerce Content",
      "Technical Content",
      "Product Content",
    ],
    liveUrl: "https://stp.dynamobytes.com",
    featured: true,
  },

  {
    id: 6,
    title: "Dynamo Bytes Psychologist - Healthcare Content",
    description:
      "Professional content project focused on psychology and healthcare services, designed to communicate specialist services clearly while creating an approachable digital experience for potential clients.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
    category: "Copywriting",
    technologies: [
      "Healthcare Content",
      "Website Copy",
      "Professional Writing",
    ],
    liveUrl: "https://psychologist.dynamobytes.com",
    featured: false,
  },

  {
    id: 7,
    title: "Nosh Infotech - Digital Technology Solutions",
    description:
      "Content for a technology and digital solutions company providing strategy, technology consulting, campaign strategy, content creation, social media, UI/UX design, web development, mobile applications, and custom software solutions.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: [
      "Technology Content",
      "Digital Marketing",
      "Business Writing",
    ],
    liveUrl: "https://noshinfotech.com",
    featured: false,
  },

  {
    id: 8,
    title: "Inartia - Digital Products & Software",
    description:
      "Professional content for a creative digital agency focused on software solutions, web and mobile applications, SEO, UI/UX design, AI, cloud technologies, e-commerce, cybersecurity, and digital product development.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: [
      "Technology Writing",
      "SEO Content",
      "Digital Products",
    ],
    liveUrl: "https://inartia.io",
    featured: false,
  },

  {
    id: 9,
    title: "Nifty Code - Website & E-Commerce Content",
    description:
      "Content project for a web development company specializing in custom websites, web applications, e-commerce solutions, UI/UX design, website maintenance, and digital solutions for small businesses.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    category: "Copywriting",
    technologies: [
      "Website Content",
      "E-Commerce",
      "SEO Writing",
    ],
    liveUrl: "https://niftycode.tech",
    featured: false,
  },

  {
    id: 10,
    title: "FlowVeo - AI & Automation Content",
    description:
      "Content for an AI and automation services platform focused on software integration, process automation, AI integration, data strategy, document automation, and no-code/low-code digital solutions.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=85",
    category: "Blogs",
    technologies: [
      "AI Content",
      "Automation",
      "Technical Writing",
    ],
    liveUrl: "https://flowveo.com",
    featured: false,
  },

  {
    id: 11,
    title: "DigitizeMedia - Digital Marketing & Government Funding",
    description:
      "Professional content for a Canadian digital marketing and digital transformation company covering SEO, social media, web design, branding, analytics, e-commerce, automation, AI consulting, and government funding programs.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: [
      "Digital Marketing",
      "SEO Content",
      "Government Funding",
    ],
    liveUrl: "https://digitizemedia.ca",
    featured: false,
  },
]

export default function PortfolioPage() {
  const categories = [
    "All",
    "Blogs",
    "Copywriting",
    "Company Profiles",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My Portfolio
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my professional content work across healthcare,
            IT, education, travel, digital marketing, technology, AI,
            e-commerce, and business-focused industries.
          </p>
        </section>

        {/* Project Categories */}
        <Tabs defaultValue="All" className="mb-12">

          {/* Responsive Tabs */}
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto h-auto gap-1 p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-sm sm:text-base whitespace-nowrap px-2 sm:px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects
                  .filter(
                    (project) =>
                      category === "All" ||
                      project.category === category
                  )
                  .map((project) => (

                    <Card
                      key={project.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >

                      <div className="relative h-48">

                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />

                        {project.featured && (
                          <Badge className="absolute top-4 left-4">
                            Featured
                          </Badge>
                        )}

                      </div>

                      <CardHeader>

                        <div className="flex items-center justify-between">

                          <Badge variant="secondary">
                            {project.category}
                          </Badge>

                        </div>

                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>

                      </CardHeader>

                      <CardContent>

                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">

                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}

                        </div>

                        <div className="flex gap-2">

                          <Button
                            size="sm"
                            asChild
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Work
                            </Link>
                          </Button>

                        </div>

                      </CardContent>

                    </Card>

                  ))}

              </div>
            </TabsContent>
          ))}

        </Tabs>

        {/* Call to Action */}
        <section className="text-center py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">

              <h2 className="text-2xl font-bold mb-4">
                Interested in Working Together?
              </h2>

              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and meaningful
                content projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Button size="lg" asChild>
                  <a
                    href="https://wa.me/923242387403?text=Hello%20Nowsheen%2C%20I%20would%20like%20to%20discuss%20a%20content%20project%20with%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Me
                  </a>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    View Services
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