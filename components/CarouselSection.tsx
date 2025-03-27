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

export default function CarouselSection({ title, cta, locale }: { title: string, cta: string, locale: string }) {
  // Duplicamos el array para simular el loop infinito
  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-10  bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold uppercase">{title}</h2>
        {/* Contenedor del carrusel */}
        <Carousel logos={infiniteLogos} />
        <a href={`/${locale}/sections/contact`} className="my-8 bg-orange-400 dark:bg-orange-400 text-zinc-900 border border-zinc-900 dark:text-zinc-900 py-2 px-4 sm:px-6 rounded hover:bg-zinc-900 hover:text-white transition-colors">{cta}</a>
      </div>
    </section>
  );
}
