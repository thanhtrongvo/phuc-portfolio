import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmithDinh",
  description:
    "A research-first approach to visual storytelling — video editing and documentary-style projects by Smith. A visual journalist based in Vietnam.",
  keywords: [
    "content creator",
    "designer",
    "video editor",
    "portfolio",
    "creative",
    "filmmaker",
    "visual journalist",
    "documentary",
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
