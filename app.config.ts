export default defineAppConfig({
  title: 'Herbal Craft',
  email: 'sales@herbalcraft.com.au',
  blog: 'https://herbalcraft.com/blog',
  description: 'Herbal Craft URL handler',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
    'login',
  ],
})
