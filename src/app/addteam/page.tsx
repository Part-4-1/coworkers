import AddTeamContents from "./_components/add-team-contents";

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
