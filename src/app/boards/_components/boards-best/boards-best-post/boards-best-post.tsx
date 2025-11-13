import { PostCard } from "@/components/index";
import { mockBoardPosts } from "@/mocks/board-post";

/* TODO(준열) : 캐러셀 기능 구현 후 수정될 예정, 현재 보여주기용 UI 제작 */
const BoardBestPost = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 tablet:hidden">
        {mockBoardPosts.slice(0, 1).map((post) => (
          <PostCard key={post.id} {...post} isBest={true} />
        ))}
      </div>

      <div className="hidden grid-cols-2 gap-4 tablet:grid pc:hidden">
        {mockBoardPosts.slice(0, 2).map((post) => (
          <PostCard key={post.id} {...post} isBest={true} />
        ))}
      </div>

      <div className="hidden grid-cols-3 gap-4 pc:grid">
        {mockBoardPosts.slice(0, 3).map((post) => (
          <PostCard key={post.id} {...post} isBest={true} />
        ))}
      </div>
    </>
  );
};

export default BoardBestPost;
