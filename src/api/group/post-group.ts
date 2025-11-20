import instance from "@/utils/axios";

interface PostGroupData {
  image: string;
  name: string;
}
const postGroup = async (data: PostGroupData) => {
  try {
    const response = await instance.post("/groups", data);

    if (!response) throw new Error("팀 생성에 실패하였습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postGroup;
