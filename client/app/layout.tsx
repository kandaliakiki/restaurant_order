import "./globals.css";

import SharedLayout from "@/components/shared/SharedLayout";

export default function HighestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SharedLayout>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SharedLayout>
  );
}
