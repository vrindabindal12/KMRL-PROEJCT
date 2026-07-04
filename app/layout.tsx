import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutVisibility from "@/components/LayoutVisibility";
import { Inter, Plus_Jakarta_Sans, Source_Serif_4, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "KMRL - Premium Creative On Demand",
  description: "A flexible design partnership for founders, brands, and agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("force-light", "font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${sourceSerif4.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <LayoutVisibility>{children}</LayoutVisibility>
        </div>
      </body>
    </html>
  );
}
