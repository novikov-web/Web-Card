import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const fontLexend = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Card",
  description: "Info card created using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={fontLexend.className}>{children}</body>
    </html>
  );
}
