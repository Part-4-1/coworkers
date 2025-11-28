import type { Metadata } from "next";
import TakeTeamContents from "./_components/take-team-contents";

export const metadata: Metadata = {
  title: "팀 참여",
  description: "Coworkers 팀에 참여하세요",
  openGraph: {
    title: "팀 참여 | Coworkers",
    description: "Coworkers 팀에 참여하세요",
    type: "website",
    url: "https://coworkes.com/taketeam",
    locale: "ko_KR",
    siteName: "Coworkers",
    images: [
      {
        url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
        width: 1200,
        height: 630,
        alt: "Coworkers 팀 참여",
      },
    ],
  },
};

const TakeTeamPage = () => {
  return (
    <div className="min-h-screen flex-center">
      <div className="h-[353px] w-[343px] rounded-[20px] bg-white tablet:h-[400px] tablet:w-[550px]">
        <TakeTeamContents />
      </div>
    </div>
  );
};

export default TakeTeamPage;
