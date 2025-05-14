import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import Script from "next/script"
import { generateArticleSchema } from "@/lib/schema"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no existe",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Gamezenth`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  const schemaData = generateArticleSchema(post)

  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>{post.category}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>

              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <div className="mt-12">
                <Button variant="outline" asChild>
                  <Link href="/blog" className="inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al blog
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                {relatedPosts.length > 0 && (
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Artículos relacionados</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="flex gap-3">
                          <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                            <Image
                              src={relatedPost.coverImage || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 mb-1">
                              <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                                {relatedPost.title}
                              </Link>
                            </h4>
                            <time className="text-xs text-muted-foreground" dateTime={relatedPost.date}>
                              {formatDate(relatedPost.date)}
                            </time>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Categorías</h3>
                  <div className="space-y-2">
                    {Array.from(new Set(blogPosts.map((p) => p.category))).map((category) => (
                      <Link
                        key={category}
                        href={`/blog?category=${category}`}
                        className="block text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
