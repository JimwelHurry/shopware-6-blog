import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Truck, ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        {/* Top Section: Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Schnelle Lieferung</h4>
            <p className="text-sm text-muted-foreground">Versand am gleichen Werktag bei Bestellung bis 14 Uhr</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Käuferschutz</h4>
            <p className="text-sm text-muted-foreground">Sicher einkaufen mit Geld-zurück-Garantie</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Profi-Support</h4>
            <p className="text-sm text-muted-foreground">Kostenlose Beratung durch unsere Experten</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <CreditCard className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Sichere Zahlung</h4>
            <p className="text-sm text-muted-foreground">Verschlüsselte Übertragung aller Daten</p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Allgemein</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Alle Marken</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Alle Geräte</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Magazin</Link></li>
              <li><Link href="/reparatur" className="hover:text-primary transition-colors">Reparaturanleitungen</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Über uns</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Hilfe & Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Hilfe-Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Versand & Lieferung</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Rücksendung</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Zahlungsarten</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Typennummer finden</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">AGB</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Widerrufsrecht</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Kontakt</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>0123 / 456 789 0</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@ersatzteilshop.de</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Musterstraße 1, 12345 Berlin</span>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="font-semibold mb-3 text-sm">Folgen Sie uns</h5>
              <div className="flex gap-4">
                <Link href="#" className="w-8 h-8 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Payment & Copyright */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 Ersatzteilshop Demo. Alle Rechte vorbehalten. Preise inkl. MwSt. zzgl. Versandkosten.
            </p>
            <div className="flex items-center gap-4 grayscale opacity-70">
              {/* Simple placeholders for payment icons using text or blocks if no specific icons available */}
              <div className="h-6 w-10 bg-white border rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
              <div className="h-6 w-10 bg-white border rounded flex items-center justify-center text-[8px] font-bold">PayPal</div>
              <div className="h-6 w-10 bg-white border rounded flex items-center justify-center text-[8px] font-bold">DHL</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
