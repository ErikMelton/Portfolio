const path = require('path')

const meta = require('./meta')

const fromRoot = (...p) => path.resolve(__dirname, '..', ...p)
const fromSrc = (...p) => fromRoot('src', ...p)
const fromTemplate = (...p) => fromSrc('templates', ...p)
const fromContent = (...p) => fromRoot('content', ...p)

const plugins = {
  typescript: 'gatsby-plugin-typescript',
  resolveSrc: 'gatsby-plugin-resolve-src',
  helmet: 'gatsby-plugin-react-helmet',
  theme: 'gatsby-plugin-theme-ui',
  layout: 'gatsby-plugin-layout',
  sharp: 'gatsby-plugin-sharp',
  sharpTransformer: 'gatsby-transformer-sharp',
  netlify: 'gatsby-plugin-netlify',
  manifest: {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: meta.title,
      short_name: meta.title,
      icon: fromContent('images/logo.png'),
      start_url: '/',
    },
  },
  fonts: {
    resolve: 'gatsby-plugin-webfonts',
    options: {
      fonts: {
        google: [
          {
            family: 'Poppins',
            variants: ['300', '500'],
          },
        ],
      },
    },
  },
  images: {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: fromContent('images'),
    },
  },
  pages: {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: fromContent('pages'),
    },
  },
  pagesCreator: {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: fromContent('pages'),
    },
  },
  mdx: {
    resolve: 'gatsby-plugin-mdx',
    options: {
      defaultLayouts: {
        pages: fromTemplate('page'),
      },
    },
  },
}

module.exports = [
  plugins.typescript,
  plugins.resolveSrc,
  plugins.manifest,
  plugins.helmet,
  plugins.fonts,
  plugins.theme,
  plugins.layout,
  plugins.images,
  plugins.pages,
  plugins.pagesCreator,
  plugins.sharp,
  plugins.sharpTransformer,
  plugins.mdx,
  plugins.netlify,
]
