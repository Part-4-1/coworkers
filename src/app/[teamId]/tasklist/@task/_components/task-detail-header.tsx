import { Dropdown, Icon, Profile } from "@/components";
import ICONS_MAP from "@/components/icon/icons-map";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import TaskDetailToggleBtn from "./task-detail-complete-btn";
import { toKoreanDateWithTimeString } from "@/utils/date-util";
import { changeFrequencyCode } from "@/utils/util";
import type { Writer } from "@/types/user";
import type { FrequencyType } from "@/types/task";

interface TaskMetadataProps {
  icon: keyof typeof ICONS_MAP;
  label: string;
  text: string;
}

export interface TaskDetailHeaderProps {
  name: string;
  writer: Writer;
  createdAt: string;
  frequency: FrequencyType;
  doneAt: string | null;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  onToggleBtnClick: MouseEventHandler;
}
/**
 * @author hwitae
 * @description 할 일 상세 페이지의 제목, 프로필, 시작 날짜, 반복 설정, 완료하기 버튼을 표출하는 컴포넌트
 * @param name 할 일 제목
 * @param writer 할 일 작성자
 * @param createdAt 할 일 등록 날짜
 * @param frequency 할 일 반복 주기
 * @param doneAt 할 일 완료 날짜 (할 일 완료 여부로 사용)
 * @param setEditMode 드롭다운을 통해 수정하기 버튼을 눌러 작성 모드를 변경하는 핸들러
 * @param onToggleBtnClick 완료하기 버튼 동작 이벤트 핸들러
 * @returns <TaskDetailHeader />
 */
const TaskDetailHeader = ({
  name,
  writer,
  createdAt,
  frequency,
  doneAt,
  setEditMode,
  onToggleBtnClick,
}: TaskDetailHeaderProps) => {
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

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold tablet:text-2xl">{name}</p>
        <Dropdown
          trigger={<Icon icon="kebab" className="h-6 w-6 text-gray-800" />}
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
        <Profile image={writer.image ?? ""} size="md" />
        <span className="text-md font-medium">{writer.nickname}</span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
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
          <TaskDetailToggleBtn doneAt={doneAt} onClick={onToggleBtnClick} />
        </div>
        <hr className="h-[2px] bg-gray-300" />
      </div>
    </div>
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

export default TaskDetailHeader;
