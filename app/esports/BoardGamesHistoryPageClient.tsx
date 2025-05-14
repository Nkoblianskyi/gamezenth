"use client"

import Image from "next/image"
import Link from "next/link"
import { boardgameHistory, memorableStories, boardGameInfluences } from "@/lib/esports-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection, AnimatedFadeIn } from "@/components/ui/animated-section"

export default function BoardGamesHistoryPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&query=ancient+and+modern+board+games+history+timeline"
            alt="Historia de los Juegos de Mesa"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Historia de los <span className="highlight">Juegos de Mesa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Un viaje a través del tiempo explorando la evolución de los juegos de mesa, desde las antiguas
              civilizaciones hasta la era moderna
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.1}>
            <div className="max-w-4xl mx-auto bg-muted/30 p-8 rounded-lg border border-border">
              <p className="text-lg leading-relaxed">{boardgameHistory.introduction}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Board Games History Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Línea del Tiempo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora los momentos clave en la evolución de los juegos de mesa a través de los milenios
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {boardgameHistory.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Timeline connector */}
                  {index < boardgameHistory.timeline.length - 1 && (
                    <div className="absolute left-[39px] top-[72px] bottom-[-72px] w-1 bg-muted-foreground/20"></div>
                  )}

                  <div className="flex gap-8">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background relative z-10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="text-xl font-bold">{item.year}</span>
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground mb-6">{item.content}</p>
                      <motion.div
                        className="relative h-60 rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influencia Cultural y Social */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impacto e Influencia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cómo los juegos de mesa han influido en la sociedad, la educación y la cultura a lo largo de la historia
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {boardGameInfluences.map((influence, index) => (
              <motion.div
                key={influence.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={influence.image || "/placeholder.svg"}
                      alt={influence.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{influence.title}</h3>
                    <p className="text-muted-foreground">{influence.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorable Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Historias Memorables</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Momentos legendarios que han definido la historia competitiva de los juegos de mesa y han quedado grabados
              en la memoria de los aficionados
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memorableStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                  <div className="relative h-48">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span>{story.year}</span>
                      <span>•</span>
                      <span>{story.game}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                    <p className="text-muted-foreground mb-4">{story.excerpt}</p>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Button variant="outline" size="sm" asChild className="mt-2">
                        <Link href={`/esports/stories/${story.id}`}>
                          Leer historia completa
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedFadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">¿Quieres saber más sobre juegos de mesa?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explora nuestro blog para descubrir análisis, guías y noticias sobre los mejores juegos de mesa clásicos y
              modernos.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link href="/blog">Explorar el Blog</Link>
              </Button>
            </motion.div>
          </AnimatedFadeIn>
        </div>
      </section>
    </>
  )
}
