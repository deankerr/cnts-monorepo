import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/card'
import { Blocks, DatabaseZap, PackageCheck, PencilRuler } from 'lucide-react'
import Link from 'next/link'

const resources = [
  {
    title: 'Convex',
    href: 'https://convex.dev/',
    icon: DatabaseZap,
    links: [
      {
        title: 'Docs',
        href: 'https://docs.convex.dev/home',
      },
      {
        title: 'Stack',
        href: 'https://stack.convex.dev/',
      },
      {
        title: 'convex-helpers',
        href: 'https://github.com/get-convex/convex-helpers?tab=readme-ov-file#convex-helpers',
      },
    ],
  },
  {
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: PencilRuler,
    links: [
      {
        title: 'Docs',
        href: 'https://tailwindcss.com/docs',
      },
      {
        title: 'Colors',
        href: 'https://ui.shadcn.com/colors',
      },
    ],
  },
  {
    title: 'shadcn/ui',
    href: 'https://ui.shadcn.com/',
    icon: Blocks,
    links: [
      {
        title: 'Docs',
        href: 'https://ui.shadcn.com/docs',
      },
      {
        title: 'Blocks',
        href: 'https://ui.shadcn.com/blocks',
      },
      {
        title: 'Themes',
        href: 'https://ui.shadcn.com/themes',
      },
    ],
  },
  {
    title: 'Turborepo',
    href: 'https://turbo.build/',
    icon: PackageCheck,
    links: [
      {
        title: 'Docs',
        href: 'https://turbo.build/repo/docs',
      },
    ],
  },
]

export const ResourcesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resources</CardTitle>
        <CardDescription>Useful resources for building with this repo</CardDescription>
      </CardHeader>
      <CardContent className="divide-y">
        {resources.map((data) => (
          <div key={data.title} className="flex flex-wrap items-center gap-2 py-3 first:pt-0">
            <data.icon className="h-4 w-4" />
            <Link href={data.href} className="flex-1 underline-offset-4 hover:underline" target="_blank">
              {data.title}
            </Link>

            <div className="flex divide-x">
              {data.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-2 text-sm font-medium underline-offset-4 hover:underline"
                  target="_blank"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
