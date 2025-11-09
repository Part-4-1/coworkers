import { MouseEventHandler } from "react";
import { Button, Icon } from "../../index";

interface TaskDetailToggleBtnProps {
  doneAt: string | null;
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
const TaskDetailToggleBtn = ({ doneAt, onClick }: TaskDetailToggleBtnProps) => {
  return (
    <Button
      variant={doneAt ? "outlined" : "solid"}
      className="h-10 w-fit rounded-[40px] pl-4 pr-5 mobile:hidden tablet:flex"
      onClick={onClick}
    >
      <Icon icon="checkInverse" className="h-4 w-4" />
      <span className="text-md">{doneAt ? "완료 취소하기" : "완료하기"}</span>
    </Button>
  );
};

export default TaskDetailToggleBtn;
