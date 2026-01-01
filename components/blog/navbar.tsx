import Link from "next/link"
import { Search, ShoppingCart, User, Mail, Menu, Camera, Phone } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar - Dark Blue */}
      <div className="bg-[#1e293b] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tighter shrink-0 flex items-center gap-2">
              ersatzteil<span className="text-[#4ade80] font-serif italic font-normal">shop.de</span>
            </Link>

            {/* Search Bar - Center */}
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <input 
                type="text" 
                placeholder="Suchen..." 
                className="w-full h-12 rounded-l-md px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="h-12 px-6 bg-white rounded-r-md text-muted-foreground hover:text-primary transition-colors border-l">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Icons - Right */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link href="#" className="hidden lg:flex flex-col items-center gap-1 hover:text-[#4ade80] transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-wider">Kontakt</span>
              </Link>
              <Link href="#" className="hidden lg:flex flex-col items-center gap-1 hover:text-[#4ade80] transition-colors">
                <User className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-wider">Konto</span>
              </Link>
              <Link href="/warenkorb" className="flex flex-col items-center gap-1 hover:text-[#4ade80] transition-colors relative">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#4ade80] text-[10px] text-[#1e293b] flex items-center justify-center rounded-full font-bold">
                    0
                  </span>
                </div>
                <span className="hidden lg:block text-[10px] uppercase tracking-wider">Warenkorb</span>
              </Link>
              
              {/* Mobile Menu Trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="md:hidden text-white hover:text-[#4ade80] transition-colors">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                  <SheetHeader className="border-b pb-4 mb-4 text-left">
                    <SheetTitle className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                      ersatzteil<span className="text-primary font-serif italic font-normal">shop.de</span>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col gap-6">
                    {/* Mobile Search */}
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Suchen..." 
                        className="w-full h-10 rounded-md px-4 border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <button className="absolute right-0 top-0 h-10 px-4 text-muted-foreground hover:text-primary">
                        <Search className="w-4 h-4" />
                      </button>
                    </div>

                    <nav className="flex flex-col gap-4 text-lg font-medium">
                      <Link href="/" className="flex items-center gap-3 py-2 border-b hover:text-primary transition-colors">
                        Haushalt
                      </Link>
                      <Link href="/kategorien" className="flex items-center gap-3 py-2 border-b hover:text-primary transition-colors">
                        Küche
                      </Link>
                      <Link href="/reparatur" className="flex items-center gap-3 py-2 border-b hover:text-primary transition-colors">
                        Reparaturanleitungen
                      </Link>
                      <Link href="/blog" className="flex items-center gap-3 py-2 border-b hover:text-primary transition-colors font-bold text-primary">
                        Ratgeber / Magazin
                      </Link>
                      <Link href="/kategorien" className="flex items-center gap-3 py-2 border-b hover:text-primary transition-colors">
                        Alle Geräte
                      </Link>
                    </nav>

                    <div className="space-y-4 pt-4">
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Service</h4>
                      <Link href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                        <User className="w-5 h-5" /> Mein Konto
                      </Link>
                      <Link href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" /> Kontakt
                      </Link>
                      <Link href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Camera className="w-5 h-5" /> Typenschild Scanner
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Mobile Search Bar (Visible only on small screens below logo bar) */}
          <div className="mt-4 md:hidden relative">
            <input 
              type="text" 
              placeholder="Suchen..." 
              className="w-full h-10 rounded-md px-4 text-foreground focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-10 px-4 text-muted-foreground">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Camera Search Link */}
          <div className="hidden md:flex justify-center mt-2">
            <Link href="#" className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors">
              <Camera className="w-3 h-3" />
              <span className="underline decoration-dotted underline-offset-4">Typenschild scannen - alle Ersatzteile finden</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar - White */}
      <div className="bg-white border-b hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 text-sm font-medium h-12 overflow-x-auto">
            <Link href="/" className="flex items-center gap-2 hover:text-primary whitespace-nowrap">
               Haushalt
            </Link>
            <Link href="/kategorien" className="flex items-center gap-2 hover:text-primary whitespace-nowrap">
               Küche
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-primary whitespace-nowrap">
               E-Mobilität
            </Link>
            <div className="w-px h-4 bg-border mx-2"></div>
            <Link href="/kategorien" className="flex items-center gap-2 hover:text-primary font-bold whitespace-nowrap">
               Alle Geräte
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-primary whitespace-nowrap">
               Videos
            </Link>
            <Link href="/blog" className="flex items-center gap-2 text-primary whitespace-nowrap font-bold">
               Ratgeber
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-primary whitespace-nowrap">
               Forum
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-primary whitespace-nowrap">
               FAQ / Hilfe
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
