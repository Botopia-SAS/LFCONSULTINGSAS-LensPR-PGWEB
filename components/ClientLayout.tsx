"use client";
import { useState, useEffect, ReactNode } from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlockingModal from "@/components/BlockingModal";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {blocked && <BlockingModal />}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer locale={""} />
    </>
  );
}
