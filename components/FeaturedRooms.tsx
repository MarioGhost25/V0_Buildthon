import Image from "next/image";
import { BadgeCheck, Wifi, Bath, MapPin, Star } from "lucide-react";

const rooms = [
  {
    id: 1,
    image: "/images/rooms/room-1.jpg",
    title: "Habitación acogedora cerca del centro",
    city: "Guadalajara",
    country: "México",
    price: 180,
    rating: 4.9,
    reviews: 23,
    verified: true,
    amenities: ["wifi", "bath"],
  },
  {
    id: 2,
    image: "/images/rooms/room-2.jpg",
    title: "Cuarto luminoso con escritorio",
    city: "Bogotá",
    country: "Colombia",
    price: 220,
    rating: 4.8,
    reviews: 18,
    verified: true,
    amenities: ["wifi"],
  },
  {
    id: 3,
    image: "/images/rooms/room-3.jpg",
    title: "Suite con baño privado",
    city: "Lima",
    country: "Perú",
    price: 320,
    rating: 5.0,
    reviews: 31,
    verified: true,
    amenities: ["wifi", "bath"],
  },
  {
    id: 4,
    image: "/images/rooms/room-4.jpg",
    title: "Estudio compacto bien equipado",
    city: "Medellín",
    country: "Colombia",
    price: 195,
    rating: 4.7,
    reviews: 12,
    verified: false,
    amenities: ["wifi"],
  },
  {
    id: 5,
    image: "/images/rooms/room-5.jpg",
    title: "Habitación premium con balcón",
    city: "Guadalajara",
    country: "México",
    price: 380,
    rating: 4.9,
    reviews: 27,
    verified: true,
    amenities: ["wifi", "bath"],
  },
  {
    id: 6,
    image: "/images/rooms/room-6.jpg",
    title: "Loft estilo industrial",
    city: "Bogotá",
    country: "Colombia",
    price: 290,
    rating: 4.8,
    reviews: 15,
    verified: true,
    amenities: ["wifi"],
  },
];

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  bath: Bath,
};

export default function FeaturedRooms() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Descubre tu próximo hogar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            Habitaciones destacadas
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Explora habitaciones verificadas y listas para mudarte. Todas con
            contrato digital y seguridad garantizada.
          </p>
        </div>

        {/* Rooms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rooms.map((room) => (
            <a
              key={room.id}
              href="#"
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-primary-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image container */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Verified badge */}
                {room.verified && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-primary font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">
                    <BadgeCheck size={14} />
                    <span>Verificado</span>
                  </div>
                )}

                {/* Price tag */}
                <div className="absolute bottom-3 right-3 glass rounded-lg px-3 py-1.5">
                  <span className="text-foreground font-bold">
                    ${room.price}
                  </span>
                  <span className="text-foreground/60 text-sm">/mes</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {room.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-muted text-sm mb-3">
                  <MapPin size={14} />
                  <span>
                    {room.city}, {room.country}
                  </span>
                </div>

                {/* Rating and amenities */}
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <Star
                      size={14}
                      className="text-primary fill-primary"
                    />
                    <span className="font-semibold text-foreground text-sm">
                      {room.rating}
                    </span>
                    <span className="text-muted text-sm">
                      ({room.reviews})
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="flex items-center gap-2">
                    {room.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity];
                      return (
                        <div
                          key={amenity}
                          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                          title={amenity === "wifi" ? "WiFi incluido" : "Baño privado"}
                        >
                          <Icon size={14} className="text-muted" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-full transition-all shadow-primary-md hover:shadow-primary-lg hover:-translate-y-0.5"
          >
            <span>Ver todas las habitaciones</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
