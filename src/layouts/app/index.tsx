/** @jsx jsx */
import {
  jsx,
  Layout,
  Main,
  Container
} from 'theme-ui'
import ReactGA from 'react-ga'
import Header from './header'
import Footer from './footer'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  ReactGA.initialize('UA-154771150-2', {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  })
  ReactGA.pageview('/');  

  return (
    <Layout>
      <Container
        sx={{
          flex: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />
        <Main sx={{ my: 'md', flex: 'auto', display: 'flex' }}>
          {children}
        </Main>
        <Footer />
      </Container>
    </Layout>
  )
}