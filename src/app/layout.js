import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

// Global SEO Metadata
export const metadata = {
    title: 'Computational Mechanics & Design Club - NIT Jamshedpur',
    description: 'CMDC bridges Computer Science & Mechanical Engineering to solve real-world problems using CFD, FEA, AI/ML.',
    alternates: {
        canonical: 'https://cmdc.in/',
    },
};

export default function RootLayout({ children }) {

    // Define the JSON-LD Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CMDC NIT Jamshedpur',
        url: 'https://cmdc.in',
        logo: 'https://cmdc.in/images/cmdclogo.png',
        sameAs: [
            'https://www.instagram.com/cmdc.nitjsr',
            'https://www.linkedin.com/company/cmdc-nitjsr',
        ],
        description: 'A technical club empowering students through hands-on experience in CAD, Simulation, AI/ML, and Product Design.',
    };

    return (
        <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
            <body className="bg-[#111] text-gray-100 antialiased selection:bg-[#B9FF66] selection:text-[#111]">

                {/* Inject JSON-LD Script */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {children}
                <Analytics />
            </body>
        </html>
    );
}