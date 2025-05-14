export function generateArticleSchema(article: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "Gamezenth",
      url: "https://gamezenth.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Gamezenth",
      logo: {
        "@type": "ImageObject",
        url: "https://gamezenth.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gamezenth.com/blog/${article.slug}`,
    },
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gamezenth",
    url: "https://gamezenth.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gamezenth.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gamezenth",
    url: "https://gamezenth.com",
    logo: "https://gamezenth.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "customer service",
      email: "contacto@gamezenth.com",
      availableLanguage: "Spanish",
    },
  }
}
