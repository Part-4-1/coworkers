import { TaskDetailContentsProps } from "@/types/task-detail";

const TaskDetailContents = ({ isEdit }: TaskDetailContentsProps) => {
  return <div>{isEdit ? <p></p> : <div></div>}</div>;
};

export default TaskDetailContents;
