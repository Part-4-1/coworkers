import deleteGroup from "@/api/task/delete-group";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteGroup = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["group", groupId],
      }),
  });
};

export default useDeleteGroup;
