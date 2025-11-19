import Button from "@/components/button/button";
import Icon from "@/components/icon/Icon";

interface DeleteTeamModalUIProps {
  onConfirm: () => void;
  onClose?: () => void;
}

const DeleteTeamModalUI = ({ onConfirm, onClose }: DeleteTeamModalUIProps) => (
  <div className="flex w-full flex-col px-[36px] pt-[24px] flex-center">
    <div className="mb-[16px]">
      <Icon icon="alert" className="h-[24px] w-[24px] text-red-200" />
    </div>
    <p className="mb-[8px] text-lg font-medium text-blue-700">
      정말 팀을 삭제하시겠습니까?
    </p>
    <div className="mb-[24px] text-center text-md text-blue-600">
      <p>팀을 삭제하면 팀 정보와 모든 멤버의 참여 내역이 사라집니다.</p>
      <p>삭제된 팀은 되돌릴 수 없어요.</p>
    </div>
    <div className="flex gap-[8px] flex-center">
      <Button
        variant="outlined-secondary"
        className="h-[48px] w-[136px]"
        onClick={onClose}
      >
        닫기
      </Button>
      <Button
        variant="alert"
        className="h-[48px] w-[136px]"
        onClick={onConfirm}
      >
        팀 삭제
      </Button>
    </div>
  </div>
);

export default DeleteTeamModalUI;
