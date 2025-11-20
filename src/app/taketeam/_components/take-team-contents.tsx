import { Button, TextInput } from "@/components/index";

const TakeTeamContents = () => {
  return (
    <div className="flex flex-col items-start gap-8 px-[21px] pb-[74.5px] pt-[52.5px] tablet:gap-10 tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]">
      <h2 className="text-xl font-bold text-blue-700 tablet:text-2xl">
        팀 참여하기
      </h2>
      <div className="flex w-full flex-col items-start gap-3">
        <p className="text-xs font-medium text-blue-700 tablet:text-lg">
          팀 링크
        </p>
        <TextInput id="TeamLink" placeholder="팀 링크를 입력해주세요." />
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <Button variant="solid" className="text-lg font-medium">
          참여하기
        </Button>
        <p className="text-xs text-gray-800 tablet:text-lg">
          공유받은 팀 링크를 입력해 참여할 수 있어요.
        </p>
      </div>
    </div>
  );
};

export default TakeTeamContents;
