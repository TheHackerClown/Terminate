import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminate",
  description: "A 2D Shooter Game",
  applicationName: "Terminate Shooter",
  generator: "TheHackerClown",
  creator: "TheHackerClown",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "TheHackerClown", url: "https://github.com/TheHackerClown" }]
  
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
