import { Metadata } from "next";
import TaskList from "./_components/task-list";
import { cookies } from "next/headers";
import { fetchTaskList } from "@/api/task/get-task-list";

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: Promise<{ groupId: string }>;
  searchParams: Promise<{ list: string }>;
}): Promise<Metadata> => {
  const { groupId } = await params;
  const { list } = await searchParams;
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      title: "할 일 목록",
      description: "할 일을 확인할 수 있습니다.",
    };
  }

  const response = await fetchTaskList(Number(groupId), Number(list), token);

  return {
    title: `${response.name}`,
    description: `${response.name}의 할 일을 확인할 수 있습니다.`,
  };
};

const Page = () => {
  return <TaskList />;
};

export default Page;
