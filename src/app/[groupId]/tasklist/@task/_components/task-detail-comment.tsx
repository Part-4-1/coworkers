import { Reply } from "@/components";
import CommentListSkeleton from "@/components/skeleton/comment-list-skeleton/comment-list-skeleton";
import useGetComments from "@/hooks/api/comments/use-get-comments";

interface TaskDetailCommentProps {
  taskId: number;
}

const TaskDetailComment = ({ taskId }: TaskDetailCommentProps) => {
  const { data: comments, isPending } = useGetComments(Number(taskId));

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
