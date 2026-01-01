"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Alle", "Waschmaschinen", "Trockner", "Geschirrspüler", "Kühlschränke", "Herd & Backofen"]

export function CategoryFilter() {
  const [active, setActive] = useState("Alle")

  return (
    <div className="flex flex-wrap gap-3 border-b pb-8">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={cn(
            "text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 border",
            active === cat
              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
              : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary",
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
