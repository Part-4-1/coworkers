import { Reply } from "@/components";
import { Comment } from "@/types";

interface TaskDetailCommentProps {
  commentData: Comment[];
}

const TaskDetailComment = ({ commentData }: TaskDetailCommentProps) => {
  return (
    <div>
      {commentData && (
        <ul className="flex flex-col gap-4">
          {commentData.map((comment, idx) => {
            return (
              <li key={comment.id} className="flex flex-col gap-4">
                {idx !== 0 && idx === commentData.length - 1 && <hr />}
                <Reply comment={comment} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TaskDetailComment;
