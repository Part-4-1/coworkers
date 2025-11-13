import { PostCard } from "@/components/index";
import { mockBoardPosts } from "@/mocks/board-post";

interface Post {
  id: number;
  imgUrl?: string;
  title: string;
  content: string;
  writer: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
}

interface BoardPostProps {
  posts?: Post[];
}

const BoardPost = ({ posts = mockBoardPosts }: BoardPostProps) => {
  return (
    <div className="mx-auto grid w-full max-w-[340px] grid-cols-1 gap-4 tablet:max-w-[620px] tablet:grid-cols-1 pc:max-w-[1074px] pc:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} isBest={false} />
      ))}
    </div>
  );
};

export default BoardPost;
