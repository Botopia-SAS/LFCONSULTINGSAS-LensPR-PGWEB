"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function NewsCard({ item, text }: { item: any; text: string }) {
  const [open, setOpen] = useState(false);
  const truncatedDescription =
    item.description.length > 150
      ? `${item.description.substring(0, 150)}...`
      : item.description;

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col hover:shadow-lg transform hover:scale-[1.01] transition duration-200">
      {item.mediaUrl && (
        <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
          <img
            src={item.mediaUrl}
            alt={item.title ?? ""}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className="mt-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
          {item.title}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 flex-1">
          {truncatedDescription}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
          {item.editorial}
        </p>
        {item.description.length > 150 && (
          <Button variant="link" onClick={() => setOpen(true)}>
            {text}
          </Button>
        )}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              {item.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            {/* Imagen dentro del modal */}
            {item.mediaUrl && (
              <div className="w-full h-64 mb-10">
                <img src={item.mediaUrl} alt={item.title ?? ""} />
              </div>
            )}
            <p className="text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
            {item.news_link && (
              <a
                href={item.news_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400"
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
