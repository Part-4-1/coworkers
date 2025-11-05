import { Button, Icon } from "@/components/index";
import TextareaAutosize from "react-textarea-autosize";

/**
 * @author junyeol
 * @returns 댓글 작성 컴포넌트
 */

const InputReply = () => {
  return (
    <div className="flex w-full max-w-[732px] flex-col">
      <hr className="mb-3 bg-gray-300" />
      <div className="gap-6 pl-3 pr-3 flex-center">
        <TextareaAutosize
          placeholder="댓글을 달아주세요"
          className="w-full max-w-[708px] resize-none text-xs text-blue-700 placeholder:text-gray-800 tablet:text-md"
          minRows={1}
        />
        <Button
          variant="none"
          className="h-[24px] w-[24px] flex-shrink-0 rounded-full bg-gray-800 hover:bg-blue-100"
        >
          <Icon icon="upArrow" className="h-4 w-4" />
        </Button>
      </div>
      <hr className="mt-3 bg-gray-300" />
    </div>
  );
};

export default InputReply;
