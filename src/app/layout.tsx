import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACM at SFSU | Association for Computing Machinery",
  icons: "/assets/logos/avatar-logo.png",
  description:
    "The premiere computer science club at San Francisco State University. We foster a community of innovation, collaboration, and growth through technical workshops, hackathons, and networking events. 🍃",
  keywords: [
    "ACM",
    "San Francisco State University",
    "Computer Science",
    "SFSU",
    "Tech Club",
    "Coding Club",
    "SFSU",
    "SF Hacks",
    "CS",
    "Hackathons",
    "Coding",
    "Software Development",
  ],
  openGraph: {
    title: "ACM at SFSU | The premiere computer science club at SFSU",
    description: "Party hard. Code harder.",
    url: "https://www.sfsuacm.org/",
    siteName: "ACM at SFSU",
    images: [
      {
        url: "/assets/images/bonfire.jpg",

        alt: "ACM at SFSU - Party Hard. Code Harder.",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  robots: "index, follow",
  themeColor: "#4A74FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
