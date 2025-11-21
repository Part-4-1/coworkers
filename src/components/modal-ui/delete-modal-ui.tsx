import { ReactNode } from "react";
import Button from "../button/button";
import Icon from "../icon/Icon";

interface DeleteModalUIProps {
  contents: ReactNode;
  description: string;
  handleClick: () => void;
  handleClose: () => void;
}

const DeleteModalUI = ({
  contents,
  description,
  handleClick,
  handleClose,
}: DeleteModalUIProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-6 px-[31.5px] pt-6 tablet:px-9">
      <div className="gap-[18px] flex-col-center">
        <Icon icon="alert" className="h-6 w-6 text-red-200" />
        <div className="gap-2 flex-col-center">
          <p className="text-center text-lg font-medium text-blue-700">
            {contents}
          </p>
          <p className="text-md font-medium text-blue-600">{description}</p>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <Button
          onClick={handleClose}
          variant="outlined-secondary"
          className="h-[48px] tablet:w-[138px]"
        >
          닫기
        </Button>
        <Button
          variant="alert"
          onClick={handleClick}
          className="h-[48px] tablet:w-[138px]"
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
};

export default DeleteModalUI;
