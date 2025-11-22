import instance from "@/utils/axios";

interface PatchUserPasswordRequest {
  password: string;
  passwordConfirmation: string;
}

interface PatchUserPasswordResponse {
  message: string;
}

const patchUserPassword = async ({
  password,
  passwordConfirmation,
}: PatchUserPasswordRequest): Promise<PatchUserPasswordResponse> => {
  const response = await instance.patch<PatchUserPasswordResponse>(
    "/user/password",
    {
      password,
      passwordConfirmation,
    }
  );

  return response.data;
};

export default patchUserPassword;
