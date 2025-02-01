import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allegory",
  description: "Allegory of the Rave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}