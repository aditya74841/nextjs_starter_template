import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Antigravity Starter",
    template: "%s | Antigravity Starter",
  },
  description: "A premium, production-ready Next.js starter with Zustand, Shadcn, and Tailwind 4.",
  metadataBase: new URL("https://your-domain.com"), // Update this for production
  openGraph: {
    title: "Antigravity Starter",
    description: "Build faster with a solid Next.js foundation.",
    url: "/",
    siteName: "Antigravity Starter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antigravity Starter",
    description: "A premium, production-ready Next.js starter.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
