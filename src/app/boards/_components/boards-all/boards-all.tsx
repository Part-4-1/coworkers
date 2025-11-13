import BoardsAllHeader from "./boards-all-header/boards-all-header";
import BoardPost from "./boards-post/boards-post";

/** TODO(준열) : 페이지네이션 기능 작업 후 수정 예정 */
const BoardsAll = () => {
  return (
    <div className="flex flex-col gap-5">
      <BoardsAllHeader />
      <BoardPost />
    </div>
  );
};

export default BoardsAll;
