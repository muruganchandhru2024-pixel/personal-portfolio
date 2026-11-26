import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chandhru-exe.vercel.app"),
  title: "CHANDHRU.EXE — Beyond the Interface | Chandhru M",
  description:
    "Production-grade interactive developer portfolio of Chandhru M. Computer Science Engineering student at Sri Krishna College of Technology, Web Development Intern at FortuMars AI Technologies, specialized in React, Python, Computer Vision & Modern Systems.",
  keywords: [
    "Chandhru M",
    "CHANDHRU.EXE",
    "Beyond the Interface",
    "Computer Science Engineer",
    "Web Developer",
    "React Developer",
    "Python Developer",
    "Sri Krishna College of Technology",
    "SKCT Coimbatore",
    "FortuMars AI Technologies",
    "VisionFlow",
    "Computer Vision",
    "Three.js Portfolio",
  ],
  authors: [{ name: "Chandhru M", url: "https://www.linkedin.com/in/chandhru-m" }],
  creator: "Chandhru M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chandhru-exe.vercel.app",
    title: "CHANDHRU.EXE — Beyond the Interface | Chandhru M",
    description:
      "Interactive 3D Portfolio of Chandhru M — Computer Science Engineering Student & Web Developer.",
    siteName: "CHANDHRU.EXE",
    images: [
      {
        url: "/chandhru-profile.jpg",
        width: 800,
        height: 800,
        alt: "Chandhru M - Digital Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHANDHRU.EXE — Beyond the Interface",
    description:
      "Engineering Ideas Into Digital Reality. Interactive 3D Developer Portfolio.",
    images: ["/chandhru-profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-brand-deep text-brand-textPrimary antialiased selection:bg-brand-cyan/20 selection:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
