"use client";

import { Icon, Profile, TaskDetailContentSkeleton } from "@/components";
import ICONS_MAP from "@/components/icon/icons-map";
import usePatchTaskDetail from "@/hooks/api/task/use-patch-task-detail";
import { Writer } from "@/types/user";
import { ChangeEvent, useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import TaskDetailToggleBtn from "./task-detail-complete-btn";
import { toKoreanDateWithTimeString } from "@/utils/date-util";
import { changeFrequencyCode } from "@/utils/util";
import Skeleton from "react-loading-skeleton";
import cn from "@/utils/clsx";

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
  isPending: boolean;
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
  isPending,
}: TaskDetailContentsProps) => {
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
    newDescription.current = e.target.value.trim();
  };

  const handleNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    newName.current = e.target.value.trim();
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
    if (isPending) return;

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

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [newDescription.current, newName.current, isPending]);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            {!isPending ? (
              <TextareaAutosize
                name={name}
                defaultValue={name}
                maxLength={30}
                placeholder="할 일 이름을 입력하세요."
                onChange={handleNameChange}
                className={cn(
                  "h-auto w-full resize-none text-xl font-bold focus:outline-none tablet:text-2xl",
                  doneAt && "text-gray-800 line-through"
                )}
              />
            ) : (
              <Skeleton
                containerClassName="flex w-full h-6 tablet:h-7"
                className="h-full"
              />
            )}
          </div>
          <div className="flex items-center gap-3">
            <Profile image={writer?.image ?? ""} size="md" />
            {writer ? (
              <span className="text-md font-medium">{writer?.nickname}</span>
            ) : (
              <Skeleton
                containerClassName="flex w-16 h-[17px]"
                className="h-full"
              />
            )}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                {taskMetadataArr.map((taskMetadata) => {
                  return (
                    <TaskMetadata
                      key={taskMetadata.label}
                      {...taskMetadata}
                      isPending={isPending}
                    />
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
        {!isPending ? (
          <TextareaAutosize
            name={`${name} description`}
            defaultValue={description}
            placeholder="할 일 내용을 입력하세요."
            onChange={handleDescriptionChange}
            className="h-auto w-full resize-none text-md focus:outline-none"
          />
        ) : (
          <TaskDetailContentSkeleton />
        )}
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
const TaskMetadata = ({
  icon,
  label,
  text,
  isPending,
}: TaskMetadataProps & { isPending: boolean }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-[6px]">
        <Icon icon={icon} className="h-4 w-4" />
        <span className="text-xs text-gray-800">{label}</span>
      </div>
      {!isPending ? (
        <span className="text-xs">{text}</span>
      ) : (
        <Skeleton
          containerClassName="h-[14px] w-[140px] flex"
          className="h-full"
        />
      )}
    </div>
  );
};

export default TaskDetailContents;
