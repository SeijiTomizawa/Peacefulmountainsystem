import { useEffect } from 'react';
import { logoImage } from '../assets/images';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEOHead({
  title = '泰山流護身術 八王子本部道場 | Taizan-Ryu Hachioji Honbu',
  description = '60年以上の武道経験に基づく実践的な護身術。合気柔術、柔道、空手の技術を統合し、現代社会に適応した効果的な防御システムを学びます。',
  keywords = '護身術,逮捕術,合気柔術,指圧,整体,八王子,武道,Taizan-Ryu,Self-Defense,Shiatsu',
  ogImage = '',
  canonicalUrl = '',
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update favicon
    const updateFavicon = () => {
      // Remove existing favicon links
      const existingLinks = document.querySelectorAll('link[rel*="icon"]');
      existingLinks.forEach(link => link.remove());

      // Add new favicon
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = logoImage;
      document.head.appendChild(link);

      // Add apple-touch-icon for iOS
      const appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      appleLink.href = logoImage;
      document.head.appendChild(appleLink);
    };

    updateFavicon();

    // Preconnect to Google Fonts for faster loading
    const addPreconnect = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    };

    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com');

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description, true);
    updateMetaTag('keywords', keywords, true);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=5', true);
    updateMetaTag('theme-color', '#6B1F23', true);

    // Open Graph meta tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', 'website');
    if (ogImage) {
      updateMetaTag('og:image', ogImage);
    } else {
      // Use logo as default OG image
      updateMetaTag('og:image', logoImage);
    }
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl);
    }

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage, true);
    } else {
      // Use logo as default Twitter image
      updateMetaTag('twitter:image', logoImage, true);
    }

    // Update canonical URL if provided
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        document.head.appendChild(linkElement);
      }
      
      linkElement.href = canonicalUrl;
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
}