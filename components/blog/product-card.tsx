import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  image: string
  rating: number
}

export function ProductCard({ name, price, image, rating }: ProductCardProps) {
  return (
    <div className="group border rounded-2xl p-4 bg-background hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-4">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < rating ? "fill-current" : "text-muted"}`} />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">({rating}.0)</span>
        </div>
        <h4 className="font-semibold text-sm line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {name}
        </h4>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">{price}</span>
          <button className="p-2 bg-primary text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-primary/20">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
