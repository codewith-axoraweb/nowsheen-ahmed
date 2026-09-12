import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Muhammad Muneeb- Best Content Writer in Hyderabad, Pakistan",
  description:
    "Contact Muhammad Muneebfor top content writing services in Hyderabad, Pakistan, SEO content, and copywriting via WhatsApp or email.",
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
  authors: [{ name: "Muhammad Muneeb" }],
  openGraph: {
    title: "Contact Muhammad Muneeb- Best Content Writer in Hyderabad, Pakistan",
    description:
      "Reach Muhammad Muneebfor expert content writing services, SEO content, and copywriting in Hyderabad, Pakistan via WhatsApp or email.",
    type: "website",
    url: "https://yourwebsite.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Muhammad Muneebfor Content Writing Services",
      },
    ],
    siteName: "Muhammad MuneebPortfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Muhammad Muneeb- Content Writing Services",
    description:
      "Get in touch with Muhammad Muneebfor SEO content, blog writing, and copywriting services in Hyderabad, Pakistan, USA, and Dubai.",
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
      name: "Muhammad Muneeb",
      jobTitle: "Content Writer & SEO Copywriter",
      url: "https://yourwebsite.com/contact",
      sameAs: [
        "https://www.linkedin.com/in/Muhammad Muneeb",
        "https://twitter.com/Muhammad Muneeb",
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
        "Contact Muhammad Muneeb, a top content writer in Hyderabad, Pakistan, for professional content writing services, including SEO content, blog writing, and copywriting, via WhatsApp or email.",
    }),
  },
}
