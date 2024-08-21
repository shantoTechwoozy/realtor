"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { ClerkProvider } from '@clerk/nextjs';
import CookieConsent from "@/components/Cookies/page";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <ClerkProvider>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            <CookieConsent /> {/* Include the CookieConsent component */}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
