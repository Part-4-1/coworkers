"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dropdown, Profile } from "@/components/index";
import Link from "next/link";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import { useLogout } from "@/hooks/api/user/use-logout";
import { useRouter } from "next/navigation";
/**
 * @author leohan
 * @description 사이드바의 하단 영역(푸터)에 표시되는 사용자 정보 또는 로그인 버튼 컴포넌트입니다.
 * 사이드바의 열림/닫힘 상태에 따라 아이콘 크기가 변경되고 텍스트가 애니메이션됩니다.
 * @param isSidebarOpen - 사이드바가 현재 열려있는지(true) 닫혀있는지(false) 상태를 나타내는 값입니다.
 */

const SidebarFooter = ({
  isSidebarOpen,
  currentTeamId,
}: {
  isSidebarOpen: boolean;
  currentTeamId: string;
}) => {
  const router = useRouter();
  const { data: userInfo, isPending } = useGetUserInfoQuery();

  const currentTeamIndex = userInfo?.memberships?.findIndex(
    (data) => String(data.group.id) === currentTeamId
  );

  const { handleLogout } = useLogout();
  const isLoggedIn = !!userInfo && !isPending;
  return isLoggedIn ? (
    <div className="mb-6 flex gap-3 border-t border-gray-300 pt-5">
      <div
        className={`relative rounded-lg ${isSidebarOpen ? "h-10 w-10" : "h-8 w-8"}`}
      >
        <Dropdown
          trigger={
            <Profile
              image={userInfo.image}
              size={`${isSidebarOpen ? "lg" : "md"}`}
            />
          }
          items={[
            { label: "계정 설정", onClick: () => router.replace("/mypage") },
            {
              label: "로그아웃",
              onClick: handleLogout,
            },
          ]}
          isWidthFull={false}
          isDirectionDown={false}
          menuAlign="start"
        />
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
            <span className="truncate text-sm font-medium text-blue-700">
              {userInfo.nickname}
            </span>
            <span className="truncate text-xs text-gray-700">
              {userInfo?.memberships?.[currentTeamIndex || 0]?.group.name ||
                null}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : (
    <Link
      href="/signin"
      className="mb-6 flex gap-3 border-t border-gray-300 pt-5"
    >
      {isSidebarOpen && (
        <div
          className={`relative rounded-lg ${isSidebarOpen ? "h-10 w-10" : "h-8 w-8"}`}
        >
          <Profile
            image={userInfo?.image}
            size={`${isSidebarOpen ? "lg" : "md"}`}
          />
        </div>
      )}
      <span
        className={`flex flex-col justify-center whitespace-nowrap hover:text-gray-600 ${isSidebarOpen && "gap-[2px]"}`}
      >
        로그인
      </span>
    </Link>
  );
};

export default SidebarFooter;
