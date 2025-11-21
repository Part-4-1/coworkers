/**
 * @author junyeol
 * @description 게시글 상세페이지 타입
 */

export interface Writer {
  nickname: string;
  id: number;
  image?: string | null;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  writer: Writer;
  likeCount: number;
  isLiked: boolean;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
}
