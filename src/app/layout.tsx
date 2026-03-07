import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata : Metadata = {
  title: "Gurudas Bhardwaj - Portfolio",
  description: "Portfolio built with Next.js",
  openGraph: {
    title: "Gurudas Bhardwaj - Portfolio",
    description: "Full-stack developer portfolio built with Next.js, This showcases my projects, skills, and experience in Software Development Field.",
    url: "https://portfolio-sand-seven-50.vercel.app",
    siteName: "Gurudas Bhardwaj - Portfolio",
    images: [
      {
        url: "https://portfolio-sand-seven-50.vercel.app/Preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
