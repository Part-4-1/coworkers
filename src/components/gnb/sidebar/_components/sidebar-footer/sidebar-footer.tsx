import Image from "next/image";
import { mockUser } from "@/mocks/sidebar-data";
import { AnimatePresence, motion } from "framer-motion";
import { Profile } from "@/components/index";
import Link from "next/link";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";

/**
 * @author leohan
 * @description 사이드바의 하단 영역(푸터)에 표시되는 사용자 정보 또는 로그인 버튼 컴포넌트입니다.
 * 사이드바의 열림/닫힘 상태에 따라 아이콘 크기가 변경되고 텍스트가 애니메이션됩니다.
 * @param isSidebarOpen - 사이드바가 현재 열려있는지(true) 닫혀있는지(false) 상태를 나타내는 값입니다.
 */

const SidebarFooter = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const { data: userInfo, isLoading } = useGetUserInfoQuery();
  //const isLoggedIn = !!userInfo && !isLoading;
  const isLoggedIn = true;
  return isLoggedIn ? (
    <Link
      href={"/userPage"}
      className="mb-6 flex gap-3 border-t border-gray-300 pt-5"
    >
      <div
        className={`relative rounded-lg ${isSidebarOpen ? "h-10 w-10" : "h-8 w-8"}`}
      >
        <Profile size={`${isSidebarOpen ? "lg" : "md"}`} />
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="flex flex-col justify-center gap-[2px] overflow-hidden"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span className="whitespace-nowrap text-sm font-medium text-blue-700">
              {mockUser[0].nickname}
            </span>
            <span className="whitespace-nowrap text-xs text-gray-700">
              {mockUser[0].memberships[0].group.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  ) : (
    <Link
      href="/login"
      className="mb-6 flex gap-3 border-t border-gray-300 pt-5"
    >
      <div
        className={`relative rounded-lg ${isSidebarOpen ? "h-10 w-10" : "h-8 w-8"}`}
      >
        <Profile size={`${isSidebarOpen ? "lg" : "md"}`} />
      </div>
      {isSidebarOpen && (
        <span className="flex flex-col justify-center gap-[2px] whitespace-nowrap">
          로그인
        </span>
      )}
    </Link>
  );
};

export default SidebarFooter;
