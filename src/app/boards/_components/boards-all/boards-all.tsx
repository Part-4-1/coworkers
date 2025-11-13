import BoardsAllHeader from "./boards-all-header/boards-all-header";
import BoardPost from "./boards-post/boards-post";

const BoardsAll = () => {
  return (
    <div className="flex flex-col gap-5">
      <BoardsAllHeader />
      <BoardPost />
    </div>
  );
};

export default BoardsAll;
