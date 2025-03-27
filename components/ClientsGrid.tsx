import ClientCard from "./ClientCard";

export default function ClientsGrid({
  clients,
  text,
}: {
  clients: any[];
  text: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {clients.map((item) => (
        <ClientCard key={item.id} item={item} text={text} />
      ))}
    </div>
  );
}
