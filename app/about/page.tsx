
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About Nowsheen G. Ahmed - Digital Content Writer & Expert",
  description:
    "Learn about Nowsheen G. Ahmed, a Digital Content Writer and Technical Content Expert with international experience in content strategy, SEO, digital marketing, grant proposal writing, UX/UI design, social media content, and project management.",
  keywords: [
    "Nowsheen G. Ahmed",
    "Digital Content Writer",
    "Technical Content Writer",
    "Content Writer",
    "Grant Proposal Writing",
    "Digital Marketing",
    "SEO Optimization",
    "Social Media Content",
    "UX/UI Design",
    "Technical Content Writing",
    "E-Commerce Content",
    "WordPress",
    "Campaign Email Marketing",
    "Software User Manuals",
    "LMS Systems Documentation",
    "Content Creation",
    "Content Management",
    "Project Management",
  ],
  authors: [{ name: "Nowsheen G. Ahmed" }],
  openGraph: {
    title: "About Nowsheen G. Ahmed - Digital Content Writer & Expert",
    description:
      "Discover Nowsheen G. Ahmed's professional experience in technical content writing, grant proposal writing, digital marketing, SEO, UX/UI design, social media content, project management, and content management.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/aboutme.webp",
        width: 1200,
        height: 630,
        alt: "Nowsheen G. Ahmed - Digital Content Writer & Expert",
      },
    ],
    siteName: "Nowsheen G. Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nowsheen G. Ahmed - Digital Content Writer",
    description:
      "Learn about Nowsheen G. Ahmed's experience in technical content writing, grant proposal writing, SEO, digital marketing, UX/UI design, social media content, and project management.",
    images: ["/aboutme.webp"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about",
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
      "@type": "Person",
      name: "Nowsheen G. Ahmed",
      jobTitle: "Digital Content Writer & Expert",
      url: "https://storycup.vercel.app/about",
      description:
        "Nowsheen G. Ahmed is a Digital Content Writer and Technical Content Expert with international experience in technical content writing, grant proposal writing, digital marketing, SEO optimization, UX/UI design, social media content, project management, and content management.",
    }),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/log.png"
              alt="Nowsheen G. Ahmed"
              fill
              className="rounded-full border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Nowsheen G. Ahmed, a Digital Content Writer and Technical
            Content Expert with extensive experience working with international
            companies across Canada, USA, UK, UAE, and India. I specialize in
            content strategy, digital marketing, SEO optimization, UX/UI design,
            social media content, and project management.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Journey
          </h2>

          <div className="space-y-8">

            {/* Dynamo Bytes */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Technical Content Manager</CardTitle>
                    <p className="text-muted-foreground">
                      Dynamo Bytes, UAE - Remote • 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Created and managed WordPress-based website content aligned
                  with business branding and target audiences. Led the creation
                  and execution of social media marketing campaigns to increase
                  user engagement and visibility. Directed the development of
                  an e-commerce platform for STP maintenance, ensuring successful
                  technical testing and project execution.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Technical Content</Badge>
                  <Badge variant="secondary">WordPress</Badge>
                  <Badge variant="secondary">Social Media Marketing</Badge>
                  <Badge variant="secondary">E-Commerce</Badge>
                  <Badge variant="secondary">Technical Testing</Badge>
                  <Badge variant="secondary">Project Execution</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Smart Data Webs - Project Manager */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Project Manager</CardTitle>
                    <p className="text-muted-foreground">
                      Smart Data Webs, India - Remote • 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Managed IT projects with a focus on scope, schedule, and
                  budget optimization. Delivered high-quality UX/UI design
                  solutions and led social media marketing content strategies
                  for multiple campaigns.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">IT Projects</Badge>
                  <Badge variant="secondary">UX/UI Design</Badge>
                  <Badge variant="secondary">Budget Optimization</Badge>
                  <Badge variant="secondary">Social Media Strategy</Badge>
                  <Badge variant="secondary">Campaign Content</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Smart Data Webs - Social Media Manager */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Social Media Manager</CardTitle>
                    <p className="text-muted-foreground">
                      Smart Data Webs, India - Remote • 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Executed data-driven social media strategies, boosting brand
                  recognition and customer engagement across multiple campaigns.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Social Media Management</Badge>
                  <Badge variant="secondary">Digital Marketing</Badge>
                  <Badge variant="secondary">Content Strategy</Badge>
                  <Badge variant="secondary">Brand Recognition</Badge>
                  <Badge variant="secondary">Customer Engagement</Badge>
                </div>
              </CardContent>
            </Card>

            {/* DigitizeMedia */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Technical Content Specialist</CardTitle>
                    <p className="text-muted-foreground">
                      DigitizeMedia, Canada - Edmonton - Remote • 2022 - 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Authored 50+ grant proposals approved by the Government of
                  Canada under the CDAP initiative, generating significant
                  funding for SMEs. Delivered technical documentation and
                  content tailored to property, construction, finance, travel,
                  and other industries. Managed all content-related tasks.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Grant Proposal Writing</Badge>
                  <Badge variant="secondary">Technical Documentation</Badge>
                  <Badge variant="secondary">Content Writing</Badge>
                  <Badge variant="secondary">CDAP Grants</Badge>
                  <Badge variant="secondary">SME Content</Badge>
                  <Badge variant="secondary">SEO Content</Badge>
                </div>
              </CardContent>
            </Card>

            {/* DesignoGraphy */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Technical Content Expert</CardTitle>
                    <p className="text-muted-foreground">
                      DesignoGraphy, Canada - Alberta - Remote • 2021 - 2022
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Designed value propositions and business model canvases for
                  IT projects. Optimized website content using SEO best
                  practices, helping improve organic traffic and online
                  visibility.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Technical Content</Badge>
                  <Badge variant="secondary">Value Propositions</Badge>
                  <Badge variant="secondary">Business Model Canvases</Badge>
                  <Badge variant="secondary">SEO Optimization</Badge>
                  <Badge variant="secondary">Website Content</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Monalisa Tech Solutions */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Customer Sales Representative for IT Softwares</CardTitle>
                    <p className="text-muted-foreground">
                      Monalisa Tech Solutions, India • 08.2021 - 07.2022
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Delivered excellent customer service by resolving inquiries
                  and providing tailored solutions. Processed sales
                  transactions with accuracy and efficiency while supporting
                  customers with IT software solutions.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Customer Service</Badge>
                  <Badge variant="secondary">IT Software Sales</Badge>
                  <Badge variant="secondary">Customer Support</Badge>
                  <Badge variant="secondary">Sales Transactions</Badge>
                  <Badge variant="secondary">Client Solutions</Badge>
                </div>
              </CardContent>
            </Card>

            {/* MWA Steel & Iron Company */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Investment Coordinator</CardTitle>
                    <p className="text-muted-foreground">
                      MWA Steel & Iron Company, Pakistan - Remote • 09.2020 - 12.2021
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Designed and executed content marketing strategies for
                  UK-based clients while supporting investment coordination and
                  business communication activities.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Investment Coordination</Badge>
                  <Badge variant="secondary">Content Marketing</Badge>
                  <Badge variant="secondary">UK Clients</Badge>
                  <Badge variant="secondary">Business Communication</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Technical Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Technical Content
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Technical Content Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Grant Proposal Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Content Creation & Management</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

              </CardContent>
            </Card>

            {/* Digital Marketing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Digital Marketing & SEO
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Digital Marketing</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Optimization</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Social Media Content</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

              </CardContent>
            </Card>

            {/* Tools & Documentation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Tools & Documentation
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>WordPress</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>UX/UI Design</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Software Documentation</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Additional Skills */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            <Badge variant="secondary">Technical Content Writing</Badge>
            <Badge variant="secondary">Grant Proposal Writing</Badge>
            <Badge variant="secondary">Digital Marketing</Badge>
            <Badge variant="secondary">SEO Optimization</Badge>
            <Badge variant="secondary">Social Media Content</Badge>
            <Badge variant="secondary">UX/UI Design</Badge>
            <Badge variant="secondary">Blog Writing</Badge>
            <Badge variant="secondary">E-Commerce Product Descriptions</Badge>
            <Badge variant="secondary">Campaigns & Email Marketing</Badge>
            <Badge variant="secondary">Ebook Design & Content</Badge>
            <Badge variant="secondary">Software User Manuals</Badge>
            <Badge variant="secondary">Web/App Documentation</Badge>
            <Badge variant="secondary">LMS Systems Documentation</Badge>
            <Badge variant="secondary">WordPress Plugins</Badge>
            <Badge variant="secondary">Web Testing</Badge>
            <Badge variant="secondary">ClickUp</Badge>
            <Badge variant="secondary">Monday.com</Badge>
            <Badge variant="secondary">MailChimp</Badge>
            <Badge variant="secondary">Google Analytics</Badge>
            <Badge variant="secondary">Adobe XD</Badge>
            <Badge variant="secondary">Google Sheets</Badge>
            <Badge variant="secondary">Microsoft Word</Badge>
            <Badge variant="secondary">Microsoft PowerPoint</Badge>
            <Badge variant="secondary">Microsoft Excel</Badge>
            <Badge variant="secondary">Canva</Badge>
            <Badge variant="secondary">Figma</Badge>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MBA Finance */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>MBA - Finance</CardTitle>
                    <p className="text-muted-foreground">
                      Virtual University of Pakistan • 2012 - 2015
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed Master of Business Administration in Finance from
                  Virtual University of Pakistan.
                </p>
              </CardContent>
            </Card>

            {/* MPhil */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>M.Phil - Management Sciences</CardTitle>
                    <p className="text-muted-foreground">
                      Bahria University Karachi • 2019 - 2021
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed M.Phil in Management Sciences from Bahria
                  University Karachi.
                </p>
              </CardContent>
            </Card>

            {/* Creative Writing */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Creative Writing/Copywriting Professional Certificate</CardTitle>
                    <p className="text-muted-foreground">
                      Professional Certificate
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Professional certification in Creative Writing and
                  Copywriting.
                </p>
              </CardContent>
            </Card>

            {/* British Council */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>ICT Collaboration and Distance Learning Strategies</CardTitle>
                    <p className="text-muted-foreground">
                      British Council Certification
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed British Council certification in ICT Collaboration
                  and Distance Learning Strategies.
                </p>
              </CardContent>
            </Card>

            {/* Freelancer */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Certified Freelancer & Virtual Assistant</CardTitle>
                    <p className="text-muted-foreground">
                      Remote Work Certification
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Certified Freelancer and Virtual Assistant for Remote Work.
                </p>
              </CardContent>
            </Card>

            {/* PAFLA */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Membership of Pakistan Freelancers Association</CardTitle>
                    <p className="text-muted-foreground">
                      PAFLA
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Member of the Pakistan Freelancers Association (PAFLA).
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Beyond the Page
          </h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                I focus on creating high-quality, research-driven technical
                content that supports business growth and clear communication.
                With experience across international markets, I combine
                content strategy, SEO, digital marketing, UX/UI understanding,
                project management, and editorial expertise to deliver
                meaningful content solutions for diverse industries.
              </p>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}
