import { Icon } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

export default function KanbanBoardSection() {
  return (
    <section id="kanban-board" className="bg-white pc:pl-20">
      <div className="grid max-w-[1608px] items-center gap-16 px-2 py-28 tablet:px-10 lg:grid-cols-[1fr_2fr] pc:px-14">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="ml-7 flex flex-col gap-4 pc:mb-28 pc:ml-0"
        >
          <div className="flex flex-col gap-1">
            <Icon
              icon="folderFill"
              className="h-7 w-7 text-blue-400 tablet:h-10 tablet:w-10 pc:h-12 pc:w-12"
            />
            <h2 className="text-lg font-bold text-blue-200 tablet:text-2xl pc:text-3xl">
              칸반보드로 함께
              <br /> 할 일 목록을 관리해요
            </h2>
          </div>
          <p className="text-xs font-normal text-gray-700 tablet:text-md pc:text-lg">
            팀원과 함께 실시간으로 할 일을 추가하고
            <br /> 지금 무엇을 해야 하는지 한문에 볼 수 있어요.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/landing-main2.png"
            alt="칸반보드 업무 목록 상세 화면"
            className="mx-auto h-auto w-full max-w-[1024px] rounded-xl border border-gray-100 drop-shadow-2xl"
            width={1024}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
}
