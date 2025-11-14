import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nested Menu Drawer",
  description: "An accessible, animated drawer component with nested menu system",
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

