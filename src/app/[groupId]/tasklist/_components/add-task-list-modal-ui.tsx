import { Button } from "@/components";
import { ChangeEvent, useState } from "react";

const AddTaskListModalUI = ({
  handleClick,
}: {
  handleClick: (name: string) => void;
}) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex flex-col justify-center gap-6 px-[31.5px] pt-2">
      <div className="gap-4 flex-col-center">
        <p>할 일 목록</p>
        <input
          id="task_list_name"
          type="text"
          className="h-11 w-[280px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-800 focus:outline-none"
          placeholder="목록 명을 입력해주세요."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </div>
      <Button onClick={() => handleClick(input)}>만들기</Button>
    </div>
  );
};

export default AddTaskListModalUI;
