import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

import SharedLayout from "@/components/shared/SharedLayout";

export default function HighestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <SharedLayout>
        <html lang="en">
          <body>{children}</body>
        </html>
      </SharedLayout>
    </ViewTransitions>
  );
}
