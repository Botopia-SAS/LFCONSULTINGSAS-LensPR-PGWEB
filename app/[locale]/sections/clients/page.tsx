import { getTranslations } from "next-intl/server";
import { getClients } from "../../(helpers)/getClients";
import ClientsGrid from "@/components/ClientsGrid";

export default async function ClientsPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const clients = await getClients(locale);
  const t = await getTranslations("clients");
  return (
    <section className="bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          {t("title")}
        </h1>
        {clients.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300">
            {t("noClients")}
          </p>
        ) : (
          <ClientsGrid clients={clients} text={t("seeMore")} />
        )}
      </div>
    </section>
  );
}
