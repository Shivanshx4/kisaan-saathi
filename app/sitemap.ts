import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kisaan-saathi.vercel.app"

  // List of supported locales
  const locales = ["en", "hi", "mr", "ta"]

  // Common routes
  const routes = ["", "/farmers", "/consumers", "/support"]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate entries for each route in each locale
  routes.forEach((route) => {
    const entry: MetadataRoute.Sitemap[0] = {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {},
      },
    }

    // Add alternates for each locale
    locales.forEach((locale) => {
      if (entry.alternates?.languages) {
        entry.alternates.languages[locale] = `${baseUrl}/${locale}${route}`
      }
    })

    sitemap.push(entry)
  })

  return sitemap
}

