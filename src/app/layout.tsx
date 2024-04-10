import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "madsheilmann.dk",
  description: "Mads Heilmann's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
