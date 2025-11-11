import { getUserInfo } from "@/api/user/get-user-info";
import { useQuery } from "@tanstack/react-query";

/**
 * author leohan
 * 현재 로그인된 유저의 정보를 가져오는 훅
 */

export const useGetUserInfoQuery = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
};
