import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminate",
  description: "A 2D Shooter Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-neutral-900 w-dvw overflow-hidden center h-dvh text-white"
      >
        {children}
      </body>
    </html>
  );
}
