import type { Metadata } from "next";
import "./globals.css";
import "./3d-effects.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "GrowthGrid — Turn Local Searches Into Paying Customers",
  description: "GrowthGrid helps local service businesses generate more customers through premium websites, WhatsApp lead systems, and business automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
