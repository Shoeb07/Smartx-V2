import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://smartxsolutions.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SmartX Solutions — Digital Innovation & Software Agency',
    template: '%s | SmartX Solutions',
  },
  description:
    'SmartX Solutions is a full-service digital innovation agency delivering custom software development, web & mobile apps, UI/UX design, cloud solutions, and digital transformation services.',
  keywords: [
    'software development company india',
    'digital innovation agency hyderabad',
    'web app development',
    'mobile app development',
    'UI UX design',
    'cloud solutions',
    'digital transformation',
    'SmartX Solutions',
    'IT services Hyderabad',
    'custom software development',
    'Next.js development agency',
    'React development company',
  ],
  authors: [{ name: 'SmartX Solutions', url: siteUrl }],
  creator: 'SmartX Solutions',
  publisher: 'SmartX Solutions',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website', locale: 'en_US', url: siteUrl, siteName: 'SmartX Solutions',
    title: 'SmartX Solutions — Digital Innovation & Software Agency',
    description: 'We design, build, and scale digital products for ambitious businesses. Custom software, apps, and digital transformation.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SmartX Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartX Solutions — Digital Innovation & Software Agency',
    description: 'We design, build, and scale digital products for ambitious businesses.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: siteUrl },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'SmartX Solutions',
      url: siteUrl,
      description: 'SmartX Solutions is a full-service digital innovation agency delivering custom software, web & mobile applications, and digital transformation services.',
      address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'hello@smartxsolutions.in' },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'SmartX Solutions',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050508" />
      </head>
      <body className="bg-[#050508] text-white antialiased overflow-x-hidden" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
