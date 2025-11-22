import instance from "@/utils/axios";

const DeleteUser = async (): Promise<void> => {
  await instance.delete("/user");
};

export default DeleteUser;
