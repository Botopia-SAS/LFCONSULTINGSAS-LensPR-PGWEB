// app/[locale]/sections/press/page.tsx
import { getTranslations } from 'next-intl/server';
import { getNewsByLocale } from '../../(helpers)/getNews';

export default async function PressPage(props: { params: Promise<{ locale: string }> }) {
  const awaitedParams = await props.params;
  const { locale } = awaitedParams;
  
  // Obtenemos las traducciones para el namespace "press"
  const t = await getTranslations('press');
  
  // Obtenemos las noticias según el locale
  const news = await getNewsByLocale(locale);

  return (
    <section className="bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          {t('title')}
        </h1>
        {news.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300">
            {t('noNews')}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col hover:shadow-lg transform hover:scale-[1.01] transition duration-200"
              >
                {/* Imagen */}
                {item.mediaUrl && (
                  <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
                    <img
                      src={item.mediaUrl}
                      alt={item.title ?? ''}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                {/* Contenido de la tarjeta */}
                <div className="mt-4 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 flex-1">
                    {item.description}
                  </p>
                  {item.editorial && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      {item.editorial}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
