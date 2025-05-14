"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Mail, MessageSquare, User, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El email no es válido"
    }

    if (!message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    }

    if (!acceptTerms) {
      newErrors.acceptTerms = "Debes aceptar la política de privacidad"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccessDialog(true)

    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    setAcceptTerms(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&query=contacto+gaming+soporte"
            alt="Contacto"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="highlight">Contacta</span> con nosotros
            </h1>
            <p className="text-xl text-muted-foreground">
              ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      className={`pl-10 ${errors.name ? "border-destructive" : ""}`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="message"
                      placeholder="¿En qué podemos ayudarte?"
                      className={`pl-10 min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="terms"
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        errors.acceptTerms ? "text-destructive" : ""
                      }`}
                    >
                      Acepto la{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        política de privacidad
                      </Link>{" "}
                      y el tratamiento de mis datos
                    </Label>
                    {errors.acceptTerms && <p className="text-sm text-destructive">{errors.acceptTerms}</p>}
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">contacto@gamezenth.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">Madrid, España</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Horario de atención</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-4">Preguntas frecuentes</h3>
                  <p className="text-muted-foreground mb-4">
                    Antes de contactarnos, quizás quieras revisar nuestra sección de preguntas frecuentes donde
                    respondemos a las consultas más comunes.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/#faq">Ver preguntas frecuentes</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Mensaje enviado con éxito
            </DialogTitle>
            <DialogDescription>
              Gracias por contactar con nosotros. Hemos recibido tu mensaje y te responderemos lo antes posible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)}>Aceptar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
