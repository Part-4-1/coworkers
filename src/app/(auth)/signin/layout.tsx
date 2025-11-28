import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "로그인",
  openGraph: {
    title: "Coworkers",
    description: "로그인 페이지",
    type: "website",
    url: "https://coworkes.com/signin",
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

const Layout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
