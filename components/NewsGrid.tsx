import NewsCard from "./NewsCard";

export default function NewsGrid({ news, text }: { news: any[], text: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} text={text} />
      ))}
    </div>
  );
}
