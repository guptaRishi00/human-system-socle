import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/homepage/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--heading-font",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Human Systems - The All-in-One HR SaaS Platform",
  description:
    "Human Systems empowers businesses with a scalable, secure, and modular HR platform.",
  icons: {
    icon: "/favicon2.png", // Point to the PNG instead
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
