import pretendard from "@/font/font";
import "./globals.css";
import { Metadata } from "next";
import QueryProviders from "@/providers";
import { ToastProvider } from "@/toast-provider";
import GnbWrapper from "@/components/gnb/gnb-wrapper";

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
        <QueryProviders>
          <ToastProvider>
            <GnbWrapper />
            {children}
          </ToastProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
