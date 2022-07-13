/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ["images.unsplash.com", "pyscript.net", "img.freepik.com", "www.jwst.nasa.gov"],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false,
  }
}
