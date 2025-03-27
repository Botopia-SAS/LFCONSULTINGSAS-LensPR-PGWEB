import { getTranslations } from "next-intl/server";
import { getNewsByLocale } from "../../(helpers)/getNews";
import NewsGrid from "@/components/NewsGrid";
import { use } from "react";
export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await Promise.resolve(params).then((res) => res);
  const locale = resolvedParams?.locale;

  const t = await getTranslations("press");
  const news = await getNewsByLocale(locale);

  return (
    <section className="bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          {t("title")}
        </h1>
        {news.length === 0 ? (
          <p className="text-center text-2xl text-gray-700 dark:text-gray-300">
            {t("noNews")}
          </p>
        ) : (
          <NewsGrid news={news} text={t("seeMore")} />
        )}
      </div>
    </section>
  );
}
