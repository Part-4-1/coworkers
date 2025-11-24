import pretendard from "@/font/font";
import "./globals.css";
import { Metadata } from "next";
import QueryProviders from "@/providers";
import { ToastProvider } from "@/toast-provider";
import GnbWrapper from "@/components/gnb/gnb-wrapper";

export const metadata: Metadata = {
  title: "Coworkers",
  icons: {
    icon: "/ic-coworkers-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="bg-gray-50">
        <QueryProviders>
          <ToastProvider>
            <GnbWrapper />
            <main className="ml-0 tablet:ml-[72px] pc:ml-[270px]">
              {children}
            </main>
          </ToastProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
