import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profit Partner",
  description:
    "Leading facility management company in Chennai, providing comprehensive services including security, housekeeping, electrical, plumbing, STP, WTP, and more. Serving Tamilnadu, Pondicherry, Andhra Pradesh, Telangana, Karnataka, and Delhi.",
  keywords:
    "facility management, security services, housekeeping, electrical services, plumbing services, STP, WTP, swimming pool maintenance, gym maintenance, Chennai facility management",
  openGraph: {
    title: "Profit Partner",
    description:
      "Profit Partner is a leading facility management company in Chennai, providing comprehensive services including security, housekeeping, electrical, plumbing, STP, WTP, and more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
