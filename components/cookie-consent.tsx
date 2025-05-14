"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="mx-auto max-w-4xl shadow-lg">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-2">Política de Cookies</h3>
          <p className="text-sm text-muted-foreground">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra
            <Link href="/cookie-policy" className="text-primary hover:underline mx-1">
              Política de Cookies
            </Link>
            y
            <Link href="/privacy-policy" className="text-primary hover:underline mx-1">
              Política de Privacidad
            </Link>
            .
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline" onClick={handleDecline}>
            Rechazar
          </Button>
          <Button onClick={handleAccept}>Aceptar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
