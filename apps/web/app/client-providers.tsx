'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string, {
  verbose: true,
})

export function ClientProviders({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}
