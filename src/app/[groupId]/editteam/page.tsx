import EditTeam from "./_components/edit-team";

interface EditTeamPageProps {
  params: { groupId: string };
}

const EditTeamPage = ({ params }: EditTeamPageProps) => {
  return <EditTeam groupId={params.groupId} />;
};

export default EditTeamPage;
