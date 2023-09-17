import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.seekvisualartist.com/"),
    title: "G Goutham Reddy",
    description:
    "Hobby Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
    generator: "Next.js",
    applicationName: "G Goutham Reddy",
    keywords: [
        "G Goutham Reddy",
        "SeekVA",
        "Seek Design",
        "Seek Visuals",
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "astro",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "germany",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "G Goutham Reddy - Developer",
        description:
      "Hobby Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
        url: "https://www.seekvisualartist.com/",
        siteName: "www.seekvisualartist.com",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "G Goutham Reddy - Developer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "G Goutham Reddy - Developer",
        description:
      "Hobby Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
        creator: "SeekVFX",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
