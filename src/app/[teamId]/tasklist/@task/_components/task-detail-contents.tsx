export interface TaskDetailContentsProps {
  isEdit: boolean;
  description: string;
}

const TaskDetailContents = ({
  isEdit,
  description,
}: TaskDetailContentsProps) => {
  return <div>{isEdit ? <div></div> : <p>{description}</p>}</div>;
};

export default TaskDetailContents;
