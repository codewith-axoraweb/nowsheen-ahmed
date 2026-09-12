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
  title: "About Muhammad Muneeb - Web Copywriter & Content Writer",
  description:
    "Learn about Muhammad Muneeb, a Web Copywriter and Content Writer specializing in SEO content strategy, on-page optimization, geo-targeted copywriting, localized content, competitive content analysis, technical writing, and digital PR.",
  keywords: [
    "Muhammad Muneeb",
    "Web Copywriter",
    "Content Writer",
    "SEO Content Strategy",
    "On-Page Optimization",
    "Geo-Targeted Copywriting",
    "Localized Copywriting",
    "Competitive Content Analysis",
    "Technical Writing",
    "CMS Publishing",
    "Brand Voice Adaptation",
    "Editorial Precision",
    "Client-Centric Research",
    "Blog Writing",
    "Website Copywriting",
    "Digital PR",
    "Proofreading",
    "Digital Marketing",
  ],
  authors: [{ name: "Muhammad Muneeb" }],
  openGraph: {
    title: "About Muhammad Muneeb - Web Copywriter & Content Writer",
    description:
      "Discover Muhammad Muneeb's professional experience in web copywriting, SEO content strategy, localized copywriting, technical writing, CMS publishing, and digital PR.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/aboutme.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Muneeb - Web Copywriter and Content Writer",
      },
    ],
    siteName: "Muhammad Muneeb Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad Muneeb - Web Copywriter",
    description:
      "Learn about Muhammad Muneeb's experience in web copywriting, SEO content strategy, localized copywriting, technical writing, and digital PR.",
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
      name: "Muhammad Muneeb",
      jobTitle: "Web Copywriter & Content Writer",
      url: "https://storycup.vercel.app/about",
      description:
        "Muhammad Muneeb is a Web Copywriter and Content Writer with experience in SEO content strategy, website copywriting, localized content, competitive content analysis, technical writing, CMS publishing, and digital PR.",
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
              src="/about1.png"
              alt="Muhammad Muneeb"
              fill
              className="rounded-full border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Muhammad Muneeb, a Web Copywriter and Content Writer with
            professional experience in SEO content strategy, website
            copywriting, localized content, competitive content analysis,
            technical writing, CMS publishing, and digital PR.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Journey
          </h2>

          <div className="space-y-8">

            {/* XpertDigi */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Web Copywriter</CardTitle>
                    <p className="text-muted-foreground">
                      XpertDigi, LLC, Lahore • June 2023 - Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Writing comprehensive website copies, adapting tone and
                  brand voice for diverse B2B and B2C niches. Developing
                  geo-targeted landing pages and localized service content,
                  researching and drafting blog articles, conducting
                  structural edits and proofreading, integrating target
                  keywords naturally, and auditing existing content according
                  to search intent and client needs.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Website Copywriting</Badge>
                  <Badge variant="secondary">Brand Voice Adaptation</Badge>
                  <Badge variant="secondary">Geo-Targeted Content</Badge>
                  <Badge variant="secondary">Localized Copywriting</Badge>
                  <Badge variant="secondary">Blog Writing</Badge>
                  <Badge variant="secondary">Keyword Integration</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 7 Sky Marketing */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      7 Sky Marketing, Lahore • September 2022 - June 2023
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Performed keyword research to identify high-value search
                  queries and wrote insight-driven blog articles matching user
                  search intent. Managed end-to-end publishing through
                  WordPress, including metadata, heading hierarchies and
                  internal linking. Also authored social media captions and
                  proofread written deliverables before publication.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Keyword Research</Badge>
                  <Badge variant="secondary">Blog Writing</Badge>
                  <Badge variant="secondary">WordPress</Badge>
                  <Badge variant="secondary">On-Page SEO</Badge>
                  <Badge variant="secondary">Social Media Captions</Badge>
                  <Badge variant="secondary">Proofreading</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Digital Guru */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Content Writer & PR Support Specialist</CardTitle>
                    <p className="text-muted-foreground">
                      Digital Guru, Lahore • May 2020 - May 2022
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Authored SEO-driven blog articles for the agency's primary
                  website to support internal content marketing and educate
                  visitors on digital PR services. Facilitated client
                  communications, resolved prospect inquiries, managed support
                  tickets through email and live chat, and executed targeted
                  digital PR campaigns across various media outlets.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Blog Writing</Badge>
                  <Badge variant="secondary">Digital PR</Badge>
                  <Badge variant="secondary">Client Communication</Badge>
                  <Badge variant="secondary">Email Support</Badge>
                  <Badge variant="secondary">Live Chat</Badge>
                  <Badge variant="secondary">PR Campaigns</Badge>
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

            {/* SEO & Writing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  SEO & Content Writing
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Content Strategy</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>On-Page Optimization</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Technical Writing</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            {/* Copywriting & Research */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Copywriting & Research
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Geo-Targeted Copywriting</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Competitive Content Analysis</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Client-Centric Research</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            {/* Editorial & CMS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Editorial & CMS
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>CMS & Publishing</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Brand Voice Adaptation</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Editorial Precision</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Additional Skills */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            <Badge variant="secondary">Localized Copywriting</Badge>
            <Badge variant="secondary">Blog Writing</Badge>
            <Badge variant="secondary">Website Copywriting</Badge>
            <Badge variant="secondary">Proofreading</Badge>
            <Badge variant="secondary">Self-Editing</Badge>
            <Badge variant="secondary">Digital PR</Badge>
            <Badge variant="secondary">Brand Voice Adaptation</Badge>
            <Badge variant="secondary">Time Management</Badge>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MBA */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Masters of Business Administration</CardTitle>
                    <p className="text-muted-foreground">
                      FAST-NUCES, Lahore • 2026 - Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Currently pursuing a Masters of Business Administration at
                  FAST-NUCES, Lahore.
                </p>
              </CardContent>
            </Card>

            {/* BS Chemical Engineering */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>BS Chemical Engineering</CardTitle>
                    <p className="text-muted-foreground">
                      Sharif College of Engineering Technology, Lahore • 2017 - 2021
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed BS Chemical Engineering. Final year project:
                  "Production of 50 Tons Per Day of BTX from the Fluidized
                  Catalytic Cracking of Biomass." Also designed a Sieve Plate
                  Distillation Column.
                </p>
              </CardContent>
            </Card>

            {/* LinkedIn Learning */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Master Digital Marketing by LinkedIn Learning Path</CardTitle>
                    <p className="text-muted-foreground">
                      Certificate
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Topics included Digital Marketing Foundations, Social Media
                  Marketing Foundations, Social Media Marketing Strategy,
                  TikTok and Instagram Reels, Facebook Marketing, LinkedIn
                  Marketing, SEO Keyword Strategy, SEO Content Writing, and
                  Augmented Reality Marketing.
                </p>
              </CardContent>
            </Card>

            {/* Digital Garage */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Fundamentals of Digital Marketing</CardTitle>
                    <p className="text-muted-foreground">
                      Digital Garage • Certificate
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed the Fundamentals of Digital Marketing certificate
                  from Digital Garage.
                </p>
              </CardContent>
            </Card>

            {/* DigiSkills */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Digital Marketing</CardTitle>
                    <p className="text-muted-foreground">
                      Digi Skills • Certificate
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed the Digital Marketing certificate from Digi Skills.
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
                I focus on creating clear, engaging, and research-driven
                content that matches audience needs and search intent. My work
                combines SEO strategy, editorial precision, brand voice
                adaptation, client-centric research, and digital PR to support
                effective communication and business goals.
              </p>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}