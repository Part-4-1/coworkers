import instance from "@/utils/axios";

const deleteUser = async (): Promise<void> => {
  await instance.delete("/user");
};

export default deleteUser;
