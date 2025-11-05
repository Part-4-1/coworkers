import { Button } from "../index";
import { Icon } from "../index";

interface TodoHeaderProps {
  todoName: string;
  btnClick: () => void;
}

const TodoHeader = ({ todoName, btnClick }: TodoHeaderProps) => {
  return (
    <div className="flex h-[38px] w-full items-center justify-between rounded-xl bg-gray-300 pl-5 pr-2">
      <span className="max-w-fit truncate text-md font-medium">{todoName}</span>
      <Button
        variant="none"
        className="h-6 w-6 flex-shrink-0 rounded-lg border border-gray-400 bg-white hover:bg-gray-200 active:bg-gray-300"
        aria-label="할 일 추가 버튼"
        onClick={btnClick}
      >
        <Icon icon="plus" className="h-4 w-4 text-gray-700" />
      </Button>
    </div>
  );
};

export default TodoHeader;
