"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { playerTypes } from "@/lib/player-types"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function PlayerTypes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const slidesPerView = isMobile ? 1 : 3
  const totalSlides = Math.ceil(playerTypes.length / slidesPerView)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const visibleTypes = isMobile
    ? [playerTypes[currentSlide]]
    : playerTypes.slice(currentSlide * slidesPerView, currentSlide * slidesPerView + slidesPerView)

  return (
    <div className="relative">
      {/* Tipos de jugadores en escritorio */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {playerTypes.map((type, index) => {
          const IconComponent = type.icon

          return (
            <motion.div
              key={type.id}
              className={cn(
                "relative rounded-xl p-6 transition-all duration-300 border",
                type.bgColor,
                type.borderColor,
                activeIndex === index ? "scale-105 shadow-lg" : "hover:scale-[1.02]",
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("p-2 rounded-full bg-background/50 backdrop-blur-sm")}>
                  <IconComponent
                    className={cn("h-6 w-6 bg-gradient-to-br bg-clip-text text-transparent", type.color)}
                  />
                </div>
                <h3 className="text-xl font-bold">{type.title}</h3>
              </div>
              <p className="text-muted-foreground">{type.description}</p>

              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 -z-10 rounded-xl opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: `linear-gradient(135deg, ${type.color.split(" ")[1].replace("to-", "")} 0%, transparent 100%)`,
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Slider para móviles */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {playerTypes.map((type) => {
              const IconComponent = type.icon

              return (
                <div
                  key={type.id}
                  className={cn("w-full flex-shrink-0 rounded-xl p-6 border", type.bgColor, type.borderColor)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-background/50 backdrop-blur-sm">
                      <IconComponent
                        className={cn("h-6 w-6 bg-gradient-to-br bg-clip-text text-transparent", type.color)}
                      />
                    </div>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Controles de navegación para móviles */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full h-10 w-10"
          onClick={handlePrev}
          aria-label="Tipo anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full h-10 w-10"
          onClick={handleNext}
          aria-label="Siguiente tipo"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: playerTypes.length }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                currentSlide === index ? "bg-primary" : "bg-muted-foreground/30",
              )}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir a tipo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
