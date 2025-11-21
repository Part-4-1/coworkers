import TeamPageClient from "./_components/team-page-client";

interface TeamPageProps {
  params: Promise<{
    groupId: string;
  }>;
}

const TeamPage = async ({ params }: TeamPageProps) => {
  const { groupId } = await params;

  return <TeamPageClient groupId={Number(groupId)} />;
};

export default TeamPage;
