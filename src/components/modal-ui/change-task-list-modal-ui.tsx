import { Button } from "@/components";
import { ChangeEvent, useState } from "react";

const ChangeTaskListModalUI = ({
  taskTitle,
  handleClick,
}: {
  taskTitle: string;
  handleClick: (name: string) => void;
}) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex w-full flex-col justify-center gap-6 px-[31.5px] pt-2">
      <div className="gap-4 flex-col-center">
        <p className="text-lg font-medium">할 일 목록</p>
        <input
          id="task_list_name"
          type="text"
          className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-md text-gray-800 placeholder:text-gray-800 focus:outline-none tablet:w-[280px]"
          placeholder="목록 명을 입력해주세요."
          defaultValue={taskTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </div>
      <Button onClick={() => handleClick(input)}>수정하기</Button>
    </div>
  );
};

export default ChangeTaskListModalUI;
