import TakeTeamContents from "./_components/take-team-contents";

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
