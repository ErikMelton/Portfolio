import React from 'react'
import { Global } from '@emotion/core'

import AppLayout from './app'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Global styles={{ body: { margin: 0 } }} />
      <AppLayout>
        {children}
      </AppLayout>
    </>
  )
}