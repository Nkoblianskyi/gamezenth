"use client"

import Link from "next/link"
import { GamepadIcon, Home, Info, BookOpen, Newspaper, Trophy, Mail, ShieldCheck, Cookie } from "lucide-react"
import { motion } from "framer-motion"

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Footer() {
  return (
    <motion.footer
      className="bg-background border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Logo y descripción */}
        <motion.div className="flex flex-col items-center mb-10 text-center" variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <GamepadIcon className="h-6 w-6 text-highlight" />
            </motion.div>
            <span className="text-lg font-bold">
              Game<span className="highlight">zenth</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Tu portal de referencia sobre juegos de mesa en español. Noticias, análisis, guías y comunidad para todos
            los amantes de los juegos de mesa.
          </p>
        </motion.div>

        {/* Enlaces de navegación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Navegación principal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>Inicio</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Info className="h-4 w-4" />
                  <span>Sobre Nosotros</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contacto</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Servicios */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/services/analisis-juegos-mesa"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Análisis de Juegos</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/services/guias-tutoriales"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Guías y Tutoriales</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Todos los Servicios</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contenido */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contenido</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Newspaper className="h-4 w-4" />
                  <span>Blog</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/esports"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Trophy className="h-4 w-4" />
                  <span>Juegos Competitivos</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Política de Privacidad</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Cookie className="h-4 w-4" />
                  <span>Política de Cookies</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <motion.div className="border-t border-border pt-8" variants={itemVariants}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gamezenth. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
