import { nohemi } from "@/data/localFont";

export const metadata = {
  title: "Test Page",
  description: "Test components page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nohemi.variable} `}>{children}</body>
    </html>
  );
}
