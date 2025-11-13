import { TextInput, Button, Icon } from "@/components/index";

const BoardsHeader = () => {
  return (
    <div className="mx-auto mb-[30px] mt-[87px] flex w-full items-center justify-between tablet:max-w-[620px] pc:max-w-[1120px]">
      <h1 className="text-2xl font-bold">자유게시판</h1>
      <TextInput
        className="rounded-full border-2"
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
