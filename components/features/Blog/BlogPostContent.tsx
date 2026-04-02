import Link from "next/link"
import { BlogPost } from "@/constant/blog"
import { ArrowLeft } from "lucide-react"
import { Section } from "@/components/common/Section"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="flex w-full justify-center">
      <Section className="w-full max-w-3xl px-6 py-16">
        {/* Navigation */}
        <nav className="mb-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to index
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12 space-y-6">
          <div className="flex flex-wrap gap-3">
            {post.category.map((cat) => (
              <span
                key={cat}
                className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{post.author}</span>
            <span className="opacity-30">/</span>
            <time>{post.date}</time>
          </div>
        </header>

        {/* Main Content */}
        <main className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="mb-10 text-xl leading-relaxed font-medium text-foreground/90">
            {post.excerpt}
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {post.content}
          </div>
        </main>

        <footer className="mt-20 border-t border-border pt-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Route Strategy
              </p>
              <p className="font-mono text-sm text-card-foreground/80">
                segment:{" "}
                <span className="font-bold text-foreground">[slug]</span>
              </p>
            </div>
            <div className="rounded-md border border-input bg-background px-3 py-1.5 font-mono text-[11px]">
              <span className="mr-1.5 text-muted-foreground">slug:</span>
              <span className="text-foreground">{post.slug}</span>
            </div>
          </div>
        </footer>
      </Section>
    </div>
  )
}
