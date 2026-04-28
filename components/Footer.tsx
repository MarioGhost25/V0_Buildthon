import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconTwitterX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">
                Listo para encontrar tu hogar?
              </h3>
              <p className="text-sm">
                Comienza hoy y encuentra la habitacion perfecta para ti.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/explorar"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
              >
                Buscar ahora
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/publicar"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
              >
                Publicar cuarto
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-2xl font-bold font-serif text-white tracking-tight">
                nidoo
              </span>
              <span className="w-2 h-2 rounded-full bg-primary mb-2" />
            </Link>
            <p className="text-sm leading-relaxed mt-3 mb-6">
              La plataforma de renta de habitaciones mas confiable de America
              Latina.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/nidoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://twitter.com/nidoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <IconTwitterX />
              </a>
              <a
                href="https://linkedin.com/company/nidoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://facebook.com/nidoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white text-xs uppercase tracking-widest mb-2">
                Plataforma
              </span>
              <Link href="/#como-funciona" className="hover:text-white transition-colors">
                Como funciona
              </Link>
              <Link href="/explorar" className="hover:text-white transition-colors">
                Explorar
              </Link>
              <Link href="/#ciudades" className="hover:text-white transition-colors">
                Ciudades
              </Link>
              <Link href="/precios" className="hover:text-white transition-colors">
                Precios
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white text-xs uppercase tracking-widest mb-2">
                Propietarios
              </span>
              <Link href="/publicar" className="hover:text-white transition-colors">
                Publicar cuarto
              </Link>
              <Link href="/propietarios" className="hover:text-white transition-colors">
                Beneficios
              </Link>
              <Link href="/propietarios/consejos" className="hover:text-white transition-colors">
                Consejos
              </Link>
              <Link href="/calculadora" className="hover:text-white transition-colors">
                Calculadora
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white text-xs uppercase tracking-widest mb-2">
                Soporte
              </span>
              <Link href="/ayuda" className="hover:text-white transition-colors">
                Centro de ayuda
              </Link>
              <Link href="/#faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/contacto" className="hover:text-white transition-colors">
                Contacto
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white text-xs uppercase tracking-widest mb-2">
                Legal
              </span>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Terminos de uso
              </Link>
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/seguridad" className="hover:text-white transition-colors">
                Seguridad
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-medium mb-1">Suscribete a nuestro newsletter</p>
              <p className="text-sm">Recibe las mejores habitaciones y consejos en tu email.</p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full sm:w-64 pl-9 pr-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 Nidoo. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Hecho con carino en America Latina</span>
            <span className="flex gap-1">
              <span>MX</span>
              <span>CO</span>
              <span>PE</span>
              <span>SV</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
