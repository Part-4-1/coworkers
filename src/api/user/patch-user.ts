import instance from "@/utils/axios";

interface PatchUserRequest {
  nickname: string;
  image: string;
}

interface PatchUserResponse {
  message: string;
}

const patchUser = async ({
  nickname,
  image,
}: PatchUserRequest): Promise<PatchUserResponse> => {
  const response = await instance.patch<PatchUserResponse>("/user", {
    nickname,
    image,
  });

  return response.data;
};

export default patchUser;
