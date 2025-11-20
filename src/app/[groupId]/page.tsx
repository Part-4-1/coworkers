import TeamPageClient from "./_components/team-page-client";

interface TeamPageProps {
  params: {
    groupId: number;
  };
}

const TeamPage = async ({ params }: TeamPageProps) => {
  const { groupId } = await params;

  return <TeamPageClient groupId={groupId} />;
};

export default TeamPage;
