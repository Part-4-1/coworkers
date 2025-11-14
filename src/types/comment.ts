/**
 * @author junyeol
 * @description 댓글 관련 타입 모음
 *
 */
export interface CommentWriter {
  image: string | null;
  nickname: string;
  id: number;
}

export interface Comment {
  writer: CommentWriter;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface CommentListResponse {
  nextCursor: number;
  list: Comment[];
}
