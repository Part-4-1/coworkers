import { TextInput, Button } from "@/components/index";

interface UserAccountInfoSectionProps {
  email: string;
  onPasswordChangeClick: () => void;
}

const UserAccountInfoSection = ({
  email,
  onPasswordChangeClick,
}: UserAccountInfoSectionProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-start gap-3">
        <label
          htmlFor="email"
          className="text-md font-medium text-blue-700 tablet:text-lg"
        >
          이메일
        </label>
        <TextInput id="email" type="email" value={email} readOnly />
      </div>
      <div className="flex w-full flex-col items-start gap-3">
        <label
          htmlFor="password"
          className="text-md font-medium text-blue-700 tablet:text-lg"
        >
          비밀번호
        </label>
        <TextInput
          id="password"
          type="password"
          value="********"
          readOnly
          rightIcon={
            <Button size="sm" onClick={onPasswordChangeClick}>
              변경하기
            </Button>
          }
        />
      </div>
    </>
  );
};

export default UserAccountInfoSection;
