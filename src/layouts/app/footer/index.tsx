/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Footer } from 'theme-ui'
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope, FaGit } from 'react-icons/fa'

const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          github
          linkedin
          email
        }
      }
    }
  }
`

export default function AppFooter() {
  const data = useStaticQuery(query)
  const { twitter, github, linkedin, email } = data.site.siteMetadata.social

  const links = [
    {
      url: `https://twitter.com/${twitter}`,
      icon: <FaTwitter />
    },
    {
      url: `https://github.com/${github}`,
      icon: <FaGithub />
    },
    {
      url: `https://linkedin.com/in/${linkedin}`,
      icon: <FaLinkedinIn />
    },
    {
      url: `mailto:${email}`,
      icon: <FaEnvelope />
    }
  ]

  return (
    <Footer
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {links.map(({ url, icon }) => (
        <a
          key={url}
          href={url}
          sx={{
            mx: ['md', '6.25vw', 'lg'],
            fontSize: [23, '3vw', 30],
            color: 'muted',
            transition: 'all 0.25s ease',
            '&:hover': {
              color: 'accent',
              transform: 'scale(1.5)'
            }
          }}
        >
          {icon}
        </a>
      ))}
    </Footer>
  )
}