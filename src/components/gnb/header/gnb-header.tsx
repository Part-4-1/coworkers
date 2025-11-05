import Icon from "@/components/icon/Icon";
import Image from "next/image";
import Link from "next/link";

/**
 * @author leohan
 * @description 모바일/태블릿 환경(375px 이하)에서 사용되는 상단 네비게이션 바(GNB) 컴포넌트입니다.
 * 로그인 상태에 따라 두 가지 레이아웃(로그인된 사용자 메뉴 vs. 로고만)을 조건부로 렌더링합니다.
 */

const GnbHeader = () => {
  const isLoggedIn = false;
  return (
    <div className="w-full max-w-[375px] border-b border-gray-300">
      {isLoggedIn ? (
        <div className="flex justify-between pl-4 pr-[14px]">
          <div className="flex gap-3 py-[14px]">
            <Icon icon="menu" className="h-6 w-6" />
            <Link href={"/"}>
              <Icon icon="logo" className="h-6 w-6" />
            </Link>
          </div>
          <Link
            className="relative my-3 h-7 w-7 overflow-hidden rounded-full"
            href={"/"}
          >
            <Image
              src={"/default-profile.png"}
              alt="프로파일 이미지"
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
      ) : (
        <Link
          href={"/"}
          className="flex items-center justify-start gap-[3px] p-4"
        >
          <Icon icon="logo" className="h-4 w-4" />
          <h1 className="text-[12.5px] font-bold text-blue-200">COWORKERS</h1>
        </Link>
      )}
    </div>
  );
};

export default GnbHeader;
