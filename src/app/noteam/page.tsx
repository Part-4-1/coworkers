import { Button } from "@/components/index";
import cn from "@/utils/clsx";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "팀 없음",
  description: "아직 소속된 팀이 없습니다.",
  openGraph: {
    title: "팀 없음 | Coworkers",
    description: "아직 소속된 팀이 없습니다.",
    type: "website",
    url: "https://coworkes.com/mypage",
    locale: "ko_KR",
    siteName: "Coworkers",
    images: [
      {
        url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
        width: 1200,
        height: 630,
        alt: "소속팀 없음",
      },
    ],
  },
};

const NoTeam = () => {
  return (
    <main
      className={cn("flex h-screen w-full min-w-[200px] flex-col flex-center")}
    >
      <div className="relative h-[120px] w-[183px] tablet:h-[211px] tablet:w-[323px] pc:h-[264px] pc:w-[404px]">
        <Image
          src={"/team-page-no-group.png"}
          alt="그룹없음"
          fill
          sizes="h-[120px] w-[183px] tablet:h-[211px] tablet:w-[323px] pc:h-[264px] pc:w-[404px]"
          className="object-contain"
          priority={true}
          draggable={false}
        />
      </div>
      <div
        className={cn(
          "flex flex-col gap-[4px] text-md font-medium text-gray-800 flex-center",
          "mt-[24px] tablet:mt-[32px] pc:text-lg"
        )}
      >
        <p>아직 소속된 팀이 없습니다.</p>
        <p>팀을 생성하거나 팀에 참여해보세요.</p>
      </div>
      <div className={cn("mt-[47px] flex flex-col gap-[8px] tablet:mt-[80px]")}>
        <Link href="/addteam">
          <Button className="h-[48px] w-[186px]">팀 생성하기</Button>
        </Link>
        <Link href="/taketeam">
          <Button variant="outlined" className="h-[48px] w-[186px]">
            팀 참여하기
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NoTeam;
