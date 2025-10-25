"use client"; // Required for useRouter and next-themes

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useRouter } from "next/navigation"; // Correct import for App Router
import type { ReactNode } from "react";

// Optional: Uncomment and use next/font for optimized fonts
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={(path) => router.push(path)}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="theme"
        {...themeProps}
      >
        <main className="antialiased">{children}</main>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
