
"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,   // Usually used in buttons or links (e.g., "Learn More →")
  Download,     // For download buttons or links
  Youtube,      // For linking to YouTube profiles or videos
  Linkedin,     // For linking to LinkedIn profiles
  Mail,         // For email/contact buttons
  ExternalLink, // For external links (e.g., opens in new tab)
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const handleDownloadResume = async () => {
    const response = await fetch('/muneeb.pdf')
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'muhammad-muneeb.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit max-w-full text-left whitespace-normal">
                  Available for freelance writing projects
                </Badge>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight break-words">
                  Hi, I'm <span className="text-blue-600"> Muhammad Muneeb</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  Web Copywriter & Content Writer
                </p>

                <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                  I create engaging, SEO-focused content that connects with audiences,
                  strengthens brand voice, and supports business growth. Specializing
                  in web copy, localized content, blogs, and digital marketing.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/portfolio">
                    View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/contact">Contact Me</Link>
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  onClick={handleDownloadResume}
                  className="w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>

              <div className="flex space-x-2">
                {/* LinkedIn */}
                <Button size="icon" variant="ghost" asChild>
                  <Link
                    href="https://www.linkedin.com/in/muneeb-muhammad/"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>

                {/* Portfolio */}
                <Button size="icon" variant="ghost" asChild>
                  <Link
                    href="https://docs.google.com/document/d/14PQ7kAMdGVoDcm5ZGZwWW5NOgaAG2b28/edit#heading=h.evaened6mn0w"
                    target="_blank"
                  >
                    <span className="font-bold text-sm">P</span>
                  </Link>
                </Button>

                {/* Email */}
                <Button size="icon" variant="ghost" asChild>
                  <Link href="mailto:mohammadmuneeb596@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse" />

                <Image
                  src="/contentwriterhomepage.jpeg?height=400&width=400"
                  alt="Muhammad Muneeb"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-background shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {/* About Me Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">

            {/* Small Blue Line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-blue-600 rounded-full" />

              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              About <span className="text-blue-600">Me</span>
            </h2>

            {/* Content */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                I'm <span className="font-semibold text-foreground">Muhammad Muneeb</span>,
                a Web Copywriter and Content Writer with experience creating clear,
                engaging, and SEO-focused content for diverse industries.
              </p>

              <p>
                I specialize in website copy, SEO content strategy, on-page optimization,
                geo-targeted and localized copywriting, blog writing, competitive content
                analysis, technical writing, CMS publishing, and brand voice adaptation.
              </p>

              <p>
                My approach combines research, SEO strategy, editorial precision, and
                adaptability to create content that matches search intent, communicates
                clearly, and supports business goals.
              </p>
            </div>

            {/* Small Bottom Accent */}
            <div className="mt-6 flex gap-2">
              <div className="w-16 h-1 bg-blue-600 rounded-full" />
              <div className="w-3 h-1 bg-blue-600/40 rounded-full" />
              <div className="w-3 h-1 bg-blue-600/20 rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground">
              Skills and expertise I use to create impactful content
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
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
              "Content Writing",
              "Web Copywriting",
              "Blog Writing",
              "Digital PR",
              "Proofreading",
              "Digital Marketing",
            ].map((skill) => (
              <Card
                key={skill}
                className="p-3 sm:p-4 text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-blue font-bold text-base sm:text-lg">
                      {skill.charAt(0)}
                    </span>
                  </div>

                  <p className="font-medium text-xs sm:text-sm leading-tight break-words">
                    {skill}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}