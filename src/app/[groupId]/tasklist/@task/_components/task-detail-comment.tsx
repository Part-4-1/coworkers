import { CommentListSkeleton, Reply } from "@/components";
import useGetComments from "@/hooks/api/comments/use-get-comments";
import usePatchTaskComment from "@/hooks/api/task/use-patch-task-comment";
import useDeleteTaskComment from "@/hooks/api/task/use-delete-task-comment";

interface TaskDetailCommentProps {
  taskId: number;
}

const TaskDetailComment = ({ taskId }: TaskDetailCommentProps) => {
  const { data: comments, isPending } = useGetComments(Number(taskId));
  const { mutate: patchComment } = usePatchTaskComment();
  const { mutate: deleteComment } = useDeleteTaskComment();

  if (isPending || !comments) return <CommentListSkeleton />;

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {comments.map((comment, idx) => (
          <li key={comment.id} className="flex flex-col gap-4">
            {idx !== 0 && idx < comments.length && <hr />}
            <Reply
              comment={{
                ...comment,
                writer: comment.user,
              }}
              onSave={(commentId, content) =>
                patchComment({ taskId, commentId, content })
              }
              onDelete={(commentId) => deleteComment({ taskId, commentId })}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDetailComment;
