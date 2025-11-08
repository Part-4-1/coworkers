import React from "react";
import { Button, Checkbox, Dropdown, Icon } from "@/components/index";
import { mockListData } from "@/mocks/list-data";

const List = () => {
  return (
    <div className="flex w-full max-w-[343px] flex-col gap-[10px] rounded-lg border border-gray-300 px-[14px] py-3 tablet:max-w-[733px] pc:max-w-[1200px]">
      <div className="flex justify-between">
        <div className="flex flex-center">
          <Checkbox id={1} isDone={null} />
          <Dropdown
            trigger={<Icon icon="comment" className="h-4 w-4" />}
            items={[{ label: "수정하기" }]}
          />
        </div>
        <Button variant="none">
          <Icon icon="kebab" className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Icon icon="calendar" className="h-4 w-4" />
          <p>2025년</p>
        </div>
        <hr className="h-3 w-[1px] bg-blue-600" />
        <div className="flex items-center">
          <Icon icon="repeat" className="h-4 w-4" />
          <p>매일 반복</p>
        </div>
      </div>
    </div>
  );
};

export default List;
