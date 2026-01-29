import type { Metadata } from "next";
import { ReduxProvider } from "@/store/Provider";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberForge | Cybersecurity Skills Platform",
  description: "Master cybersecurity through hands-on challenges, vulnerability assessments, and real-world penetration testing scenarios",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                  document.body.classList.add('dark')
                } else {
                  document.documentElement.classList.add('light')
                  document.body.classList.add('light')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ThemeProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </ThemeProvider>
      </body>
      </html>
  );
}
