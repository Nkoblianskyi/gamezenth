import { CastleIcon as ChessKnight, Compass, Zap, Users, Trophy, Sparkles } from "lucide-react"

export const playerTypes = [
  {
    id: 1,
    title: "El Estratega",
    description:
      "Piensa cada movimiento, domina las reglas y planifica su victoria desde el primer turno. Para ti, los juegos son un rompecabezas a resolver con lógica y previsión. Disfrutas de los eurogames, juegos de gestión de recursos y cualquier título que premie el pensamiento profundo.",
    icon: ChessKnight,
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    id: 2,
    title: "El Explorador",
    description:
      "No sigues el camino obvio. Buscas combinaciones únicas, estrategias alternativas y experiencias narrativas en cada juego. Para ti, el viaje es más importante que la victoria. Te encantan los juegos sandbox, los legacy y cualquier título que recompense la curiosidad.",
    icon: Compass,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: 3,
    title: "El Optimizador",
    description:
      "Eficiente, preciso y siempre buscando la jugada perfecta. Analizas cada opción para maximizar resultados con mínimos recursos. Los engine-building y combos son tu especialidad. Te atraen los juegos de construcción de motores, optimización y cualquier título que premie la eficiencia.",
    icon: Zap,
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    id: 4,
    title: "El Social",
    description:
      "Para ti, los juegos de mesa son una experiencia compartida. Disfrutas conectando con otros jugadores, negociando y creando momentos memorables. Prefieres los juegos de negociación, party games y cualquier título que fomente la interacción o la cooperación entre jugadores.",
    icon: Users,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    id: 5,
    title: "El Competitivo",
    description:
      "Vives para el desafío y la victoria. Siempre buscas mejorar tus habilidades y enfrentarte a los mejores. Los rankings, torneos y la competición directa son tu hábitat natural. Te atraen los juegos abstractos, wargames y cualquier título con confrontación directa.",
    icon: Trophy,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    id: 6,
    title: "El Inmersivo",
    description:
      "Ves los juegos como portales a otros mundos. Disfrutas sumergiéndote en la narrativa, el arte y la atmósfera. Te encantan los juegos temáticos, los juegos de rol de mesa y cualquier título que ofrezca una experiencia narrativa rica y envolvente.",
    icon: Sparkles,
    color: "from-pink-500 to-fuchsia-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
]
