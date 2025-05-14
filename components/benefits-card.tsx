"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface BenefitsCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  index: number
}

export function BenefitsCard({ title, description, icon: Icon, color, index }: BenefitsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "relative overflow-hidden rounded-lg border p-6 shadow-sm",
        `border-${color}-500/20 bg-${color}-500/5`,
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn("rounded-full p-2 bg-background", `text-${color}-500`)}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className={cn("absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10", `bg-${color}-500`)} />
    </motion.div>
  )
}
