"use client";
import React from "react";

export default function BlockingModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-2">¡Ups, parece que el hosting se quedó dormido!</h2>
        <p className="mb-4">
          No podemos cargar esta página en este momento.  
          Por favor, ponte en contacto con tu administrador para reactivar el servicio.
        </p>
        {/* No incluimos botón de cierre ni onClick fuera */}
      </div>
    </div>
  );
}
