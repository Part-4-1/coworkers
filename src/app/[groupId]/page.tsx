import { Metadata } from "next";
import { cookies } from "next/headers";
import TeamPageClient from "./_components/team-page-client";

interface TeamPageProps {
  params: Promise<{
    groupId: string;
  }>;
}

async function getAccessToken() {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
}

export async function generateMetadata({
  params,
}: TeamPageProps): Promise<Metadata> {
  const { groupId } = await params;
  const accessToken = await getAccessToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/groups/${groupId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const group = await res.json();
  if (!group) {
    return {
      title: "팀페이지",
      description: "팀 페이지 정보를 확인할 수 있습니다.",
    };
  }

  return {
    title: group.name,
    description: `${group.name} 정보를 확인할 수 있습니다.`,
    openGraph: {
      title: `${group.name} | Coworkers`,
      description: `${group.name} 정보를 확인할 수 있습니다.`,
      type: "website",
      url: `https://coworkers-pied.vercel.app/${groupId}`,
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
}

const TeamPage = async ({ params }: TeamPageProps) => {
  const { groupId } = await params;

  return <TeamPageClient groupId={Number(groupId)} />;
};

export default TeamPage;
