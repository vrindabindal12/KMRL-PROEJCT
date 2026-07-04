"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutVisibility({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return <main className="flex-grow">{children}</main>;
  }
  
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
