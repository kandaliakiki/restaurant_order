import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

import SharedLayout from "@/components/shared/SharedLayout";
import { Inter, Oswald } from "next/font/google";
import { Metadata } from "next";

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

export default function HighestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <SharedLayout>
        <html lang="en">
          <body className={`${inter.className} ${oswald.variable}`}>
            {children}
          </body>
        </html>
      </SharedLayout>
    </ViewTransitions>
  );
}
