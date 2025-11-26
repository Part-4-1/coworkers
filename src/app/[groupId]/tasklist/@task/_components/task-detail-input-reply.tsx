import { Icon, InputReply } from "@/components";
import { useCreateComment } from "@/hooks/api/comments/use-create-comment";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import Image from "next/image";

const TaskDetailInputReply = ({ taskId }: { taskId: number }) => {
  const { mutate: postTaskDetailComment } = useCreateComment(taskId);
  const { data: userInfo } = useGetUserInfoQuery();

  return (
    <div className="flex items-center gap-4">
      {userInfo?.image ? (
        <Image
          src={userInfo.image}
          alt="프로필"
          width={24}
          height={24}
          className="rounded-md tablet:h-8 tablet:w-8"
        />
      ) : (
        <div className="rounded-md bg-gray-300">
          <Icon icon="user" className="h-6 w-6 tablet:h-8 tablet:w-8" />
        </div>
      )}
      <InputReply onSubmit={postTaskDetailComment} />
    </div>
  );
};

export default TaskDetailInputReply;
