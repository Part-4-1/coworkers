/**
 * @author leohan
 * @description 유저 관련 타입 모음
 */

export type Role = "ADMIN" | "MEMBER";

export interface Membership {
  userId: number;
  groupId: number;
  role: Role;
  userName: string;
  userEmail: string;
  userImage: string | null;
  group: Group;
}

export interface User {
  id: number;
  teamId?: string;
  email?: string;
  image: string | null;
  nickname?: string;
  updatedAt?: string;
  createdAt?: string;
  memberships?: Membership[];
}

export interface Writer {
  image: string | null;
  nickname: string;
  id: number;
}

interface Group {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId: string;
}
