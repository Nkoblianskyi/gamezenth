import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { memorableStories } from "@/lib/esports-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import type { Metadata } from "next"

interface StoryPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const story = memorableStories.find((story) => story.id === Number.parseInt(params.id))

  if (!story) {
    return {
      title: "Historia no encontrada",
      description: "La historia que buscas no existe",
    }
  }

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} | Gamezenth`,
      description: story.excerpt,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  return memorableStories.map((story) => ({
    id: story.id.toString(),
  }))
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = memorableStories.find((story) => story.id === Number.parseInt(params.id))

  if (!story) {
    notFound()
  }

  // Get related stories (same game, excluding current story)
  const relatedStories = memorableStories.filter((s) => s.game === story.game && s.id !== story.id).slice(0, 2)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={story.image || "/placeholder.svg"}
            alt={story.title}
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
                <span>{story.year}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{story.game}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{story.title}</h1>

            <p className="text-xl text-muted-foreground">{story.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {story.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>Escrito por: {story.author}</p>
            </div>

            <div className="mt-12">
              <Button variant="outline" asChild>
                <Link href="/esports" className="inline-flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Historias
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24">
              {relatedStories.length > 0 && (
                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Historias relacionadas</h3>
                  <div className="space-y-4">
                    {relatedStories.map((relatedStory) => (
                      <div key={relatedStory.id} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={relatedStory.image || "/placeholder.svg"}
                            alt={relatedStory.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 mb-1">
                            <Link
                              href={`/esports/stories/${relatedStory.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {relatedStory.title}
                            </Link>
                          </h4>
                          <div className="text-xs text-muted-foreground">
                            {relatedStory.year} • {relatedStory.game}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Juegos populares</h3>
                <div className="space-y-2">
                  {Array.from(new Set(memorableStories.map((s) => s.game))).map((game) => (
                    <div key={game} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{game}</span>
                      <span className="text-sm bg-muted px-2 py-1 rounded-full">
                        {memorableStories.filter((s) => s.game === game).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
