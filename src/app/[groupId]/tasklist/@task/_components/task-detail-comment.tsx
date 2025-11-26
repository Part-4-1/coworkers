import { Reply, CommentListSkeleton } from "@/components";
import useGetComments from "@/hooks/api/comments/use-get-comments";
import usePatchTaskComment from "@/hooks/api/task/use-patch-task-comment";

interface TaskDetailCommentProps {
  taskId: number;
}

const TaskDetailComment = ({ taskId }: TaskDetailCommentProps) => {
  const { data: comments, isPending } = useGetComments(Number(taskId));
  const { mutate: patchTaskComment } = usePatchTaskComment();

  if (isPending || !comments) return <CommentListSkeleton />;

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {comments.map((comment, idx) => {
          return (
            <li key={comment.id} className="flex flex-col gap-4">
              {idx !== 0 && idx < comments.length && <hr />}
              <Reply
                comment={{
                  ...comment,
                  writer: comment.user,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskDetailComment;
