import instance from "@/utils/axios";

interface PatchUserPasswordParams {
  password: string;
  passwordConfirmation: string;
}

interface PatchUserPasswordResponse {
  message: string;
}

const patchUserPassword = async ({
  password,
  passwordConfirmation,
}: PatchUserPasswordParams): Promise<PatchUserPasswordResponse> => {
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
