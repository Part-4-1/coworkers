import Image from "next/image";
import { mockUser } from "@/mocks/sidebar-data";
import { AnimatePresence, motion } from "framer-motion";

const SidebarFooter = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const isLoggedIn = true; // 임시 로그인 확인

  return isLoggedIn ? (
    <div className="mb-6 flex gap-3 border-t border-gray-300 pt-5">
      <div
        className={`relative rounded-lg ${isSidebarOpen ? "h-10 w-10" : "h-8 w-8"}`}
      >
        <Image
          src={mockUser[0].image || "/default-profile.png"}
          alt="프로파일 이미지"
          fill
          style={{ objectFit: "cover" }}
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
            <span className="whitespace-nowrap text-sm font-medium text-blue-700">
              {mockUser[0].nickname}
            </span>
            <span className="whitespace-nowrap text-xs text-gray-700">
              {mockUser[0].memberships[0].group.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : (
    <div className="mb-6 flex gap-3 border-t border-gray-300 pt-5">
      <div
        className={`relative rounded-lg ${isSidebarOpen ? "h-10 w-10" : "h-8 w-8"}`}
      >
        <Image
          src={"/default-profile.png"}
          alt="프로파일 이미지"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {isSidebarOpen && (
        <span className="flex flex-col justify-center gap-[2px] whitespace-nowrap">
          로그인
        </span>
      )}
    </div>
  );
};

export default SidebarFooter;
