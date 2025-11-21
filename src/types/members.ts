/**
 * @author jinhyuk
 * @description 멤버들의 정보
 */

export interface Member {
  role: string;
  userImage: string | null;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
}
