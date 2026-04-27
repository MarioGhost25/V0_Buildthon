"use client";

import Image from "next/image";
import { Search, MapPin, Calendar, Wallet, Users, Home, Globe } from "lucide-react";
import { useState } from "react";

const stats = [
  { icon: Home, value: "+5,000", label: "habitaciones" },
  { icon: Users, value: "+12,000", label: "inquilinos felices" },
  { icon: Globe, value: "5 países", label: "en LATAM" },
];

const cities = [
  "Guadalajara",
  "Bogotá",
  "Lima",
  "Medellín",
  "San Salvador",
];

export default function Hero() {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-home.jpg"
          alt="Interior acogedor de hogar latinoamericano"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 md:py-32 w-full">
        <div className="max-w-2xl">
          {/* Animated badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-white/95 px-4 py-2 rounded-full mb-6 shadow-primary-sm animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
            Plataforma de renta en América Latina
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6 animate-fade-in-up-delay-1">
            Tu hogar lejos de casa, con total confianza
          </h1>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 text-pretty animate-fade-in-up-delay-2">
            Conectamos propietarios con habitaciones disponibles y estudiantes o
            trabajadores que buscan alojamiento accesible y seguro.
          </p>

          {/* Search bar */}
          <div className="glass rounded-2xl p-2 shadow-primary-lg mb-8 animate-fade-in-up-delay-3">
            <div className="flex flex-col md:flex-row gap-2">
              {/* City selector */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/50 hover:bg-white/70 transition-colors">
                <MapPin size={20} className="text-primary shrink-0" />
                <div className="flex-1">
                  <label className="block text-xs font-medium text-foreground/60 mb-0.5">
                    Ciudad
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-transparent text-foreground font-medium text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="">Selecciona una ciudad</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date picker */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/50 hover:bg-white/70 transition-colors">
                <Calendar size={20} className="text-primary shrink-0" />
                <div className="flex-1">
                  <label className="block text-xs font-medium text-foreground/60 mb-0.5">
                    Fecha de entrada
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent text-foreground font-medium text-sm focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/50 hover:bg-white/70 transition-colors">
                <Wallet size={20} className="text-primary shrink-0" />
                <div className="flex-1">
                  <label className="block text-xs font-medium text-foreground/60 mb-0.5">
                    Presupuesto máximo
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: $500 USD/mes"
                    className="w-full bg-transparent text-foreground font-medium text-sm placeholder:text-foreground/40 focus:outline-none"
                  />
                </div>
              </div>

              {/* Search button */}
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-primary-md">
                <Search size={20} />
                <span className="hidden sm:inline">Buscar</span>
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up-delay-3">
            <a
              href="/registro"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-base px-7 py-4 rounded-full transition-all shadow-primary-md hover:shadow-primary-lg hover:-translate-y-0.5"
            >
              <span>Publicar mi cuarto</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#como-funciona"
              className="flex items-center justify-center gap-2 glass-dark hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-full transition-all"
            >
              <span>Ver cómo funciona</span>
            </a>
          </div>

          {/* Glass stat cards */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-xl px-5 py-4 flex items-center gap-3 shadow-primary-sm hover:shadow-primary-md transition-shadow"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-foreground/60 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorative image */}
      <div className="hidden lg:block absolute right-8 bottom-24 z-10 animate-float">
        <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-primary-lg transform -rotate-3">
          <Image
            src="/images/rooms/room-1.jpg"
            alt="Habitación acogedora disponible"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="glass rounded-lg px-3 py-2">
              <p className="text-foreground font-semibold text-sm">
                Desde $180/mes
              </p>
              <p className="text-foreground/70 text-xs">Guadalajara, MX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
