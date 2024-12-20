
import type { Metadata } from "next";
import {  Host_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Sanele Ncube's Website ,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators" />
        <meta name="description" content="Your website's general description." />
        <meta name="keywords" content="relevant, keywords, for, your, website" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Sanele Ncube's Website ,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators" />
        <meta
          property="og:description"
          content="Sanele Ncube's Website ,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://ibb.co/JC0Fmx3" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Site Name" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanele Ncube's Website ,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators" />
        <meta
          name="twitter:description"
          content="Sanele Ncube's Website ,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators"
        />
        <meta name="twitter:image" content="https://ibb.co/JC0Fmx3" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />

        {/* WhatsApp */}
        <meta
          property="og:description"
          content="Sanele Ncube's Website ,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators"
        />
        <meta
          property="og:image"
          content="https://ibb.co/JC0Fmx3"
        />

        {/* Instagram */}
        <meta
          name="og:description"
          content="A short, engaging summary tailored for Instagram's audience."
        />
        <meta
          property="og:image"
          content="https://ibb.co/JC0Fmx3"
        />
      <body className={`${hostGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
