import { Article } from "@/types/article";

export const mockArticleData: Article = {
  updatedAt: "2025-11-15T05:30:03.864Z",
  createdAt: "2025-11-15T05:30:03.864Z",
  likeCount: 0,
  writer: {
    nickname: "우지현",
    id: 1,
    image: "https://via.placeholder.com/40",
  },
  image: "https://example.com/image.jpg",
  title: "게시글 제목입니다.",
  id: 1,
  commentCount: 5,
  isLiked: true,
  content: "게시글 내용입니다.",
};
