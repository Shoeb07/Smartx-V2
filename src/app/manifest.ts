import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SmartX Solutions — Digital Innovation Agency',
    short_name: 'SmartX',
    description: 'We design, build, and scale digital products for ambitious businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050508',
    theme_color: '#6c63ff',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
