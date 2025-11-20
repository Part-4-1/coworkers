import { User } from "@/types/user";

export const isUserAdmin = (userInfo: User, groupId: number) => {
  const isAdmin = userInfo.memberships?.find(
    (membership) =>
      membership.groupId === groupId && membership.role === "ADMIN"
  );

  return isAdmin;
};
