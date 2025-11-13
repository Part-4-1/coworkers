import { Icon } from "@/components/index";

const BoardsBestHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="m-0 text-xl font-bold">베스트 게시글</h2>
      <div className="gap-[2px] flex-center">
        <span className="text-sm text-gray-700">더보기</span>
        <Icon className="h-4 w-4" icon="rightArrow" />
      </div>
    </div>
  );
};

export default BoardsBestHeader;
