import cn from "@/utils/clsx";

/**
 * @author junyeol
 * @description 자유게시판, 할 일 생성에서 사용되는 Textarea 컴포넌트
 * @params placeholder - 텍스트가 없을시 표기되는 텍스트
 * @params width - Textarea의 width
 * @params height - Textarea의 height
 */

interface InputBoxProps {
  placeholder: string;
  width?: string;
  height?: string;
}

/**
 * @author junyeol
 * @description InputBox 컴포넌트
 * @example
 * <InputBox
 *  placeholder="메모를 입력해주세요."
 *  width="w-full tablet:max-w-[600px] pc:max-w-[900px]"
 *  height="max-h-[75px] tablet:max-h-[100px] pc:max-h-[150px]"
 * />
 */

const InputBox = ({
  placeholder,
  width = "w-full",
  height = "h-[75px]",
}: InputBoxProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className={cn(
        "resize-none overflow-y-auto rounded-xl border border-gray-300 px-4 py-3 pb-6 font-normal focus:border-blue-400 focus:outline-none",
        "text-md placeholder:text-sm",
        "tablet:text-lg tablet:placeholder:text-md",
        "pc:text-lg pc:placeholder:text-md",
        width,
        height
      )}
    />
  );
};

export default InputBox;
