"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Lightbulb, Gamepad2, Trophy, Clock, Zap, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

// Datos de curiosidades del mundo de los juegos de mesa
const boardGameFacts = [
  {
    title: "El juego de mesa más antiguo",
    content:
      "Senet, jugado en el Antiguo Egipto hace 5.000 años, es considerado el juego de mesa más antiguo conocido. Se han encontrado tableros en tumbas de faraones, incluyendo la de Tutankamón.",
    icon: Clock,
  },
  {
    title: "Monopoly anti-capitalista",
    content:
      "El Monopoly fue originalmente diseñado como 'The Landlord's Game' por Elizabeth Magie en 1903 para demostrar los peligros del monopolio y promover el impuesto único sobre la tierra.",
    icon: Lightbulb,
  },
  {
    title: "Ajedrez y matemáticas",
    content:
      "El número de posibles partidas de ajedrez es mayor que el número de átomos en el universo observable. Se estima en 10^120, un número tan grande que se conoce como 'número de Shannon'.",
    icon: Zap,
  },
  {
    title: "Catan y la ONU",
    content:
      "La ONU ha utilizado Los Colonos de Catán en programas de resolución de conflictos, ya que el juego enseña negociación, gestión de recursos y cooperación incluso entre competidores.",
    icon: Globe,
  },
  {
    title: "Cartas récord",
    content:
      "Magic está reconocido por el Guinness World Records como el juego de cartas coleccionables con más cartas únicas, con más de 20,000 cartas diferentes publicadas desde 1993.",
    icon: Trophy,
  },
  {
    title: "Pandemic y la realidad",
    content:
      "Tras la pandemia de COVID-19, las ventas de Pandemic aumentaron un 400%. El diseñador Matt Leacock consultó con epidemiólogos reales para crear la mecánica de propagación de enfermedades.",
    icon: Gamepad2,
  },
]

interface BoardGameFactsProps {
  className?: string
}

export default function BoardGameFacts({ className }: BoardGameFactsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const factsPerView = 3 // Número de tarjetas visibles a la vez en pantallas grandes

  // Autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === boardGameFacts.length - factsPerView ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Pausar autoplay al interactuar
  const handleManualNavigation = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)

    // Reanudar autoplay después de 10 segundos de inactividad
    setTimeout(() => setAutoplay(true), 10000)
  }

  const handlePrev = () => {
    handleManualNavigation(currentIndex === 0 ? boardGameFacts.length - factsPerView : currentIndex - 1)
  }

  const handleNext = () => {
    handleManualNavigation(currentIndex === boardGameFacts.length - factsPerView ? 0 : currentIndex + 1)
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden">
        {/* Tarjetas de curiosidades */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / factsPerView)}%)` }}
        >
          {boardGameFacts.map((fact, index) => {
            const IconComponent = fact.icon

            return (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                <Card className="h-full border-primary/10 bg-muted/30 hover:bg-muted/50 transition-colors overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
                        <p className="text-muted-foreground text-sm">{fact.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Controles de navegación */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full h-10 w-10"
          onClick={handlePrev}
          aria-label="Anterior curiosidad"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full h-10 w-10"
          onClick={handleNext}
          aria-label="Siguiente curiosidad"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: boardGameFacts.length - factsPerView + 1 }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              currentIndex === index ? "bg-primary" : "bg-muted-foreground/30",
            )}
            onClick={() => handleManualNavigation(index)}
            aria-label={`Ir a curiosidad ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
