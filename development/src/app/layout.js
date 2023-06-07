"use client";

import "./globals.css";
import { nohemi } from "@/app/localFont";
import { ThemeProvider } from "next-themes";
import { TabProvider } from "@/composables/tabContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nohemi.variable} `}>
        <TabProvider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </TabProvider>
      </body>
    </html>
  );
}
