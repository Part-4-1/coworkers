import Link from "next/link";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.9 }}
        className="flex flex-col gap-7 px-6 py-20 text-center flex-center"
      >
        <div>
          <h2 className="text-2lg font-bold text-blue-200 tablet:text-2xl">
            지금 바로 시작해보세요
          </h2>
          <p className="mt-2 text-xs text-gray-800 tablet:mt-3 tablet:text-lg">
            팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
          </p>
        </div>
        <Link
          href={"/signin"}
          className="w-full max-w-[160px] text-nowrap rounded-xl bg-blue-200 px-9 py-[14px] text-center text-lg font-semibold text-white hover:bg-blue-300"
        >
          지금 시작하기
        </Link>
      </motion.div>
    </section>
  );
};

export default CtaSection;
