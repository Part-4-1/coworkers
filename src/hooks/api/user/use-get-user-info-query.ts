import { getUserInfo } from "@/api/user/get-user-info";
import { getCookie } from "@/utils/getCookie";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
/**
 * author leohan
 * 현재 로그인된 유저의 정보를 가져오는 훅
 */

export const useGetUserInfoQuery = () => {
  const accessToken = getCookie("accessToken");
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    enabled: !!accessToken,
    retry: (failCount, error) => {
      if ((error as AxiosError)?.response?.status === 401) {
        return false;
      }
      return failCount < 2;
    },
  });
};
