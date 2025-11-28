import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "자유게시판",
  description: "Coworkers 자유게시판에서 다양한 이야기를 나누세요",
  openGraph: {
    title: "자유게시판 | Coworkers",
    description: "Coworkers 자유게시판에서 다양한 이야기를 나누세요",
    type: "website",
    url: "https://coworkes.com/boards",
    locale: "ko_KR",
    siteName: "Coworkers",
    images: [
      {
        url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
        width: 1200,
        height: 630,
        alt: "Coworkers 자유게시판",
      },
    ],
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
