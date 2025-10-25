// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Optional: for font optimization
import "@/styles/globals.css"; // Your global styles
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";

// Optional: Load a font (replace with your preferred font, e.g., Inter)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  robots: "index, nofollow", // From _document.tsx
  viewport: "width=device-width, initial-scale=1.0", // From _app.tsx
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional head tags if needed (Cloudflare Pages Custom Error Pages) */}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
