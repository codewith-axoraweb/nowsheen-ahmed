import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Nowsheen- Best Content Writer in Hyderabad, Pakistan",
  description:
    "Contact Nowsheenfor top content writing services in Hyderabad, Pakistan, SEO content, and copywriting via WhatsApp or email.",
  keywords: [
    "content writer Karachi contact number",
    "content writer Karachi contact number WhatsApp",
    "best content writer Karachi contact number",
    "best content writing services",
    "content writing services in Hyderabad, Pakistan",
    "article writing services in Hyderabad, Pakistan",
    "content writing agency",
    "best SEO content writer in Hyderabad, Pakistan",
    "freelance content writer",
    "SEO copywriting",
    "blog writing services",
    "professional content writing services",
    "content writing in Dubai",
    "best copywriter in USA",
    "freelance copywriter Australia",
    "real estate content writer",
    "marketing content writer",
    "web content writer",
    "content writer rates per word",
    "freelance content writer near me",
  ],
  authors: [{ name: "Nowsheen" }],
  openGraph: {
    title: "Contact Nowsheen- Best Content Writer in Hyderabad, Pakistan",
    description:
      "Reach Nowsheenfor expert content writing services, SEO content, and copywriting in Hyderabad, Pakistan via WhatsApp or email.",
    type: "website",
    url: "https://yourwebsite.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Nowsheenfor Content Writing Services",
      },
    ],
    siteName: "NowsheenPortfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nowsheen- Content Writing Services",
    description:
      "Get in touch with Nowsheenfor SEO content, blog writing, and copywriting services in Hyderabad, Pakistan, USA, and Dubai.",
    images: ["/contact-og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com/contact",
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
      name: "Nowsheen",
      jobTitle: "Content Writer & SEO Copywriter",
      url: "https://yourwebsite.com/contact",
      sameAs: [
        "https://www.linkedin.com/in/Nowsheen",
        "https://twitter.com/Nowsheen",
        "https://wa.me/yourwhatsappnumber",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "yourphonenumber",
          contactType: "Customer Service",
          areaServed: ["Hyderabad, Pakistan", "Karachi", "USA", "Dubai", "Australia", "UK"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          url: "https://wa.me/yourwhatsappnumber",
          contactOption: "WhatsApp",
          areaServed: ["Hyderabad, Pakistan", "Karachi"],
        },
      ],
      description:
        "Contact Nowsheen, a top content writer in Hyderabad, Pakistan, for professional content writing services, including SEO content, blog writing, and copywriting, via WhatsApp or email.",
    }),
  },
}
