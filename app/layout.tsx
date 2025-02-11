import type { Metadata } from "next";
import { Work_Sans,Inter } from "next/font/google";
import "./globals.css";

const work_sans = Work_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurotry",
  description: "Best ever ecommerce site for your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>{children}</body>
    </html>
  );
}
