import { TextInput, InputBox, Button, Dropdown } from "@/components/index";

const TaskModal = () => {
  return (
    <div className="flex w-full max-w-[336px] flex-col gap-6">
      <div className="gap-4 flex-col-center">
        <h2 className="text-lg font-bold text-blue-700">할 일 만들기</h2>
        <div className="flex-col-center">
          <p className="text-md text-gray-800">
            할 일은 실제로 행동 가능한 작업 중심으로
          </p>
          <p className="text-md text-gray-800">작성해주시면 좋습니다.</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskTitle" className="text- font-medium text-blue-700">
          할 일 제목
        </label>
        <TextInput
          id="taskTitle"
          placeholder="할 일 제목을 입력해주세요."
          className="placeholder:text-md placeholder:text-gray-800"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskTitle" className="text- font-medium text-blue-700">
          시작 날짜 및 시간
        </label>
        <div className="flex">
          <Dropdown
            items={[{ label: "날짜" }]}
            menuAlign="start"
            defaultTriggerClassName="w-[204px] h-[48px]"
          />
          <Dropdown
            items={[{ label: "시간" }]}
            menuAlign="end"
            defaultTriggerClassName="w-[124px] h-[48px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskTitle" className="text- font-medium text-blue-700">
          반복 설정
        </label>
        <Dropdown
          items={[
            { label: "반복 안함" },
            { label: "한 번" },
            { label: "매일" },
            { label: "주 반복" },
            { label: "월 반복" },
          ]}
          textAlign="start"
          menuAlign="start"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskTitle" className="text- font-medium text-blue-700">
          할 일 메모
        </label>
        <InputBox
          className="placeholder:text-gray-800"
          placeholder="메모를 입력해주세요."
        />
      </div>

      <Button>만들기</Button>
    </div>
  );
};

export default TaskModal;
