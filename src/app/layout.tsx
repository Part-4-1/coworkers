import pretendard from "@/font/font";
import "./globals.css";
import { Metadata } from "next";
import QueryProviders from "@/providers";
import Sidebar from "@/components/gnb/Sidebar";

export const metadata: Metadata = {
  title: "Coworkers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Sidebar />
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
