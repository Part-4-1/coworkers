import { Icon } from "@/components/index";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CalendarSection() {
  return (
    <section id="calendar" className="bg-blue-200 pc:pl-20">
      <div className="grid max-w-[1608px] items-center gap-0 px-0 pb-0 pt-11 text-white pc:grid-cols-[2fr_1fr] pc:gap-16 pc:px-6 pc:pt-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-2 ml-0 self-end pc:order-1 pc:ml-8"
        >
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet="/images/landing-main3.png"
            />
            <Image
              src="/images/landing-main3-3.png"
              alt="주간 업무 달력 보기 화면"
              className="h-auto w-full max-w-none"
              width={1254}
              height={864}
            />
          </picture>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="order-1 mb-7 ml-9 self-start text-left tablet:ml-12 pc:order-2 pc:mb-0 pc:ml-0 pc:self-center pc:justify-self-center"
        >
          <div className="flex flex-col gap-1">
            <Icon
              icon="progressCheck"
              className="h-7 w-7 text-blue-400 tablet:h-10 tablet:w-10 pc:h-12 pc:w-12"
            />
            <h2 className="text-left text-lg font-bold tablet:text-2xl pc:text-3xl">
              세부적으로 할 일들을
              <br /> 간편하게 체크해요
            </h2>
          </div>
          <p className="mt-4 text-xs text-blue-50 tablet:text-md pc:text-lg">
            일정에 맞춰 해야 할 세부 항목을 정리하고,
            <br /> 하나씩 빠르게 완료해 보세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
