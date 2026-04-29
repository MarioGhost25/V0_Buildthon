"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { cities, type City } from "@/data/cities";

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=";

const popularCities = cities.filter((c) => c.popular);

// Stats derived from the full dataset for the teaser bar
const totalCities = cities.length;
const totalCountries = new Set(cities.map((c) => c.country)).size;

function PopularCityCard({
  city,
  index,
  variant,
}: {
  city: City;
  index: number;
  /** "hero" = tall primary card, "secondary" = shorter supporting card */
  variant: "hero" | "secondary";
}) {
  return (
    <li className={variant === "hero" ? "md:row-span-2" : ""}>
      <Link
        href={`/explorar?ciudad=${city.slug}&lat=${city.lat}&lng=${city.lng}&zoom=${city.zoom}`}
        aria-label={`Explorar habitaciones en ${city.name} — desde $${city.priceFrom}/mes`}
        className={[
          "group relative flex w-full overflow-hidden rounded-2xl shadow-sm",
          "hover:shadow-primary-lg transition-shadow duration-300",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2",
          variant === "hero"
            ? "aspect-[3/4] md:aspect-auto md:h-full min-h-[320px]"
            : "aspect-[4/3]",
        ].join(" ")}
      >
        {/* Background image */}
        <Image
          src={city.image}
          alt={city.description}
          fill
          sizes={
            variant === "hero"
              ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(60vw - 20px), calc(50vw - 32px)"
              : "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(40vw - 20px), calc(25vw - 24px)"
          }
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105 will-change-transform"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          priority={index < 2}
          loading={index < 2 ? "eager" : "lazy"}
          draggable={false}
        />

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"
        />

        {/* Popular badge */}
        <div className="absolute top-3 left-3">
          <div
            aria-hidden="true"
            className="flex items-center gap-1 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            <TrendingUp size={11} aria-hidden="true" />
            <span>Popular</span>
          </div>
        </div>

        {/* Card content */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <div className="flex items-center gap-1.5 text-white/75 text-xs mb-1">
            <MapPin size={11} aria-hidden="true" />
            <span>{city.country}</span>
          </div>

          <h3
            className={[
              "text-white font-bold text-balance leading-snug mb-2",
              "group-hover:text-primary transition-colors duration-200",
              variant === "hero" ? "text-2xl md:text-3xl" : "text-xl",
            ].join(" ")}
          >
            {city.name}
          </h3>

          <div className="glass rounded-xl px-3 py-2 inline-flex items-center gap-4">
            <div>
              <p className="text-foreground/55 text-xs leading-tight">Desde</p>
              <p className="text-foreground font-bold text-sm leading-tight">
                ${city.priceFrom}
                <span className="text-foreground/55 font-normal text-xs">/mes</span>
              </p>
            </div>
            <div className="w-px h-8 bg-border" aria-hidden="true" />
            <div>
              <p className="text-foreground/55 text-xs leading-tight">Habitaciones</p>
              <p className="text-foreground font-semibold text-sm leading-tight">
                {city.listings}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function FeaturedCities() {
  // Expect exactly 2 popular cities; hero = index 0, secondary = rest
  const [hero, ...secondaries] = popularCities;

  return (
    <section
      id="ciudades"
      className="py-24 bg-muted-bg"
      aria-labelledby="ciudades-heading"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Disponible ahora
            </span>
            <h2
              id="ciudades-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance"
            >
              Ciudades destacadas
            </h2>
            <p className="text-muted text-base mt-3 max-w-md leading-relaxed">
              Ya puedes encontrar habitación en estas ciudades. Pronto llegamos a{" "}
              <strong className="text-foreground font-semibold">
                {totalCities} ciudades
              </strong>{" "}
              en {totalCountries} países de Latinoamérica.
            </p>
          </div>

          {/* Desktop "Ver todas" button */}
          <Link
            href="/ciudades"
            className={[
              "hidden md:inline-flex items-center gap-2 shrink-0",
              "text-primary font-semibold text-sm border-2 border-primary",
              "px-5 py-2.5 rounded-full transition-all",
              "hover:bg-primary hover:text-white hover:shadow-primary-md",
              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Ver todas las ciudades
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Popular city grid — hero left, secondaries stacked right */}
        <ul
          role="list"
          aria-label="Ciudades destacadas"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0"
          style={{ gridTemplateRows: "auto" }}
        >
          {hero && (
            <PopularCityCard city={hero} index={0} variant="hero" />
          )}
          {secondaries.map((city, i) => (
            <PopularCityCard key={city.slug} city={city} index={i + 1} variant="secondary" />
          ))}
        </ul>

        {/* Teaser strip — coming-soon countries */}
        <div
          className="mt-6 rounded-2xl bg-card border border-border px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          role="complementary"
          aria-label="Próximas ciudades"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-primary" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">
                Próximamente en toda Latinoamérica
              </p>
              <p className="text-xs text-muted mt-0.5 truncate">
                México · Colombia · Perú · Chile · Argentina · y más
              </p>
            </div>
          </div>
          <Link
            href="/ciudades"
            className={[
              "shrink-0 inline-flex items-center gap-2 text-sm font-semibold",
              "text-primary hover:text-white hover:bg-primary",
              "px-4 py-2 rounded-full border-2 border-primary transition-all",
              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Explorar todas
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile "Ver todas" button */}
        <div className="mt-6 md:hidden text-center">
          <Link
            href="/ciudades"
            className={[
              "inline-flex items-center gap-2 text-primary font-semibold text-sm",
              "border-2 border-primary px-6 py-3 rounded-full transition-all",
              "hover:bg-primary hover:text-white",
              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Ver todas las ciudades
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
