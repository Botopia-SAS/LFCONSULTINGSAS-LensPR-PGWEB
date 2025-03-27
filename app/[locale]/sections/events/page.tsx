import { getTranslations } from "next-intl/server";
import { getEvents } from "../../(helpers)/getEvents";
import EventsGrid from "@/components/EventsGrid";
export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await Promise.resolve(params).then((res) => res);
  const locale = resolvedParams?.locale;
  
  const t = await getTranslations("events");
  const events = await getEvents(locale);
  return (
    <section className="bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          {t("title")}
        </h1>
        {events.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300">
            {t("noEvents")}
          </p>
        ) : (
          <EventsGrid
            durationText={t("hours")}
            events={events}
            text={t("register")}
            longText={t("seeMore")}
          />
        )}
      </div>
    </section>
  );
}
