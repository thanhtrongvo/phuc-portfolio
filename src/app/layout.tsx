import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PHUC — Content Creator, Designer & Video Editor",
  description:
    "Modern renaissance — photo, video, and design projects by Phuc. A content creator and visual storyteller based in Vietnam.",
  keywords: [
    "content creator",
    "designer",
    "video editor",
    "portfolio",
    "creative",
    "filmmaker",
    "photographer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased grain">{children}</body>
    </html>
  );
}
