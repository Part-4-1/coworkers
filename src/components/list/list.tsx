import React, { MouseEventHandler } from "react";
import { Button, Checkbox, Dropdown, Icon } from "@/components/index";
import cn from "@/utils/clsx";
import { toKoreanDateString } from "@/utils/date-util";
import { changeFrequencyCode } from "@/utils/util";

interface ListProps {
  id: number;
  date: string;
  name: string;
  doneAt: string | null;
  commentCount: number;
  frequency: string;
  className?: string;
  onClickCheckbox: MouseEventHandler<HTMLInputElement>;
}

const List = ({
  id,
  date,
  name,
  doneAt,
  commentCount,
  frequency,
  className,
  onClickCheckbox,
}: ListProps) => {
  const repeatPeriod = changeFrequencyCode(frequency);

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col gap-[10px] rounded-lg border border-gray-300 bg-white px-[14px] py-3 hover:bg-gray-100",
        className
      )}
    >
      <div className="flex justify-between">
        <div className="gap-3 flex-center">
          <Checkbox
            id={id}
            isDone={doneAt}
            taskName={name}
            onClickCheckbox={onClickCheckbox}
          />
          {!!commentCount && (
            <Button
              variant="none"
              className="flex items-center gap-[2px]"
              onClick={() => {}}
            >
              <Icon icon="comment" className="h-4 w-4 text-gray-800" />{" "}
              <span className="text-xs text-gray-800">{commentCount}</span>
            </Button>
          )}
        </div>
        <Dropdown
          trigger={
            <Button variant="none">
              <Icon icon="kebab" className="h-4 w-4" />
            </Button>
          }
          items={[
            { label: "수정하기", onClick: () => {} },
            { label: "삭제하기", onClick: () => {} },
          ]}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[6px]">
          <Icon
            icon="calendar"
            className="ml-[2px] h-3 w-3 tablet:ml-1 tablet:h-4 tablet:w-4"
          />
          <span className="text-xs text-gray-800">
            {toKoreanDateString(date)}
          </span>
        </div>
        <>
          <span className="h-3 w-[1px] bg-blue-600" />
          <div className="flex items-center gap-[6px]">
            <Icon icon="repeat" className="h-3 w-3 tablet:h-4 tablet:w-4" />
            <span className="text-xs text-gray-800">{repeatPeriod}</span>
          </div>
        </>
      </div>
    </div>
  );
};

export default List;
