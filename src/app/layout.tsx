import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Gurudas Bhardwaj - Software Developer Portfolio",
  description: "My Portfolio website, showcases my strength, skills and projects as a software developer. Built using Next.js, Tailwind CSS, and React Icons. This portfolio highlights my expertise in frontend and backend development, demonstrating my ability to create dynamic and responsive web applications. Explore my projects, skills, and experience to see how I can contribute to your next software development endeavor - GURUDAS BHARDWAJ",
  authors : [
    {
      name : "Gurudas Bhardwaj",
      url : "https://linkedin.com/in/gurudas-bhardwaj-9b1a7920b/"
    }
  ]
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
      </body>
    </html>
  );
}
