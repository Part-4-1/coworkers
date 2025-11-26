import UserSettingContents from "./_components/user-setting-contents";

const MyPage = () => {
  return (
    <div className="tablet:[176px] pc:[156px] mt-[75px] flex-center">
      <div className="min-h-[556px] w-[343px] rounded-[20px] bg-white tablet:h-[745px] tablet:w-[550px] pc:w-[940px]">
        <UserSettingContents />
      </div>
    </div>
  );
};

export default MyPage;
