// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

// Separate viewport export for themeColor and viewport settings
export const viewport: Viewport = {
  themeColor: "#14b8a6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wilfred-osozi.vercel.app"),
  title: "Wilfred Osozi - Clinical Nutritionist & Full Stack Developer",
  description: "Clinical Nutritionist and Full Stack Developer passionate about bridging healthcare and technology through innovative digital solutions.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Wilfred Osozi",
  },
  icons: {
    icon: [
      { url: "/assets/icons/icon-72x72.webp", sizes: "72x72", type: "image/webp" },
      { url: "/assets/icons/icon-96x96.webp", sizes: "96x96", type: "image/webp" },
      { url: "/assets/icons/icon-128x128.webp", sizes: "128x128", type: "image/webp" },
      { url: "/assets/icons/icon-144x144.webp", sizes: "144x144", type: "image/webp" },
      { url: "/assets/icons/icon-152x152.webp", sizes: "152x152", type: "image/webp" },
      { url: "/assets/icons/icon-192x192.webp", sizes: "192x192", type: "image/webp" },
      { url: "/assets/icons/icon-384x384.webp", sizes: "384x384", type: "image/webp" },
      { url: "/assets/icons/icon-512x512.webp", sizes: "512x512", type: "image/webp" },
    ],
    shortcut: [
      { url: "/assets/icons/icon-96x96.webp", sizes: "96x96", type: "image/webp" },
    ],
    apple: [
      { url: "/assets/icons/icon-152x152.webp", sizes: "152x152", type: "image/webp" },
      { url: "/assets/icons/icon-192x192.webp", sizes: "192x192", type: "image/webp" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/icons/icon-152x152.webp",
      },
    ],
  },
  openGraph: {
    title: "Wilfred Osozi - Clinical Nutritionist & Full Stack Developer",
    description: "Clinical Nutritionist and Full Stack Developer passionate about bridging healthcare and technology.",
    url: "https://wilfred-osozi.vercel.app",
    siteName: "Wilfred Osozi Portfolio",
    images: [
      {
        url: "/assets/icons/icon-512x512.webp",
        width: 512,
        height: 512,
        alt: "Wilfred Osozi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilfred Osozi - Clinical Nutritionist & Full Stack Developer",
    description: "Clinical Nutritionist and Full Stack Developer passionate about bridging healthcare and technology.",
    images: ["/assets/icons/icon-512x512.webp"],
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code here
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons - Using webp with fallback hints */}
        <link rel="apple-touch-icon" href="/assets/icons/icon-152x152.webp" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/icon-152x152.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/icon-192x192.webp" />
        <link rel="apple-touch-icon" sizes="192x192" href="/assets/icons/icon-192x192.webp" />
        
        {/* Apple PWA Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wilfred Osozi" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#14b8a6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-TileImage" content="/assets/icons/icon-144x144.webp" />
        
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Favicon fallback - Using ICO for maximum compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Additional PNG fallback for older browsers */}
        <link rel="icon" type="image/png" sizes="144x144" href="/assets/icons/icon-144x144.webp" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Optional: Add service worker registration for full PWA - Commented out until sw.js is created
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
        */}
      </body>
    </html>
  );
}