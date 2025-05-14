"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  GamepadIcon,
  Users,
  BookOpen,
  Newspaper,
  Cpu,
  TrendingUp,
  SearchCheck,
  Brain,
  HeartHandshake,
  Lightbulb,
  Smile,
  Clock,
  Puzzle,
} from "lucide-react"
import { blogPosts, services, faqItems } from "@/lib/mock-data"
import { formatDate, truncateText } from "@/lib/utils"
import FaqAccordion from "@/components/faq-accordion"
import Script from "next/script"
import { generateWebsiteSchema } from "@/lib/schema"
import GamingFacts from "@/components/gaming-facts"
import PlayerTypes from "@/components/player-types"
import { AnimatedSection, AnimatedFadeIn, AnimatedScale, AnimatedText } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import { BenefitsCard } from "@/components/benefits-card"

// Datos para la sección de beneficios
const boardGameBenefits = [
  {
    title: "Desarrollo Cognitivo",
    description:
      "Los juegos de mesa mejoran la memoria, la concentración y las habilidades de resolución de problemas, estimulando diferentes áreas del cerebro.",
    icon: Brain,
    color: "blue",
  },
  {
    title: "Conexión Social",
    description:
      "Fomentan la interacción cara a cara, fortaleciendo lazos familiares y amistades en un mundo cada vez más digital.",
    icon: HeartHandshake,
    color: "green",
  },
  {
    title: "Aprendizaje Divertido",
    description:
      "Permiten adquirir conocimientos y habilidades de manera entretenida, desde matemáticas hasta historia o estrategia.",
    icon: Lightbulb,
    color: "yellow",
  },
  {
    title: "Reducción del Estrés",
    description:
      "Jugar ayuda a desconectar de las preocupaciones diarias, reduciendo los niveles de estrés y ansiedad.",
    icon: Smile,
    color: "pink",
  },
  {
    title: "Tiempo de Calidad",
    description:
      "Ofrecen una alternativa de ocio significativa, alejada de pantallas, que fomenta momentos memorables.",
    icon: Clock,
    color: "purple",
  },
  {
    title: "Pensamiento Estratégico",
    description:
      "Desarrollan la capacidad de planificar, anticipar consecuencias y adaptarse a situaciones cambiantes.",
    icon: Puzzle,
    color: "orange",
  },
]

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3)
  const featuredServices = services.slice(0, 3)

  const schemaData = generateWebsiteSchema()

  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/46c3573f77f6684c6b8e303e72987241.jpg"
            alt="Gaming background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Tu portal de{" "}
                <AnimatedText delay={0.3} className="highlight">
                  juegos de mesa
                </AnimatedText>{" "}
                en español
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Noticias, análisis, guías y comunidad para todos los amantes de los juegos de mesa
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <Link href="/blog">Explorar Blog</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Nuestros Servicios</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
                <p className="text-muted-foreground mb-6">
                  Gamezenth es un blog dedicado a la cultura de los juegos de mesa, creado por y para apasionados del
                  gaming. Nuestro objetivo es proporcionar contenido de calidad que informe, entretenga e inspire a
                  nuestra comunidad.
                </p>
                <p className="text-muted-foreground mb-6">
                  Desde análisis detallados hasta las últimas noticias de la industria, nos esforzamos por cubrir todos
                  los aspectos del mundo de los juegos de mesa con rigor, honestidad y pasión.
                </p>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Button variant="outline" asChild>
                    <Link href="/about" className="inline-flex items-center">
                      Conoce más sobre nosotros
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedScale delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/a8e1e3a8c638c81aa9ccee3cec7dc9fd.jpg" alt="Equipo de Gamezenth" fill className="object-cover" />
              </div>
            </AnimatedScale>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Beneficios de los Juegos de Mesa */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beneficios de los Juegos de Mesa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre por qué los juegos de mesa son mucho más que simple entretenimiento y cómo pueden mejorar
              diferentes aspectos de tu vida
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardGameBenefits.map((benefit, index) => (
              <BenefitsCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                color={benefit.color}
                index={index}
              />
            ))}
          </div>

          <AnimatedSection delay={0.6} className="text-center mt-12">
            <motion.div
              className="inline-block bg-muted/50 rounded-lg p-4 border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg font-medium">
                "Los juegos de mesa no solo son una forma de entretenimiento, sino una herramienta poderosa para el
                desarrollo personal y social."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Revista Internacional de Psicología Lúdica</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Player Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Qué tipo de jugador eres?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce los diferentes estilos de juego y descubre si te identificas con alguno de ellos.
            </p>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <PlayerTypes />
          </AnimatedFadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades relacionadas con juegos de
              mesa
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent =
                service.icon === "SearchCheck"
                  ? SearchCheck
                  : service.icon === "BookOpen"
                    ? BookOpen
                    : service.icon === "Newspaper"
                      ? Newspaper
                      : service.icon === "Users"
                        ? Users
                        : service.icon === "Cpu"
                          ? Cpu
                          : TrendingUp

              return (
                <AnimatedScale key={service.id} delay={0.1 + index * 0.1}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                      <div className="relative h-48">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            className="p-2 rounded-full bg-primary/10"
                            whileHover={{ rotate: 15 }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent className="h-5 w-5 text-primary" />
                          </motion.div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Button variant="outline" size="sm" asChild className="mt-2">
                            <Link href={`/services/${service.slug}`}>Más información</Link>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedScale>
              )
            })}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/services">Ver todos los servicios</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artículos Populares</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros artículos más leídos y comentados
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <AnimatedScale key={post.id} delay={0.1 + index * 0.1}>
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{truncateText(post.excerpt, 120)}</p>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Button variant="outline" size="sm" asChild className="mt-2">
                          <Link href={`/blog/${post.slug}`}>Leer más</Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedScale>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/blog">Ver todos los artículos</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gaming Facts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Curiosidades del Mundo Gamer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Sabías que...? Descubre datos curiosos que probablemente no conocías sobre tus juegos favoritos.
            </p>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <GamingFacts />
          </AnimatedFadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3} className="max-w-3xl mx-auto">
            <FaqAccordion items={faqItems} />
          </AnimatedFadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/a44a31447eb03943944be894f9bf4ad8.jpg" alt="Gaming setup" fill className="object-cover opacity-20" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <AnimatedScale>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
              >
                <GamepadIcon className="h-12 w-12 text-highlight mx-auto mb-6" />
              </motion.div>
            </AnimatedScale>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-xl text-muted-foreground mb-8">
                Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <Link href="/contact">Contactar ahora</Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
