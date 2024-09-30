import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FactJano Terms of Use",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 py-2 md:px-16 lg:px-32 xl:px-48">
      {children}
    </section>
  );
}
