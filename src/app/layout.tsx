import pretendard from "@/font/font";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Metadata } from "next";
import QueryProviders from "@/providers";
import { ToastProvider } from "@/toast-provider";
import GnbWrapper from "@/components/gnb/gnb-wrapper";

export const metadata: Metadata = {
  title: { default: "Coworkers", template: "%s | Coworkers" },
  icons: {
    icon: "/ic-coworkers-logo.svg",
  },
  openGraph: {
    title: "Coworkers",
    description: "랜딩 페이지",
    type: "website",
    url: "https://coworkers-pied.vercel.app/",
    locale: "ko_KR",
    siteName: "Coworkers",
    images: [
      {
        url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
        width: 1200,
        height: 630,
        alt: "Coworkers",
      },
    ],
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
