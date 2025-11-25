import deleteGroupMember from "@/api/group/delete-group-member";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteGroupMember = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) => deleteGroupMember(groupId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group", groupId] });
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
  });
};

export default useDeleteGroupMember;
