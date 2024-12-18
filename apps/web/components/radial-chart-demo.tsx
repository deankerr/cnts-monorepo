'use client'

import { TrendingUp } from 'lucide-react'
import { RadialBar, RadialBarChart } from 'recharts'

import { api } from '@repo/backend/api'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@repo/ui/card'
import { ChartContainer } from '@repo/ui/chart'
import { useQuery } from 'convex/react'
import { cn } from '@repo/ui/utils'

const defaultChartData = [
  { visitors: 0, fill: '#8D2676' },
  { visitors: 0, fill: '#EF3430' },
  { visitors: 0, fill: '#F3B01C' },
]

export const RadialChartDemo = () => {
  const visitorsData = useQuery(api.demo.getVisitorsData)
  const chartData = defaultChartData.map((data, index) => ({ ...data, visitors: visitorsData?.[index] ?? 0 }))

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{}}
          className={cn('mx-auto aspect-square max-h-[250px]', !visitorsData && 'animate-pulse')}
        >
          <RadialBarChart data={chartData} innerRadius={40} outerRadius={100}>
            <RadialBar dataKey="visitors" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div>
      </CardFooter>
    </Card>
  )
}
