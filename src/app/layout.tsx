import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://courtneybeka.com'),
  title: {
    default: "Courtney Beka | UX/UI Designer & Brand Strategist",
    template: "%s | Courtney Beka"
  },
  description: "Professional portfolio of Courtney Beka, featuring UX/UI design, branding, and creative work.",
  keywords: ["UX Design", "UI Design", "Brand Strategy", "Design Portfolio", "Web Design", "Mobile App Design"],
  creator: "Courtney Beka",
  authors: [{ name: "Courtney Beka" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://courtneybeka.com",
    title: "Courtney Beka | UX/UI Designer & Brand Strategist",
    description: "Professional portfolio of Courtney Beka, featuring UX/UI design, branding, and creative work.",
    siteName: "Courtney Beka Portfolio",
    images: [
      {
        url: "/img/general/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Courtney Beka Portfolio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courtney Beka | UX/UI Designer & Brand Strategist",
    description: "Professional portfolio of Courtney Beka, featuring UX/UI design, branding, and creative work.",
    images: ["/img/general/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
