import { HelloConvex } from '@/components/hello-convex'
import { NextDemo } from '@/components/next-demo'
import { RadialChartDemo } from '@/components/radial-chart-demo'
import { ResourcesCard } from '@/components/resources-card'

export default function Home() {
  return (
    <div className="dark:bg-background grid min-h-dvh place-content-center bg-yellow-50/20 p-6">
      <div className="flex max-w-6xl flex-wrap justify-center gap-6">
        <NextDemo />
        <ResourcesCard />
        <HelloConvex />
        <RadialChartDemo />
      </div>
    </div>
  )
}
