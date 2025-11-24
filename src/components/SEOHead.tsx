import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  structuredData?: object;
}

const SEOHead = ({
  title = "Stories Brewery & Kitchen - Bengaluru's Greenest Rooftop Brewery",
  description = "Experience craft beers, nature-infused dining, and enchanting ambiance at Stories Brewery & Kitchen. Bengaluru's greenest rooftop brewery with 50,000+ plants across multiple locations.",
  keywords = "brewery, craft beer, rooftop dining, Bengaluru restaurants, microbrewery, BTM Layout, HSR Layout, Rajajinagar, Raja Rajeshwari Nagar, Nagarbahavi, Dubai, nature dining, fresh beer, artisan brewery",
  image = "/logos/stbc.png",
  url = "https://storiesbrewery.com",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  const canonicalUrl = `${url}${typeof window !== 'undefined' ? window.location.pathname : ''}`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Stories Brewery & Kitchen",
    "description": description,
    "url": url,
    "logo": `${url}${image}`,
    "image": `${url}${image}`,
    "telephone": "+91 98765 43210",
    "email": "hello@storiesbrewery.com",
    "priceRange": "$$",
    "cuisineType": ["Bar", "Brewery", "Indian", "Continental"],
    "servesCuisine": ["Indian", "Continental", "Bar Food"],
    "hasMenu": true,
    "acceptsReservations": true,
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
    "currenciesAccepted": "INR",
    "foundingDate": "2020",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "BTM Layout",
        "addressRegion": "Karnataka", 
        "addressCountry": "IN",
        "telephone": "+91 98765 43210"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "HSR Layout",
        "addressRegion": "Karnataka",
        "addressCountry": "IN", 
        "telephone": "+91 98765 43211"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Rajajinagar",
        "addressRegion": "Karnataka",
        "addressCountry": "IN",
        "telephone": "+91 98765 43212"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE",
        "telephone": "+91 98765 43211"
      }
    ],
    "openingHours": [
      "Mo-Th 12:00-01:00",
      "Fr-Sa 12:00-02:00", 
      "Su 12:00-01:00"
    ],
    "sameAs": [
      "https://instagram.com/storiesbrewery",
      "https://facebook.com/storiesbrewery"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Stories Brewery & Kitchen" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:site" content="@storiesbrewery" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Stories Brewery & Kitchen" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;