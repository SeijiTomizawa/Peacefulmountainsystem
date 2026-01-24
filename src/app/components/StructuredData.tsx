import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface StructuredDataProps {
  type: 'organization' | 'local-business' | 'faq' | 'breadcrumb' | 'review';
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const scriptId = `structured-data-${type}`;
    
    // Remove existing script if it exists
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData: any = {};

    switch (type) {
      case 'organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": language === 'jp' ? "泰山流護身術 八王子本部道場" : "TaizanRyu Hachioji Honbu Dojo",
          "alternateName": "TaizanRyu",
          "url": "https://www.taizanryu.com",
          "logo": "https://www.taizanryu.com/logo.png",
          "description": language === 'jp' 
            ? "60年以上の武道経験に基づく実践的な護身術。合気柔術、柔道、空手の技術を統合し、現代社会に適応した効果的な防御システムを学びます。"
            : "Over 60 years of martial arts experience. Learn practical self-defense combining Aikijujutsu, Judo, and Karate techniques adapted for modern society.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3010 Willow Street",
            "addressLocality": "Selden",
            "addressRegion": "NY",
            "postalCode": "11784",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-631-698-8068",
            "contactType": "customer service",
            "availableLanguage": ["English", "Japanese"]
          },
          "founder": {
            "@type": "Person",
            "name": "Joseph Miller",
            "honorificPrefix": "Soke",
            "description": language === 'jp'
              ? "60年以上の武道経験を持つ宗家"
              : "Soke with over 60 years of martial arts experience"
          },
          "sameAs": [
            "https://www.facebook.com/taizanryu",
            "https://www.youtube.com/taizanryu"
          ]
        };
        break;

      case 'local-business':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": language === 'jp' ? "泰山流護身術 八王子本部道場" : "TaizanRyu Hachioji Honbu Dojo",
          "image": "https://www.taizanryu.com/logo.png",
          "description": language === 'jp'
            ? "八王子にある伝統的な武道道場。護身術、合気柔術、指圧・整体を提供。"
            : "Traditional martial arts dojo in Hachioji offering self-defense, Aikijujutsu, and Shiatsu.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3010 Willow Street",
            "addressLocality": "Selden",
            "addressRegion": "NY",
            "postalCode": "11784",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.8691,
            "longitude": -73.0409
          },
          "telephone": "+1-631-698-8068",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Wednesday", "Friday"],
              "opens": "18:00",
              "closes": "21:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50"
          }
        };
        break;

      case 'faq':
        if (data && data.faqs) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map((faq: { question: string; answer: string }) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          };
        }
        break;

      case 'breadcrumb':
        if (data && data.breadcrumbs) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data.breadcrumbs.map((item: { name: string; url: string }, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": item.url
            }))
          };
        }
        break;

      case 'review':
        if (data && data.reviews) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": language === 'jp' ? "泰山流護身術 八王子本部道場" : "TaizanRyu Hachioji Honbu Dojo",
              "image": "https://www.taizanryu.com/logo.png",
              "description": language === 'jp'
                ? "八王子にある伝統的な武道道場。護身術、合気柔術、指圧・整体を提供。"
                : "Traditional martial arts dojo in Hachioji offering self-defense, Aikijujutsu, and Shiatsu.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3010 Willow Street",
                "addressLocality": "Selden",
                "addressRegion": "NY",
                "postalCode": "11784",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.8691,
                "longitude": -73.0409
              },
              "telephone": "+1-631-698-8068",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Wednesday", "Friday"],
                  "opens": "18:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50"
              }
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": data.reviews.ratingValue,
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": data.reviews.authorName
            },
            "datePublished": data.reviews.datePublished,
            "reviewBody": data.reviews.reviewBody
          };
        }
        break;
    }

    // Only add script if we have structured data
    if (Object.keys(structuredData).length > 0) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data, language]);

  return null;
}