import type { Metadata } from "next";
import UserSettingContents from "./_components/user-setting-contents";

export const metadata: Metadata = {
  title: "계정 설정",
  description: "Coworkers 계정 설정 페이지",
  openGraph: {
    title: "계정 설정 | Coworkers",
    description: "Coworkers 계정 설정 페이지",
    type: "website",
    url: "https://coworkes.com/mypage",
    locale: "ko_KR",
    siteName: "Coworkers",
    images: [
      {
        url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
        width: 1200,
        height: 630,
        alt: "Coworkers 계정 설정",
      },
    ],
  },
};

const MyPage = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] flex-center tablet:min-h-screen pc:min-h-screen">
      <div className="min-h-[556px] w-[343px] rounded-[20px] bg-white tablet:h-[745px] tablet:w-[550px] pc:w-[940px]">
        <UserSettingContents />
      </div>
    </div>
  );
};

export default MyPage;
