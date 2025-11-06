import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neuronova | Future-Ready Learning",
  description:
    "Neuronova is the modern learning platform helping ambitious students master in-demand skills with personalized mentorship and social learning journeys."
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
