import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Gamezenth - Información sobre cómo utilizamos las cookies en nuestro sitio web",
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Última actualización: 1 de mayo de 2025</p>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil)
            cuando visitas un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web funcionen,
            o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>

          <h2>2. Cómo utilizamos las cookies</h2>
          <p>
            Utilizamos cookies por varias razones que se detallan a continuación. Desafortunadamente, en la mayoría de
            los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin deshabilitar por
            completo la funcionalidad y características que agregan a este sitio. Se recomienda que dejes activadas
            todas las cookies si no estás seguro de si las necesitas o no, en caso de que se utilicen para proporcionar
            un servicio que utilizas.
          </p>

          <h2>3. Las cookies que establecemos</h2>
          <h3>Cookies relacionadas con la cuenta</h3>
          <p>
            Si creas una cuenta con nosotros, utilizaremos cookies para la gestión del proceso de registro y
            administración general. Estas cookies generalmente se eliminarán cuando cierres sesión, sin embargo, en
            algunos casos, pueden permanecer después para recordar tus preferencias del sitio cuando cierres sesión.
          </p>

          <h3>Cookies relacionadas con el inicio de sesión</h3>
          <p>
            Utilizamos cookies cuando has iniciado sesión para que podamos recordar este hecho. Esto evita que tengas
            que iniciar sesión cada vez que visitas una nueva página. Estas cookies normalmente se eliminan o borran
            cuando cierras sesión para garantizar que solo puedas acceder a funciones y áreas restringidas cuando
            inicies sesión.
          </p>

          <h3>Cookies relacionadas con boletines por correo electrónico</h3>
          <p>
            Este sitio ofrece servicios de suscripción a boletines o correo electrónico y las cookies pueden usarse para
            recordar si ya estás registrado y si mostrar ciertas notificaciones que solo podrían ser válidas para
            usuarios suscritos/no suscritos.
          </p>

          <h3>Cookies relacionadas con encuestas</h3>
          <p>
            De vez en cuando, ofrecemos encuestas y cuestionarios a los usuarios para proporcionarte información
            interesante, herramientas útiles o para entender nuestra base de usuarios con más precisión. Estas encuestas
            pueden usar cookies para recordar quién ya ha participado en una encuesta o para proporcionarte resultados
            precisos después de cambiar de página.
          </p>

          <h3>Cookies relacionadas con formularios</h3>
          <p>
            Cuando envías datos a través de un formulario como los que se encuentran en las páginas de contacto o
            formularios de comentarios, las cookies pueden configurarse para recordar los detalles del usuario para
            correspondencia futura.
          </p>

          <h3>Cookies de preferencias del sitio</h3>
          <p>
            Para proporcionarte una gran experiencia en este sitio, proporcionamos la funcionalidad para establecer tus
            preferencias sobre cómo se ejecuta este sitio cuando lo usas. Para recordar tus preferencias, necesitamos
            establecer cookies para que esta información pueda ser llamada cada vez que interactúas con una página que
            se ve afectada por tus preferencias.
          </p>

          <h2>4. Cookies de terceros</h2>
          <p>
            En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. La
            siguiente sección detalla qué cookies de terceros podrías encontrar a través de este sitio.
          </p>
          <ul>
            <li>
              Este sitio utiliza Google Analytics, que es una de las soluciones de análisis más extendidas y confiables
              en la web, para ayudarnos a entender cómo usas el sitio y las formas en que podemos mejorar tu
              experiencia. Estas cookies pueden rastrear cosas como cuánto tiempo pasas en el sitio y las páginas que
              visitas para que podamos continuar produciendo contenido atractivo.
            </li>
            <li>
              De vez en cuando, probamos nuevas características y hacemos cambios sutiles en la forma en que se entrega
              el sitio. Cuando todavía estamos probando nuevas características, estas cookies pueden usarse para
              garantizar que recibas una experiencia consistente mientras estás en el sitio, al tiempo que nos
              aseguramos de que entendemos qué optimizaciones aprecian más nuestros usuarios.
            </li>
          </ul>

          <h2>5. Más información</h2>
          <p>
            Esperamos que esto haya aclarado las cosas para ti y, como se mencionó anteriormente, si hay algo que no
            estás seguro de si necesitas o no, generalmente es más seguro dejar las cookies habilitadas en caso de que
            interactúen con una de las funciones que utilizas en nuestro sitio.
          </p>
          <p>
            Sin embargo, si todavía estás buscando más información, puedes contactarnos a través de uno de nuestros
            métodos de contacto preferidos:
          </p>
          <p>Email: cookies@gamezenth.com</p>
        </div>

        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
