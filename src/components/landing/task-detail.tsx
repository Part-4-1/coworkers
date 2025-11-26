import { Icon } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TaskDetailSection() {
  return (
    <section id="task-detail" className="bg-gray-100 pc:pl-16">
      <div className="grid max-w-[1608px] items-center gap-16 px-6 pb-0 pt-28 tablet:pl-11 pc:ml-12 pc:grid-cols-[1fr_2fr]">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-2 self-end md:order-2"
        >
          <Image
            src="/images/landing-main4.png"
            alt="상세 업무 모달 및 댓글 기능"
            className="h-auto w-full max-w-[940px] rounded-xl border border-gray-100 drop-shadow-2xl"
            width={849}
            height={705}
            quality={100}
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="order-1 flex flex-col gap-4 text-left md:order-1"
        >
          <div className="flex flex-col gap-1">
            <Icon
              icon="chatApp"
              className="h-7 w-7 text-blue-400 tablet:h-10 tablet:w-10 pc:h-12 pc:w-12"
            />
            <h2 className="text-left text-lg font-bold text-blue-200 tablet:text-2xl pc:text-3xl">
              할 일 공유를 넘어
              <br /> 의견을 나누고 함께 결정해요
            </h2>
          </div>
          <p className="text-left text-xs font-normal text-gray-700 tablet:text-md pc:text-lg">
            댓글로 진행상황을 기록하고 피드백을 주고받으며
            <br /> 함께 결졍을 내릴 수 있어요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
