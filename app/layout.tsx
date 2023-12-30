import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FactJano: Explore Amazing Facts about AI, Life, YouTube & More",
  description:
    "A fun to use app to discover amazing random facts on various topics such as science, history, animals, AI, food, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className="py-2 px-4 sm:px-16 sm:py-6">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
