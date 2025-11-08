import { TaskDetailHeaderProps } from "@/types/task-detail";
import { Dropdown, Icon, Profile } from "../index";
import ICONS_MAP from "../icon/icons-map";
import { Dispatch, SetStateAction } from "react";

interface TaskMetadataProps {
  icon: keyof typeof ICONS_MAP;
  label: string;
  text: string;
}

type TaskDetailHeaderPropsWithDropdownAction = TaskDetailHeaderProps & {
  setEditMode: Dispatch<SetStateAction<boolean>>;
};

const TaskDetailHeader = ({
  name,
  writer,
  createdAt,
  frequency,
  setEditMode,
}: TaskDetailHeaderPropsWithDropdownAction) => {
  const taskMetadataArr: TaskMetadataProps[] = [
    {
      icon: "calendar",
      label: "시작 날짜",
      text: createdAt,
    },
    {
      icon: "repeat",
      label: "반복 설정",
      text: frequency,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">{name}</p>
        <Dropdown
          trigger={<Icon icon="kebab" className="h-6 w-6 text-gray-500" />}
          items={[
            {
              label: "수정하기",
              onClick: () => {
                setEditMode((prevState) => !prevState);
              },
            },
            {
              label: "삭제하기",
              onClick: () => {},
            },
          ]}
        />
      </div>
      <div className="flex items-center gap-3">
        <Profile image={writer.image ? writer.image : ""} />
        <span>{writer.nickname}</span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          {taskMetadataArr.map((taskMetadata) => {
            return (
              <TaskMetadata
                key={taskMetadata.label}
                icon={taskMetadata.icon}
                label={taskMetadata.label}
                text={taskMetadata.text}
              />
            );
          })}
        </div>
        <hr className="h-[2px] bg-gray-300" />
      </div>
    </div>
  );
};

const TaskMetadata = ({ icon, label, text }: TaskMetadataProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-[6px]">
        <Icon icon={icon} className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default TaskDetailHeader;
