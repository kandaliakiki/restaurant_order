import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "../globals.css";
import Bottombar from "@/components/shared/Bottombar";
import TopBar from "@/components/shared/TopBar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--oswald",
});

export const metadata: Metadata = {
  title: "Restaurant_App",
  description: "Fully Functional Food Ordering App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} ${oswald.variable}`}>
          <main className="flex flex-col overflow-auto min-h-screen bg-white-background px-4 py-2 font-oswald font-medium content-container">
            <TopBar></TopBar>
            {children}
          </main>
          <Bottombar></Bottombar>
        </body>
      </html>
    </ClerkProvider>
  );
}
