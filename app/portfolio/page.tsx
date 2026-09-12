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
  title: " Muhammad Muneeb Portfolio - SEO Content & Copywriting",
  description:
    "Explore  Muhammad Muneeb professional portfolio featuring SEO blogs, website content, copywriting, and company profile content.",
  keywords: [
    " Muhammad Muneeb portfolio",
    "SEO content writer portfolio",
    "SEO content writing",
    "blog writing portfolio",
    "copywriting portfolio",
    "company profile writing",
    "SEO blogs",
    "content writing",
    "copywriting",
    "keyword research",
    "content strategy",
    "professional content writer",
    "social media content",
    "online marketing",
    "content writer Hyderabad Pakistan",
  ],
  authors: [{ name: " Muhammad Muneeb" }],
  openGraph: {
    title: " Muhammad Muneeb Portfolio - Content Writing & SEO",
    description:
      "View  Muhammad Muneeb professional portfolio of SEO blogs, copywriting, website content, and company profile writing.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: " Muhammad Muneeb Content Writing Portfolio",
      },
    ],
    siteName: " Muhammad Muneeb Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: " Muhammad Muneeb Portfolio - Content Writing & SEO",
    description:
      "Discover  Muhammad Muneeb portfolio showcasing SEO blogs, website content, copywriting, and company profile content.",
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
      name: " Muhammad Muneeb Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: " Muhammad Muneeb",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        " Muhammad Muneeb portfolio showcases professional SEO content writing, website content, blogs, copywriting, and company profile content.",
    }),
  },
}

const DRIVE_URL =
  "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt"

const projects = [
  {
    id: 1,
    title: "CCS - Professional Website Content",
    description:
      "Professional website content created for a business-focused website, covering services, company information, and SEO-focused web copy.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: ["Website Content", "SEO Writing", "Business Writing"],
    liveUrl: "https://ccs-ca.net/",
    featured: true,
  },

  {
    id: 2,
    title: "Thirst IV Society",
    description:
      "Website content developed for a professional service brand with engaging copy designed to communicate the brand's services clearly.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: ["Website Copy", "SEO Content", "Brand Writing"],
    liveUrl: "https://thirstivsociety.com/",
    featured: true,
  },

  {
    id: 3,
    title: "OuterTainment",
    description:
      "Creative and engaging website content written for an entertainment-focused brand, combining readable copy with SEO-friendly structure.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
    category: "Copywriting",
    technologies: ["Creative Writing", "Website Copy", "SEO"],
    liveUrl: "https://outertainment.com/",
    featured: true,
  },

  {
    id: 4,
    title: "Alpha Movers Co.",
    description:
      "SEO-focused website content created for a moving and relocation company, including service-oriented copy designed for local search visibility.",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: ["Local SEO", "Service Pages", "Website Content"],
    liveUrl: "https://alphamoversco.com/",
    featured: true,
  },

  {
    id: 5,
    title: "Apex Roof Repairs",
    description:
      "Service-focused content written for a roofing business, with clear explanations of roofing solutions and SEO-friendly service page structure.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1000&q=85",
    category: "Copywriting",
    technologies: ["SEO Writing", "Service Content", "Local SEO"],
    liveUrl: "https://apexroofrepairs.com/",
    featured: true,
  },

  {
    id: 6,
    title: "Aphrodite Nails",
    description:
      "Beauty and salon-focused website content created to showcase services, build brand appeal, and provide an engaging customer experience.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85",
    category: "Copywriting",
    technologies: ["Beauty Content", "Website Copy", "SEO Writing"],
    liveUrl: "https://myaiostaging.com/aphrodite-nails/",
    featured: false,
  },

  {
    id: 7,
    title: "ESW Electric",
    description:
      "Professional electrical service website content written to explain technical services in a clear, trustworthy, and search-friendly manner.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: ["Technical Writing", "SEO Content", "Service Pages"],
    liveUrl: "https://eswelectric.com/",
    featured: false,
  },

  {
    id: 8,
    title: "Brian's Auto Detailing",
    description:
      "Automotive service content developed for an auto detailing business, highlighting services and creating persuasive local business copy.",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=85",
    category: "Copywriting",
    technologies: ["Local SEO", "Automotive Content", "Website Copy"],
    liveUrl: "https://briansautodetailingnc.com/",
    featured: false,
  },

  {
    id: 9,
    title: "The Tankless Guys",
    description:
      "SEO-focused service content created for a tankless water heating company, explaining services while targeting relevant local search terms.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=85",
    category: "Blogs",
    technologies: ["SEO Writing", "Home Services", "Content Strategy"],
    liveUrl: "https://thetanklessguys.com/",
    featured: false,
  },

  {
    id: 10,
    title: "European Stucco Design",
    description:
      "Professional service content created for a stucco and exterior design company, combining informative copy with strong SEO structure.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    category: "Company Profiles",
    technologies: ["Construction Content", "SEO Writing", "Service Pages"],
    liveUrl: "https://europeanstuccodesign.com/services/",
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
            A collection of my professional writing work including SEO blogs,
            copywriting, and company profile content created for businesses
            and brands.
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
                    href="https://wa.me/923004784788?text=Hello%20 Muhammad Muneeb%2C%20I%20would%20like%20to%20discuss%20a%20content%20project%20with%20you"
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