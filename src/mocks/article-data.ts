import { Article } from "@/types/article";

export const mockArticleData: Article = {
  updatedAt: "2025-11-15T05:30:03.864Z",
  createdAt: "2025-11-15T05:30:03.864Z",
  likeCount: 0,
  writer: {
    nickname: "우지금",
    id: 1,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  image: "https://randomuser.me/api/portraits/men/12.jpg",
  title: "커피 머신 고장 신고합니다 ☕🚨",
  id: 1,
  commentCount: 5,
  isLiked: true,
  content:
    "오늘 아침 출근과 동시에 알게 된 사실…1층 커피 머신에서 물만 나옵니다. (커피는 실종 😭) 점검 요청했고, 최대한 빠르게 복구될 수 있도록 하겠습니다! 혹시 대체 커피 루트 아시는 분 계시면 공유 부탁드려요 ㅎㅎ",
};
