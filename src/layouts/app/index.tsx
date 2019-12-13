/** @jsx jsx */
import {
  jsx,
  Layout,
  Main,
  Container
} from 'theme-ui'

import Header from './header'
import Footer from './footer'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
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