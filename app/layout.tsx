import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `
  (function () {
    try {
      const storedTheme = window.localStorage.getItem("theme");
      const isDark = storedTheme ? storedTheme === "dark" : true;
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    } catch (e) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }
  })();
`;

export const metadata: Metadata = {
  title: "Phuc Tran | Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, and TypeScript. Open to junior/entry-level roles.",
  openGraph: {
    title: "Phuc Tran | Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript. Open to junior/entry-level roles.",
    url: "https://tranhoangphucttb.dev",
    siteName: "Phuc Tran Portfolio",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuc Tran | Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
