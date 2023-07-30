"use client";

import "./globals.css";
import { nohemi } from "@/app/localFont";
import { ThemeProvider } from "next-themes";
import { TabProvider } from "@/composables/tabContext";
import { SessionContextProvider } from "@/composables/sessionContext";
//import { AuthProvider } from "@/composables/authContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nohemi.variable} `}>
        <AuthProvider>
          <SessionContextProvider>
            <TabProvider>
              <ThemeProvider attribute="class">{children}</ThemeProvider>
            </TabProvider>
          </SessionContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
