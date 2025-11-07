/**
 * @author leohan
 * @description 그룹 관련 타입
 */

export interface Group {
  id: number;
  teamId: string;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}
