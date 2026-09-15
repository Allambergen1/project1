import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProLaw AI | Adaptive Legal Learning",
  description: "AI-powered adaptive learning and legal case simulation for criminal law and criminal procedure.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
