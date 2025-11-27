import { Metadata } from "next";
import TaskList from "./_components/task-list";
import { cookies } from "next/headers";
import { fetchTaskList } from "@/api/task/get-task-list";
import { fetchTaskDetail } from "@/api/task/get-task-detail";

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: Promise<{ groupId: string }>;
  searchParams: Promise<{ list: string; task: string | undefined }>;
}): Promise<Metadata> => {
  const { groupId } = await params;
  const { list, task } = await searchParams;
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      title: "할 일 목록",
      description: "할 일을 확인할 수 있습니다.",
    };
  }

  if (task) {
    const taskDetail = await fetchTaskDetail(
      Number(groupId),
      Number(list),
      Number(task),
      token
    );

    return {
      title: `${taskDetail.name} - 할 일 상세`,
      description: `${taskDetail.name}의 상세 정보를 확인할 수 있습니다.`,
      openGraph: {
        title: `${taskDetail.name} - 할 일 상세 | Coworkers`,
        description: `${taskDetail.name}의 상세 정보를 확인할 수 있습니다.`,
      },
    };
  }

  const response = await fetchTaskList(Number(groupId), Number(list), token);

  return {
    title: `${response.name} - 할 일 목록`,
    description: `${response.name}의 할 일을 확인할 수 있습니다.`,
    openGraph: {
      title: `${response.name} - 할 일 목록 | Coworkers`,
      description: `${response.name}의 할 일을 확인할 수 있습니다.`,
    },
  };
};

const Page = () => {
  return <TaskList />;
};

export default Page;
