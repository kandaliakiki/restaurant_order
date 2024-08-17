import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "../../globals.css";
import Bottombar from "@/components/shared/Bottombar";
import TopBar from "@/components/shared/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col overflow-auto min-h-screen bg-vibrant-pink font-oswald font-medium ">
      {children}
    </main>
  );
}
