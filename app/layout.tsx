import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FactJano",
  description:
    "Amazing facts, daily new facts and facts for youtube channel all on FactJano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/factjano_logo.png" sizes="any" />
      <body className={inter.className}>
        <section className="py-2 px-4 sm:px-16 sm:py-6">
          <nav className="pb-14">
            <Header />
            {/* <div className="h-3"></div>
            <hr /> */}
          </nav>
          {children}
        </section>
      </body>
    </html>
  );
}
