import type { Metadata } from "next";
import AddTeamContents from "./_components/add-team-contents";

export const metadata: Metadata = {
  title: "팀 생성",
  description: "새로운 Coworkers 팀을 생성하세요",
  openGraph: {
    title: "팀 생성 | Coworkers",
    description: "새로운 Coworkers 팀을 생성하세요",
    type: "website",
    url: "https://coworkes.com/addteam",
    locale: "ko_KR",
    siteName: "Coworkers",
    images: [
      {
        url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
        width: 1200,
        height: 630,
        alt: "Coworkers 팀 생성",
      },
    ],
  },
};

const addTeamPage = () => {
  return (
    <div className="min-h-screen flex-center">
      <div className="h-[464px] w-[343px] rounded-[20px] bg-white tablet:mx-auto tablet:h-[543px] tablet:w-[550px]">
        <AddTeamContents />
      </div>
    </div>
  );
};

export default addTeamPage;
