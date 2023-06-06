"use client";

import "./globals.css";
import { nohemi } from "@/app/localFont";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nohemi.variable} `}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
