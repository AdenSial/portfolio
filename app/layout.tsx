import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aden Sial | Backend • AI • DevOps",
  description:
    "Portfolio of Aden Sial, Computer Science graduate focused on backend engineering, AI/ML, and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}