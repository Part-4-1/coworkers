import { getUserInfo } from "@/api/user/get-user-info";
import { useQuery } from "@tanstack/react-query";

/**
 * author leohan
 * 현재 로그인된 유저의 정보를 가져오는 훅
 * @param id 유저의 ID (Query Key를 고유하게 만들기 위해 사용)
 */

export const useGetUserInfoQuery = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
};
