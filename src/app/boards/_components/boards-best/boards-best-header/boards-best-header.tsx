import { Icon } from "@/components/index";

const BoardsBestHeader = () => {
  return (
    <div className="mx-auto flex w-full max-w-[336px] items-center justify-between tablet:max-w-[616px] pc:max-w-[1058px]">
      <h2 className="m-0 text-xl font-semibold">베스트 게시글</h2>
      <div className="gap-[2px] flex-center">
        <span className="text-sm text-gray-700">더보기</span>
        <Icon className="h-4 w-4" icon="rightArrow" />
      </div>
    </div>
  );
};

export default BoardsBestHeader;
