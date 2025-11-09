import { MouseEventHandler } from "react";
import { Button, Icon } from "../../index";

interface TaskDetailToggleBtnProps {
  isDone: string | null;
  onClick: MouseEventHandler;
}

/**
 *
 * @author hwitae
 * @description 할 일 상세 페이지 완료하기 버튼입니다.
 * @param isDone: 할 일 완료 여부
 * @param onClick: 버튼 이벤트 핸들러
 * @returns <Button></Button>
 */
const TaskDetailToggleBtn = ({ isDone, onClick }: TaskDetailToggleBtnProps) => {
  return (
    <Button className="h-10 w-[105px] rounded-[40px]" onClick={onClick}>
      <Icon icon="checkInverse" className="h-4 w-4" />
      <span className="text-md">{isDone ? "완료취소" : "완료하기"}</span>
    </Button>
  );
};

export default TaskDetailToggleBtn;
