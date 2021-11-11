import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const { site } = useStaticQuery(query)

  const {
    title,
    description,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  const imageUrl = `${siteUrl}${image}`

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="image" content={imageUrl} />

      {title && <meta property="og:title" content={title} />}

      {description && (
        <meta property="og:description" content={description} />
      )}

      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {title && <meta name="twitter:title" content={title} />}

      {description && (
        <meta name="twitter:description" content={description} />
      )}

      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
        twitterUsername
      }
    }
  }
`