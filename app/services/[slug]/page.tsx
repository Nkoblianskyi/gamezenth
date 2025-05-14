import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { SearchCheck, BookOpen, Newspaper, Users, Cpu, TrendingUp, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((service) => service.slug === params.slug)

  if (!service) {
    return {
      title: "Servicio no encontrado",
      description: "El servicio que buscas no existe",
    }
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Gamezenth`,
      description: service.description,
    },
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((service) => service.slug === params.slug)

  if (!service) {
    notFound()
  }

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
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/20">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{service.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {service.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12">
                <Button asChild>
                  <Link href="/contact">Solicitar este servicio</Link>
                </Button>
                <Button variant="outline" className="ml-4" asChild>
                  <Link href="/services" className="inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a servicios
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Otros servicios</h3>
                  <ul className="space-y-4">
                    {services
                      .filter((s) => s.id !== service.id)
                      .slice(0, 5)
                      .map((otherService) => (
                        <li key={otherService.id}>
                          <Link
                            href={`/services/${otherService.slug}`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {otherService.icon === "SearchCheck" && <SearchCheck className="h-5 w-5" />}
                            {otherService.icon === "BookOpen" && <BookOpen className="h-5 w-5" />}
                            {otherService.icon === "Newspaper" && <Newspaper className="h-5 w-5" />}
                            {otherService.icon === "Users" && <Users className="h-5 w-5" />}
                            {otherService.icon === "Cpu" && <Cpu className="h-5 w-5" />}
                            {otherService.icon === "TrendingUp" && <TrendingUp className="h-5 w-5" />}
                            <span>{otherService.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
