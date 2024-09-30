import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://factjano.com"),
  title: "FactJano: A beautiful fact and micro learning app, powered by AI",
  description:
    "A fun to use app to discover amazing random facts on various topics such as science, history, animals, AI, food, and more.",
  applicationName: "FactJano",
  keywords: [
    "Fact app",
    "best fact app",
    "Fun facts",
    "Random facts",
    "Science trivia",
    "History tidbits",
    "AI insights",
    "Technology curiosities",
    "Educational app",
    "Interesting discoveries",
    "Curated information",
    "Fascinating knowledge",
    "Unique insights",
    "Quirky discoveries",
    "Fact exploration",
    "Information delight",
    "Diverse facts",
    "Engaging learning",
    "FactJano app",
    "Fact discovery tool",
    "Entertaining knowledge",
    "Varied trivia insights",
  ],
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
