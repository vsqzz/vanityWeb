import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.Vanityﾒ𝟶.cc/',
      lastModified: new Date(),
      priority: 1,
    },
    {
        url: 'https://www.Vanityﾒ𝟶.cc/key',
        lastModified: new Date(),
        priority: 0.8,
    },
    {
        url: 'https://www.Vanityﾒ𝟶.cc/shop',
        lastModified: new Date(),
        priority: 0.7,
    },
    {
        url: 'https://www.Vanityﾒ𝟶.cc/tos',
        lastModified: new Date(),
        priority: 0.5,
    }
  ]
}