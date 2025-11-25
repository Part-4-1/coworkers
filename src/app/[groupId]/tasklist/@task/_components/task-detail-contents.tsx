"use client";

import { Icon, Profile } from "@/components";
import ICONS_MAP from "@/components/icon/icons-map";
import usePatchTaskDetail from "@/hooks/api/task/use-patch-task-detail";
import { Writer } from "@/types/user";
import { ChangeEvent, memo, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import TaskDetailToggleBtn from "./task-detail-complete-btn";
import { toKoreanDateWithTimeString } from "@/utils/date-util";
import { changeFrequencyCode } from "@/utils/util";

interface TaskMetadataProps {
  icon: keyof typeof ICONS_MAP;
  label: string;
  text: string;
}

export interface TaskDetailHeaderProps {
  writer: Writer;
  createdAt: string;
  frequency: string;
}

export interface TaskDetailContentsProps extends TaskDetailHeaderProps {
  groupId: number;
  taskListId: number;
  taskId: number;
  name: string;
  description: string;
  doneAt: string | null;
}

const TaskDetailContents = ({
  groupId,
  taskListId,
  taskId,
  name,
  writer,
  description,
  doneAt,
  createdAt,
  frequency,
}: TaskDetailContentsProps) => {
  const [text, setText] = useState<string>();
  const timer = useRef<NodeJS.Timeout | null>(null);
  const newDescription = useRef<string>(description);
  const newName = useRef<string>(name);
  const taskMetadataArr: TaskMetadataProps[] = [
    {
      icon: "calendar",
      label: "시작 날짜",
      text: toKoreanDateWithTimeString(createdAt),
    },
    {
      icon: "repeat",
      label: "반복 설정",
      text: changeFrequencyCode(frequency),
    },
  ];

  const { mutate } = usePatchTaskDetail();

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    newDescription.current = e.target.value;
    setText(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    newName.current = e.target.value;
    setText(e.target.value);
  };

  const handleToggleBtnClick = () => {
    mutate({
      groupId,
      taskListId,
      taskId,
      data: {
        name: name,
        description: description,
        done: !doneAt,
      },
    });
  };

  useEffect(() => {
    if (text?.trim() !== "") {
      timer.current = setTimeout(() => {
        mutate({
          groupId,
          taskListId,
          taskId,
          data: {
            name: newName.current,
            description: newDescription.current,
            done: !!doneAt,
          },
        });
      }, 500);
    }

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [text]);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <TextareaAutosize
              name={name}
              defaultValue={name}
              onChange={handleNameChange}
              className="h-auto w-full resize-none text-xl font-bold focus:outline-none tablet:text-2xl"
            />
          </div>
          <div className="flex items-center gap-3">
            <Profile image={writer.image ?? ""} size="md" />
            <span className="text-md font-medium">{writer.nickname}</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                {taskMetadataArr.map((taskMetadata) => {
                  return (
                    <TaskMetadata key={taskMetadata.label} {...taskMetadata} />
                  );
                })}
              </div>
              <div className="z-10 mobile:fixed mobile:bottom-1 mobile:right-1 tablet:relative tablet:flex">
                <TaskDetailToggleBtn
                  doneAt={doneAt}
                  onClick={handleToggleBtnClick}
                />
              </div>
            </div>
            <hr className="h-[2px] bg-gray-300" />
          </div>
        </div>
        <TextareaAutosize
          name={`${name} description`}
          defaultValue={description}
          onChange={handleDescriptionChange}
          className="h-auto w-full resize-none focus:outline-none"
        />
      </div>
    </>
  );
};

/**
 * @author hwitae
 * @description 할 일 상세 헤더 컴포넌트의 시작 날짜, 반복 설정을 표출합니다.
 * @param icon 아이콘 이름
 * @param label 표출하는 정보의 이름 (시작 날짜, 반복 설정)
 * @param text 표출하는 정보
 * @returns <TaskMetadata />
 */
const TaskMetadata = ({ icon, label, text }: TaskMetadataProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-[6px]">
        <Icon icon={icon} className="h-4 w-4" />
        <span className="text-xs text-gray-800">{label}</span>
      </div>
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default memo(TaskDetailContents);
