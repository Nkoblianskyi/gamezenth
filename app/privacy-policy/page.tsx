import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Gamezenth - Información sobre cómo recopilamos, usamos y protegemos tus datos",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Última actualización: 1 de mayo de 2025</p>

          <h2>1. Introducción</h2>
          <p>
            Bienvenido a Gamezenth. Valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta
            política de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio
            web y te informará sobre tus derechos de privacidad y cómo la ley te protege.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>
            Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos
            agrupado de la siguiente manera:
          </p>
          <ul>
            <li>Datos de identidad: nombre, apellidos, nombre de usuario o identificador similar.</li>
            <li>Datos de contacto: dirección de correo electrónico y números de teléfono.</li>
            <li>
              Datos técnicos: dirección IP, datos de inicio de sesión, tipo y versión del navegador, configuración de
              zona horaria y ubicación, tipos y versiones de plugins del navegador, sistema operativo y plataforma, y
              otra tecnología en los dispositivos que utilizas para acceder a este sitio web.
            </li>
            <li>
              Datos de perfil: tu nombre de usuario y contraseña, tus intereses, preferencias, comentarios y respuestas
              a encuestas.
            </li>
            <li>Datos de uso: información sobre cómo utilizas nuestro sitio web, productos y servicios.</li>
          </ul>

          <h2>3. Cómo recopilamos tus datos personales</h2>
          <p>Utilizamos diferentes métodos para recopilar datos de y sobre ti, incluyendo:</p>
          <ul>
            <li>
              Interacciones directas: puedes proporcionarnos tus datos de identidad, contacto y financieros al rellenar
              formularios o al comunicarte con nosotros por correo postal, teléfono, correo electrónico o de otra
              manera.
            </li>
            <li>
              Tecnologías o interacciones automatizadas: a medida que interactúas con nuestro sitio web, podemos
              recopilar automáticamente datos técnicos sobre tu equipo, acciones de navegación y patrones. Recopilamos
              estos datos personales mediante cookies y otras tecnologías similares.
            </li>
          </ul>

          <h2>4. Cómo utilizamos tus datos personales</h2>
          <p>
            Solo utilizaremos tus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos tus datos
            personales en las siguientes circunstancias:
          </p>
          <ul>
            <li>Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado contigo.</li>
            <li>
              Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y tus intereses y derechos
              fundamentales no anulen esos intereses.
            </li>
            <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
          </ul>

          <h2>5. Divulgación de tus datos personales</h2>
          <p>
            Podemos compartir tus datos personales con las partes establecidas a continuación para los fines
            establecidos en esta política de privacidad:
          </p>
          <ul>
            <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
            <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradoras.</li>
            <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
            <li>
              Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
              activos.
            </li>
          </ul>

          <h2>6. Seguridad de datos</h2>
          <p>
            Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales se pierdan, utilicen
            o accedan de forma no autorizada, se modifiquen o divulguen accidentalmente. Además, limitamos el acceso a
            tus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad
            comercial de conocer. Solo procesarán tus datos personales según nuestras instrucciones y están sujetos a un
            deber de confidencialidad.
          </p>

          <h2>7. Retención de datos</h2>
          <p>
            Solo conservaremos tus datos personales durante el tiempo que sea necesario para cumplir con los fines para
            los que los recopilamos, incluso con el fin de satisfacer cualquier requisito legal, contable o de informes.
          </p>

          <h2>8. Tus derechos legales</h2>
          <p>
            Bajo ciertas circunstancias, tienes derechos bajo las leyes de protección de datos en relación con tus datos
            personales, incluyendo el derecho a:
          </p>
          <ul>
            <li>Solicitar acceso a tus datos personales.</li>
            <li>Solicitar la corrección de tus datos personales.</li>
            <li>Solicitar la eliminación de tus datos personales.</li>
            <li>Oponerte al procesamiento de tus datos personales.</li>
            <li>Solicitar la restricción del procesamiento de tus datos personales.</li>
            <li>Solicitar la transferencia de tus datos personales.</li>
            <li>Derecho a retirar el consentimiento.</li>
          </ul>

          <h2>9. Cambios a esta política de privacidad</h2>
          <p>
            Podemos actualizar nuestra política de privacidad de vez en cuando. Te notificaremos cualquier cambio
            publicando la nueva política de privacidad en esta página y, si los cambios son significativos, te
            enviaremos un aviso.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctanos
            en:
          </p>
          <p>Email: privacidad@gamezenth.com</p>
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
