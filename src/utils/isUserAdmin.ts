import { User } from "@/types/user";

export const isUserAdmin = (userInfo?: User, groupId?: number) => {
  if (!userInfo || !groupId) return false;

  return (
    userInfo.memberships?.some(
      (membership) =>
        membership.groupId === groupId && membership.role === "ADMIN"
    ) ?? false
  );
};
