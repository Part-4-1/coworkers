import { Metadata } from "next";
import { cookies } from "next/headers";
import EditTeam from "./_components/edit-team";

interface EditTeamPageProps {
  params: Promise<{
    groupId: number;
  }>;
}

async function getAccessToken() {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
}

export async function generateMetadata({
  params,
}: EditTeamPageProps): Promise<Metadata> {
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
      title: "팀 설정",
      description: "팀 정보를 수정할 수 있습니다.",
    };
  }

  return {
    title: `${group.name} 팀 설정`,
    description: `${group.name} 정보를 수정할 수 있습니다.`,
    openGraph: {
      title: `${group.name} 팀 설정 | Coworkers`,
      description: `${group.name} 정보를 수정할 수 있습니다.`,
      type: "website",
      url: `https://coworkers-pied.vercel.app/${groupId}/editteam`,
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

const EditTeamPage = async ({ params }: EditTeamPageProps) => {
  const { groupId } = await params;

  return <EditTeam groupId={Number(groupId)} />;
};

export default EditTeamPage;
