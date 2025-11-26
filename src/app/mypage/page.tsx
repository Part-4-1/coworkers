import UserSettingContents from "./_components/user-setting-contents";

const MyPage = () => {
  return (
    <div className="mt-[75px] flex-center tablet:mt-[176px] pc:mt-[156px]">
      <div className="min-h-[556px] w-[343px] rounded-[20px] bg-white tablet:h-[745px] tablet:w-[550px] pc:w-[940px]">
        <UserSettingContents />
      </div>
    </div>
  );
};

export default MyPage;
