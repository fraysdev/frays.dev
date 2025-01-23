import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frays.dev",
  description: "Welcome to frays.dev! Personal website for anything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
