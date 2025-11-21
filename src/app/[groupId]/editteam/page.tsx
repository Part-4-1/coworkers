import EditTeam from "./_components/edit-team";

interface EditTeamPageProps {
  params: Promise<{
    groupId: number;
  }>;
}

const EditTeamPage = async ({ params }: EditTeamPageProps) => {
  const { groupId } = await params;

  return <EditTeam groupId={groupId} />;
};

export default EditTeamPage;
