import type { Metadata } from "next"
import BoardGamesHistoryPageClient from "./BoardGamesHistoryPageClient"

export const metadata: Metadata = {
  title: "Historia de los Juegos de Mesa",
  description:
    "Descubre la fascinante evolución de los juegos de mesa a través de la historia, desde el antiguo Egipto hasta la actualidad",
  openGraph: {
    title: "Historia de los Juegos de Mesa | Gamezenth",
    description:
      "Descubre la fascinante evolución de los juegos de mesa a través de la historia, desde el antiguo Egipto hasta la actualidad",
  },
}

export default function BoardGamesHistoryPage() {
  return <BoardGamesHistoryPageClient />
}
