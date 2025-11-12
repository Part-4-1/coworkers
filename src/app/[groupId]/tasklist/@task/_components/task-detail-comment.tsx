import { Reply } from "@/components";
import useGetComments from "@/hooks/api/comments/use-get-comments";

interface TaskDetailCommentProps {
  taskId: number;
}

const TaskDetailComment = ({ taskId }: TaskDetailCommentProps) => {
  const { data: comments, isPending } = useGetComments(Number(taskId));

  return (
    <div>
      {!isPending && comments && (
        <ul className="flex flex-col gap-4">
          {comments.map((comment, idx) => {
            return (
              <li key={comment.id} className="flex flex-col gap-4">
                {idx !== 0 && idx === comments.length - 1 && <hr />}
                <Reply
                  comment={{
                    id: comment.id,
                    content: comment.content,
                    writer: comment.user,
                    updatedAt: comment.updatedAt,
                    createdAt: comment.createdAt,
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TaskDetailComment;
