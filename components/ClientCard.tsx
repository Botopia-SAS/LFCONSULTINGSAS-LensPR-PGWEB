"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function ClientCard({ item, text }: { item: any; text: string }) {
  const [open, setOpen] = useState(false);
  const truncatedDescription =
    item.description.length > 150
      ? `${item.description.substring(0, 150)}...`
      : item.description;

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4 flex flex-col hover:shadow-xl transform hover:scale-[1.02] transition duration-300">
      {item.media_url && (
        <div className="w-full h-48 overflow-hidden dark:bg-zinc-700 flex items-center justify-center rounded-lg">
          <img
            src={item.media_url}
            alt={item.name ?? "Client image"}
            width={300}
            height={300}
            className="w-full h-full object-fill rounded-lg"
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
            {text}
          </Button>
        )}
        {item.jobTitle && (
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            {item.jobTitle} , {item.country}
          </p>
        )}
      </div>

      {/* Modal para mostrar la descripción completa */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">{item.name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            {item.media_url && (
              <div className="w-full h-64 flex justify-center items-center">
                <img
                  src={item.media_url}
                  alt={item.name ?? "Client image"}
                  width={400}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            )}
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
