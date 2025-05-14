import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GamepadIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <GamepadIcon className="h-24 w-24 text-muted-foreground" />
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Página no encontrada</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Explorar el blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
