import EventCard from "./EventCard";

export default function EventsGrid({
  events,
  text,
  durationText,
  longText,
}: {
  events: any[];
  text: string;
  durationText: string;
  longText: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((item) => (
        <EventCard
          key={item.id}
          item={item}
          text={text}
          longText={longText}
          durationText={durationText}
        />
      ))}
    </div>
  );
}
