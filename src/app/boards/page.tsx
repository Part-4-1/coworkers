import BoardsHeader from "./_components/boards-header/boards-header";
import BoardsBest from "./_components/boards-best/boards-best";
import BoardsAll from "./_components/boards-all/boards-all";

const Page = () => {
  return (
    <div>
      <BoardsHeader />
      <BoardsBest />
      <BoardsAll />
    </div>
  );
};

export default Page;
