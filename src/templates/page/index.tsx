/** @jsx jsx */
import React from 'react'
import ReactGA from 'react-ga'
import { jsx, Styled } from 'theme-ui'
import { TemplateProps } from '../../types/gatsby'
import SEO from '../../components/seo'

export default function PageTemplate({
  uri,
  pageContext,
  children
}: TemplateProps<{ title?: string; description?: string }>) {
  const { title, description } = pageContext.frontmatter

  return (
    <React.Fragment>
      <SEO title={title} description={description} uri={uri} />
      
      <div
        sx={{
          alignSelf: 'center',
          margin: '0 auto',
          maxWidth: 560,
          textAlign: 'center'
        }}
      >
        <Styled.root>
          {children}
        </Styled.root>
      </div>
    </React.Fragment>
  )
}
