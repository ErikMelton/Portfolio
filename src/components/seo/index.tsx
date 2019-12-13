import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`

interface SEOProps {
  lang?: string
  title?: string
  description?: string
  uri?: string
}

export default function SEO({
  lang = 'en',
  title,
  description,
  uri,
}: SEOProps) {
  const data = useStaticQuery(query)
  const { siteMetadata } = data.site

  const metaTitle = title ? `${title} - ${siteMetadata.title}` : siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const metaUrl = `${siteMetadata.siteUrl}${uri}`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:url',
          content: metaUrl
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'twitter:card',
          content: 'summary'
        },
        {
          property: 'twitter:creator',
          content: siteMetadata.social.twitter
        },
        {
          property: 'twitter:title',
          content: metaTitle
        },
        {
          property: 'twitter:description',
          content: metaDescription
        }
      ]}
    />
  )
}