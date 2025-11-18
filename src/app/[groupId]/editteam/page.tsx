import EditTeam from "./_components/edit-team";

interface EditTeamPageProps {
  params: Promise<{
    groupId: string;
  }>;
}

const EditTeamPage = async ({ params }: EditTeamPageProps) => {
  const { groupId } = await params;

  return <EditTeam groupId={groupId} />;
};

export default EditTeamPage;
