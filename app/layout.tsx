import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eufrásio Jaime | Full Stack Developer",

  description:
    "Portfolio of Eufrásio Jaime, a full stack developer specialized in React, Next.js, TypeScript, Node.js, and cloud infrastructure. Building modern and scalable web applications.",

  keywords: [
    "Eufrásio Jaime",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio",
    "Mozambique Developer",
    "Nampula",
  ],

  authors: [
    {
      name: "Eufrásio Jaime",
      url: "https://eufrasiojaime.saphirat.co.mz",
    },
  ],

  creator: "Eufrásio Jaime",
  publisher: "Eufrásio Jaime",

  metadataBase: new URL("https://eufrasiojaime.saphirat.co.mz"),

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "pt-PT": "/pt",
    },
  },

  openGraph: {
    title: "Eufrásio Jaime | Full Stack Developer",

    description:
      "Building exceptional digital experiences through clean code and thoughtful design.",

    url: "https://eufrasiojaime.saphirat.co.mz",

    siteName: "Eufrásio Jaime Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Eufrásio Jaime Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Eufrásio Jaime | Full Stack Developer",

    description:
      "Building exceptional digital experiences through clean code and thoughtful design.",

    images: ["/me.jpeg"],

    creator: "@eufrasiojaime",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
