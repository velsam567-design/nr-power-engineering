import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NR Power Engineering Services",
    template: "%s | NR Power Engineering Services",
  },
  description:
    "Reliable engineering solutions for power and process industries. Specialized services for rotary and static equipment.",
  keywords: [
    "NR Power Engineering Services",
    "power engineering",
    "rotary equipment",
    "static equipment",
    "turbine services",
    "O&M",
    "erection commissioning",
    "overhauling",
  ],
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
