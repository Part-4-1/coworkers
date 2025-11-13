import BoardsBestHeader from "./boards-best-header/boards-best-header";

const BoardsBest = () => {
  return (
    <div className="mx-auto h-[314px] w-full rounded-[20px] bg-gray-100 tablet:h-[326px] tablet:max-w-[671px] pc:h-[370px] pc:max-w-[1120px]">
      <div className="mx-auto h-[218px] w-full gap-[25px] pt-[41px] tablet:h-[177px] tablet:max-w-[620px] pc:h-[255px] pc:max-w-[1074px]">
        <BoardsBestHeader />
      </div>
    </div>
  );
};

export default BoardsBest;
