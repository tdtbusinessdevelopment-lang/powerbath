import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PowerBath – The Ultimate Cold Bath Therapy",
  description:
    "PowerBath is a sleek, modern cold plunge system that brings pro-grade recovery and wellness into your personal space. Revitalize your body and reclaim energy.",
  keywords: "cold plunge, cold bath, ice bath, recovery, wellness, PowerBath",
  openGraph: {
    title: "PowerBath – The Ultimate Cold Bath Therapy",
    description:
      "Pro-level cold plunge at home. Faster recovery, stronger performance, everyday wellness.",
    type: "website",
  },
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
