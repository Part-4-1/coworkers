import patchGroup, { PatchGroupData } from "@/api/group/patch-group";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePatchGroup = (groupId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: PatchGroupData) => patchGroup(groupId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group", groupId] });
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      router.push(`/${groupId}`);
    },
  });
};

export default usePatchGroup;
