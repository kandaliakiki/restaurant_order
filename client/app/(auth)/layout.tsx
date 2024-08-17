import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex  bg-black justify-center items-center min-h-screen">
      {children}
    </div>
  );
}
