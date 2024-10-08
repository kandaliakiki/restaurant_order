import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "../globals.css";
import Bottombar from "@/components/shared/Bottombar";
import TopBar from "@/components/shared/TopBar";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col overflow-auto min-h-screen bg-white-background px-4 py-2 font-oswald font-medium content-container">
        <TopBar></TopBar>
        {children}
      </main>
      <Bottombar></Bottombar>
    </>
  );
}
