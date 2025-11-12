const TaskModalHeader = () => {
  return (
    <div className="gap-4 flex-col-center">
      <h2 className="text-lg font-bold text-blue-700">할 일 만들기</h2>
      <div className="flex-col-center">
        <p className="text-md text-gray-800">
          할 일은 실제로 행동 가능한 작업 중심으로
        </p>
        <p className="text-md text-gray-800">작성해주시면 좋습니다.</p>
      </div>
    </div>
  );
};

export default TaskModalHeader;
