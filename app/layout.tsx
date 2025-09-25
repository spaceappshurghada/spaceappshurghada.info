import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "NASA Space Apps Hurghada",
    description: "Join the world's largest global hackathon in Hurghada, Egypt. October 4-5, 2025 at SUNRISE Garden Beach Resort. Innovate using NASA's open data to solve problems on Earth and in space.",
    keywords: "NASA, Space Apps, NASA Space Apps, NASA Space Apps Hurghada, challenge, hackathon, hurghada, hurghada hackathon, Egypt, space, innovation, technology",
    authors: [{ name: "NASA Space Apps Hurghada" }],
    openGraph: {
        title: "NASA Space Apps Hurghada",
        description: "Join the world's largest global hackathon in Hurghada, Egypt. October 4-5, 2025 at SUNRISE Garden Beach Resort.",
        type: "website",
        locale: "en_US",
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta name="facebook-domain-verification" content="6hcp7n165qv2lllfh3d71yzsg423ls" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;600;700;800&family=Fira+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicons/favicon.ico" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
