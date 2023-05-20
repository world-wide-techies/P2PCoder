export const metadata = {
  title: "Test Page",
  description: "Test components page",
};

export default function TestsLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-nohemi">{children}</body>
    </html>
  );
}
