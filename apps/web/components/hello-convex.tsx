'use client'

import { useQuery } from 'convex/react'
import { api } from '@repo/backend/api'
import { Skeleton } from '@repo/ui/skeleton'
import { cn } from '@repo/ui/utils'

import { Button } from '@repo/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@repo/ui/card'
import { ThemeMenu } from '@repo/ui/components/theme-menu'

import { Separator } from '@repo/ui/separator'

export const HelloConvex = () => {
  const message = useQuery(api.demo.helloWorld)

  return (
    <Card className="w-full max-w-96">
      <CardHeader>
        <CardTitle>Next.js + shadcn/ui + Convex Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className={cn(message ? 'bg-secondary animate-none' : 'text-transparent')}>
          <div className="py-2 text-center">{message ? message : '...'}</div>
        </Skeleton>
      </CardContent>

      <CardFooter className="justify-between">
        <ThemeMenu />
        <Separator orientation="vertical" className="h-8" />
        <Button variant="secondary">Button 1</Button>
        <Button>Button 2</Button>
      </CardFooter>
    </Card>
  )
}
