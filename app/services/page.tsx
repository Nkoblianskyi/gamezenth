import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SearchCheck, BookOpen, Newspaper, Users, Cpu, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "Descubre todos los servicios que ofrecemos en Gamezenth, desde análisis de videojuegos hasta guías y tutoriales",
  openGraph: {
    title: "Nuestros Servicios | Gamezenth",
    description:
      "Descubre todos los servicios que ofrecemos en Gamezenth, desde análisis de videojuegos hasta guías y tutoriales",
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&query=servicios+gaming+blog"
            alt="Nuestros Servicios"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Nuestros <span className="highlight">Servicios</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre todo lo que Gamezenth puede ofrecerte en el mundo de los videojuegos
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
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
                <Card key={service.id} className="overflow-hidden transition-all hover:shadow-lg">
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
                      <div className="p-2 rounded-full bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <Link href={`/services/${service.slug}`}>Más información</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Si no encuentras lo que buscas, contáctanos y te ayudaremos a encontrar la solución perfecta para tus
              necesidades.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contactar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
