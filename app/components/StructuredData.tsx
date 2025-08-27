import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextServe - Veterinary Growth Solutions',
    alternateName: 'NextServe Agency',
    url: 'https://nextserve.at',
    logo: 'https://nextserve.at/logo.png',
    image: 'https://nextserve.at/og-image.jpg',
    description: 'Professional veterinary practice growth solutions including free websites, online booking systems, and revenue optimization for Vienna veterinary clinics.',
    email: 'nextserveagency@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vienna',
      addressCountry: 'Austria',
      addressRegion: 'Vienna'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Vienna, Austria'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.2082,
        longitude: 16.3738
      },
      geoRadius: 50000
    },
    sameAs: [
      'https://www.linkedin.com/company/nextserve-agency',
      'https://twitter.com/NextServeAgency'
    ]
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free Veterinary Website + Growth System',
    provider: {
      '@type': 'Organization',
      name: 'NextServe'
    },
    description: 'Complete free veterinary website with online booking system and KPI dashboard. Helps veterinary practices add €5,000+ monthly recurring revenue.',
    serviceType: 'Veterinary Practice Growth Solutions',
    areaServed: {
      '@type': 'Place',
      name: 'Vienna, Austria'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Veterinary Growth Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Professional Veterinary Website',
            description: 'Mobile-optimized, SEO-ready veterinary website worth €2,000 - completely free'
          },
          price: '0',
          priceCurrency: 'EUR'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Online Booking System',
            description: '24/7 automated appointment booking system worth €1,500 - included free'
          },
          price: '0',
          priceCurrency: 'EUR'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'KPI Dashboard',
            description: 'Performance tracking dashboard worth €800 - included free'
          },
          price: '0',
          priceCurrency: 'EUR'
        }
      ]
    },
    audience: {
      '@type': 'Audience',
      name: 'Veterinary Practices',
      description: 'Veterinarians and veterinary clinic owners in Vienna, Austria'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why would you build a €4,300 system for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We\'re confident in our work. Once you see the quality and results, you\'ll want to work with us to scale further. It\'s our way of earning your trust upfront instead of asking for it.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will you try to sell me something afterward?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Only if YOU ask. We\'ll show you optional ways to scale further, but there\'s zero pressure. Your free system works perfectly on its own. Many clinics stick with just the free version.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is this actually professional quality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We use the same team and process for our free diagnostics as our paid clients. The only difference is you\'re not paying us (yet). We can\'t afford to deliver poor quality.'
        }
      },
      {
        '@type': 'Question',
        name: 'What if I don\'t like it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Keep it anyway! It\'s yours forever, no strings attached. We\'re not going to take back your website because you don\'t want to work with us further.'
        }
      }
    ]
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nextserve.at/#business',
    name: 'NextServe - Veterinary Growth Solutions',
    image: 'https://nextserve.at/og-image.jpg',
    telephone: '+43-1-234-5678',
    email: 'nextserveagency@gmail.com',
    url: 'https://nextserve.at',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vienna',
      addressLocality: 'Vienna',
      addressRegion: 'Vienna',
      addressCountry: 'AT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.2082,
      longitude: 16.3738
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: 'Free - €2500',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47'
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}
