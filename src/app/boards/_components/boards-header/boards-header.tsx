import cn from "@/utils/clsx";
import { TextInput, Button, Icon } from "@/components/index";

const BoardsHeader = () => {
  return (
    <div className="mx-auto mb-[30px] mt-[25px] flex w-full flex-col gap-4 px-4 tablet:mt-[77px] tablet:max-w-[620px] tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-0 tablet:px-0 pc:mt-[87px] pc:max-w-[1120px]">
      <h1 className="text-2xl font-semibold">자유게시판</h1>
      <TextInput
        className="w-full rounded-full border-2"
        placeholder="검색어를 입력해주세요"
        id="search"
        leftIcon={
          <Button variant="none">
            <Icon icon="search" className="h-8 w-8"></Icon>
          </Button>
        }
      />
    </div>
  );
};

export default BoardsHeader;
