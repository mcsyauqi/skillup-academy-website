import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "SkillUp Academy | Level Up Your Career with Expert-Led Courses",
  description: "Learn from industry experts anytime, anywhere. Join 50,000+ professionals who've transformed their careers with our premium online courses in digital skills, business, and technology.",
  keywords: ["online courses", "e-learning", "digital skills", "career development", "professional training"],
  authors: [{ name: "SkillUp Academy" }],
  openGraph: {
    title: "SkillUp Academy | Level Up Your Career",
    description: "Learn from industry experts anytime, anywhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
