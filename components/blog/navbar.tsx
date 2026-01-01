import Link from "next/link"
import { Search, ShoppingCart, Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              ersatzteil<span className="text-primary font-serif italic font-normal">shop.de</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/blog" className="text-primary underline decoration-2 underline-offset-4">
                Magazin
              </Link>
              <Link href="/reparatur" className="hover:text-primary transition-colors">
                Reparatur-Anleitungen
              </Link>
              <Link href="/kategorien" className="hover:text-primary transition-colors">
                Ersatzteile
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/warenkorb" className="p-2 hover:bg-accent rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-[10px] text-white flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <button className="md:hidden p-2 hover:bg-accent rounded-full">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
