import cn from "@/utils/clsx";
import { Button, Icon } from "@/components/index";

/**
 * @author junyeol
 * @returns 댓글 작성 컴포넌트
 */

const InputReply = () => {
  return (
    <div className="flex w-full max-w-[732px] flex-col py-3">
      <hr className="bg-gray-300" />
      <div className="gap-6 pl-3 pr-6 flex-center">
        <textarea
          placeholder="댓글을 달아주세요"
          className="w-full max-w-[708px]"
        />
        <Button
          variant="none"
          className="rounded-full bg-gray-800 hover:bg-blue-100"
        >
          <Icon icon="upArrow" width={16} height={16} />
        </Button>
      </div>
      <hr className="bg-gray-300" />
    </div>
  );
};

export default InputReply;
