import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Tasnim Ghaleb | Software Development & Data Analytics",
    template: "%s | Tasnim Ghaleb",
  },

  description:
    "Explore the portfolio of Tasnim Ghaleb, featuring projects in Python development, data analytics, automation, and software engineering.",

  applicationName: "Tasnim Ghaleb Portfolio",

  keywords: [
    "Tasnim Ghaleb",
    "Software Development",
    "Data Analytics",
    "Python",
    "Data Science",
    "Artificial Intelligence",
    "Flutter",
    "Software Engineering",
    "Portfolio",
  ],

  authors: [{ name: "Tasnim Ghaleb" }],

  creator: "Tasnim Ghaleb",

  openGraph: {
    title: "Tasnim Ghaleb | Software Development & Data Analytics",
    description:
      "A portfolio showcasing practical projects in data analytics, Python automation, and software engineering.",
    siteName: "Tasnim Ghaleb Portfolio",
    type: "website",
    locale: "en_US",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}