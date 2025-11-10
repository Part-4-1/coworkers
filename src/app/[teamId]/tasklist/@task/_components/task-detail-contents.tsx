export interface TaskDetailContentsProps {
  name: string;
  isEdit: boolean;
  description: string;
}

const TaskDetailContents = ({
  name,
  isEdit,
  description,
}: TaskDetailContentsProps) => {
  return (
    <div>
      {isEdit ? (
        <div>
          <textarea name={`${name} description`}></textarea>
        </div>
      ) : (
        <p className="text-md">{description}</p>
      )}
    </div>
  );
};

export default TaskDetailContents;
