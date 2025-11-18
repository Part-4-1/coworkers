import { Button } from "@/components";

const AddTaskListModalUI = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex flex-col justify-center gap-6 px-[31.5px] pt-2">
      <div className="gap-4 flex-col-center">
        <p>할 일 목록</p>
        <input
          id="task_list_name"
          type="text"
          className="h-11 w-[280px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-800"
          placeholder="목록 명을 입력해주세요."
        />
      </div>
      <Button onClick={onClick}>만들기</Button>
    </div>
  );
};

export default AddTaskListModalUI;
