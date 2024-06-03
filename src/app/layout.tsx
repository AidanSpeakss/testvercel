import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Farnsworth Intelligence",
  description: "A private intelligence company.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="h-screen bg-black text-white overflow-y-scroll font-lato">{children}</body>
    </html>
  );
}
