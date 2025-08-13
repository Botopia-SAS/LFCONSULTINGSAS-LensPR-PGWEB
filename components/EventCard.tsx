"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function EventCard({
  item,
  text,
  durationText,
  longText,
}: {
  item: any;
  text: string;
  durationText: string;
  longText: string;
}) {
  const [open, setOpen] = useState(false);
  const truncatedDescription =
    item.description.length > 150
      ? `${item.description.substring(0, 150)}...`
      : item.description;

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col hover:shadow-lg transform hover:scale-[1.01] transition duration-200">
      {item.media_url && (
        <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-zinc-700 flex items-center justify-center rounded-md">
          <img
            src={item.media_url}
            alt={item.name ?? ""}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="mt-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
          {item.name}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 flex-1">
          {truncatedDescription}
        </p>
        {item.description.length > 150 && (
          <Button variant="link" onClick={() => setOpen(true)}>
            {longText}
          </Button>
        )}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400 italic">
          {item.location && <p className="truncate">{item.location}</p>}
          {(item.start_date || item.date_time) && (
            <p className="">
              {item.start_date || new Date(item.date_time).toLocaleDateString("es-ES", {
                timeZone: "UTC",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          )}
          {item.cost && <p className="truncate">{item.cost}</p>}
          {(item.duration || item.time) && (
            <p className="">
              {item.duration || item.time} {item.duration ? '' : durationText}
            </p>
          )}
          {item.event_type && (
            <p className="col-span-2 text-center bg-gray-100 dark:bg-zinc-700 rounded px-2 py-1">
              {item.event_type === 'online' ? '🌐 Virtual' : 
               item.event_type === 'hybrid' ? '🔗 Híbrido' : 
               '📍 Presencial'}
            </p>
          )}
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">{item.name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            {item.media_url && (
              <div className="w-full h-64 rounded-md overflow-hidden">
                <img
                  src={item.media_url}
                  alt={item.name ?? ""}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
              {item.location && (
                <p><strong>📍 Ubicación:</strong> {item.location}</p>
              )}
              {(item.start_date || item.date_time) && (
                <p><strong>📅 Fecha:</strong> {item.start_date || new Date(item.date_time).toLocaleDateString("es-ES")}</p>
              )}
              {item.duration && (
                <p><strong>⏱️ Duración:</strong> {item.duration}</p>
              )}
              {item.cost && (
                <p><strong>💰 Costo:</strong> {item.cost}</p>
              )}
              {item.event_type && (
                <p><strong>📋 Tipo:</strong> {
                  item.event_type === 'online' ? '🌐 Evento Virtual' : 
                  item.event_type === 'hybrid' ? '🔗 Evento Híbrido' : 
                  '📍 Evento Presencial'
                }</p>
              )}
              {item.capacity && (
                <p><strong>👥 Capacidad:</strong> {item.capacity} personas</p>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
            {item.register_link && (
              <a
                href={item.register_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 underline"
              >
                {text}
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
