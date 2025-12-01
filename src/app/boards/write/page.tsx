import type { Metadata } from "next";
import cn from "@/utils/clsx";
import ArticleWriteContents from "./_components/article-write-contents/article-write-contents";

export const metadata: Metadata = {
  title: "게시글 작성",
  description: "Coworkers 자유게시판에 새로운 글을 작성하세요",
  openGraph: {
    title: "게시글 작성 | Coworkers",
    description: "Coworkers 자유게시판에 새로운 글을 작성하세요",
    type: "website",
    url: "https://coworkes.com/boards/write",
    locale: "ko_KR",
    siteName: "Coworkers",
    images: [
      {
        url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
        width: 1200,
        height: 630,
        alt: "Coworkers 게시글 작성",
      },
    ],
  },
};

const Page = () => {
  return (
    <div
      className={cn(
        "mx-auto mt-[36px] w-full max-w-[343px] rounded-[20px] bg-white",
        "tablet:mb-[137px] tablet:mt-[117px] tablet:max-w-[620px]",
        "pc:my-[100px] pc:max-w-[900px]"
      )}
    >
      <ArticleWriteContents />
    </div>
  );
};

export default Page;
