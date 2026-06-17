import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
import "./globals.css";

const stixTwoText = STIX_Two_Text({
  variable: "--font-stix-two-text",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tianchi Huang",
  description:
    "Software Engineer. M.S. Computer Science at Brown University. Incoming Software Engineer at Google.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stixTwoText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
