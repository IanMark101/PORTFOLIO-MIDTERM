import Link from "next/link"
import { BLOG_POSTS } from "@/constant/blog"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import { Section } from "@/components/common/Section"
import { SectionHeader } from "@/components/common/SectionHeader"
import { ArrowRight, BookOpen, Layers, Zap } from "lucide-react"
import { BadgeHeading } from "@/components/common/Badge"

export function BlogLandingContent() {
  return (
    <Section className="py-20">
      <div className="mb-20 flex flex-col items-center text-center">
        <BadgeHeading text="APP ROUTER DIVE" />
        <SectionHeader title="Mastering Nextjs Routing" />
        <p className="max-w-2xl text-base text-muted-foreground">
          A technical guide to understanding Dynamic Segments, Catch-all routes,
          and everything in between.
        </p>
      </div>

      <div className="mb-24 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        <Card className="group relative border-border bg-transparent md:col-span-2 md:row-span-2">
          <CardHeader>
            <Zap className="mb-2 h-6 w-6 text-foreground" />
            <div className="mb-2 w-fit font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              [slug]
            </div>
            <CardTitle className="text-xl">Dynamic Segments</CardTitle>
            <CardDescription>
              Exact match for single segments. Used for individual blog posts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded border bg-muted/30 p-3 font-mono text-xs">
              /blog/getting-started
            </div>
            <Link
              href="/blog/getting-started-with-nextjs"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              View Implementation <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card className="border-border bg-transparent md:col-span-2">
          <CardHeader className="pb-2">
            <Layers className="mb-1 h-5 w-5 text-muted-foreground" />
            <div className="flex items-center gap-3">
              <div className="font-mono text-[10px] text-muted-foreground">
                [...slug]
              </div>
              <CardTitle className="text-base">Catch-all</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-xs text-muted-foreground">
              Captures all subsequent segments into an array.
            </p>
            <code className="block rounded bg-muted/50 p-2 font-mono text-[10px]">
              /blog/tech/react/hooks
            </code>
          </CardContent>
        </Card>

        <Card className="border-border bg-transparent md:col-span-2">
          <CardHeader className="pb-2">
            <BookOpen className="mb-1 h-5 w-5 text-muted-foreground" />
            <div className="flex items-center gap-3">
              <div className="font-mono text-[10px] text-muted-foreground">
                [[...slug]]
              </div>
              <CardTitle className="text-base">Optional Catch-all</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-xs text-muted-foreground">
              Includes the base route without parameters.
            </p>
            <code className="block rounded bg-muted/50 p-2 font-mono text-[10px]">
              /blog (matches even if empty)
            </code>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-10">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Latest Articles
            </h2>
            <p className="text-sm text-muted-foreground">
              Insights from our engineering team.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden text-xs font-medium tracking-widest text-muted-foreground uppercase hover:text-foreground md:block"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="flex h-full flex-col space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted/20 transition-colors group-hover:bg-muted/50">
                  <div className="flex h-full items-center justify-center text-muted-foreground/30">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                      {post.category[0]}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                      {post.category[0]}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg leading-tight font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-bold tracking-wider uppercase opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    Read <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
