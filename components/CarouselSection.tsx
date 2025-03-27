import Carousel from "./Carousel";

const logos = [
  { src: "/images/client1.png", alt: "client 1" },
  { src: "/images/client2.png", alt: "client 2" },
  { src: "/images/client3.png", alt: "client 3" },
  { src: "/images/client4.png", alt: "client 4" },
  { src: "/images/client5.png", alt: "client 5" },
  { src: "/images/client6.png", alt: "client 6" },
  { src: "/images/client7.png", alt: "client 7" },
  { src: "/images/client8.png", alt: "client 8" },
  { src: "/images/client9.png", alt: "client 9" },
  { src: "/images/client10.png", alt: "client 10" },
  { src: "/images/client11.png", alt: "client 11" },
  { src: "/images/client12.png", alt: "client 12" },
];

const nonImportantBrands = [
  { src: "/images/cliente13.png", alt: "cliente 13" },
  { src: "/images/cliente14.png", alt: "cliente 14" },
  { src: "/images/cliente15.png", alt: "cliente 15" },
  { src: "/images/cliente16.png", alt: "cliente 16" },
  { src: "/images/cliente17.png", alt: "cliente 17" },
  { src: "/images/cliente18.png", alt: "cliente 18" },
  { src: "/images/cliente19.png", alt: "cliente 19" },
  { src: "/images/cliente20.png", alt: "cliente 20" },
  { src: "/images/cliente21.png", alt: "cliente 21" },
  { src: "/images/cliente22.png", alt: "cliente 22" },
  { src: "/images/cliente23.png", alt: "cliente 23" },
  { src: "/images/cliente24.png", alt: "cliente 24" },
  { src: "/images/cliente25.png", alt: "cliente 25" },
  { src: "/images/cliente26.png", alt: "cliente 26" },
  { src: "/images/cliente27.png", alt: "cliente 27" },
  { src: "/images/cliente28.png", alt: "cliente 28" },
];

export default function CarouselSection({
  title,
  subtitle,
  cta,
  locale,
}: {
  title: string;
  subtitle: string;
  cta: string;
  locale: string;
}) {
  // Duplicamos el array para simular el loop infinito
  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-10  bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold uppercase">{title}</h2>
        {/* Contenedor del carrusel */}
        <Carousel logos={infiniteLogos} />
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold uppercase mt-8">{subtitle}</h3>
            <div className="flex flex-wrap justify-center gap-10 mt-4 my-8 w-full px-4">
            {nonImportantBrands.map((brand, idx) => (
              <img
              key={idx}
              src={brand.src}
              alt={brand.alt}
              className="mx-auto size-28"
              />
            ))}
            </div>
        </div>
        <a
          href={`/${locale}/sections/contact`}
          className="my-8 bg-orange-400 dark:bg-orange-400 text-zinc-900 border border-zinc-900 dark:text-zinc-900 text-2xl py-2 px-8 sm:px-8 rounded hover:bg-zinc-900 hover:text-white transition-colors"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
