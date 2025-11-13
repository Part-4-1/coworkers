import { Dropdown, PostCard } from "@/components/index";

const BoardsAllHeader = () => {
  return (
    <div className="mx-auto mt-[45px] flex w-full max-w-[340px] items-center justify-between tablet:max-w-[620px] pc:max-w-[1074px]">
      <h2 className="m-0 text-xl font-semibold">전체</h2>
      <Dropdown
        items={[{ label: "최신순" }, { label: "좋아요 많은순" }]}
        isWidthFull={true}
        defaultTriggerClassName="w-[130px] h-[48px]"
        textAlign={"start"}
      />
    </div>
  );
};

export default BoardsAllHeader;
