import { Icon } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gray-50 pl-6 tablet:pl-8"
    >
      <div className="mx-auto grid items-center px-0 pc:grid-cols-[1fr_3fr] pc:gap-x-12 pc:pl-6">
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-row gap-2 tablet:mb-12 tablet:gap-12 pc:mb-[120px] pc:flex-col pc:gap-72"
        >
          <div className="flex flex-col pt-9 tablet:pt-24 pc:gap-1">
            <Icon
              icon="logoLight"
              className="h-9 w-9 text-blue-400 pc:h-12 pc:w-12"
            />
            <div className="pl-3 tablet:pl-6">
              <span className="whitespace-nowrap text-md font-medium text-gray-700 tablet:text-lg pc:text-xl">
                함께 만들어가는 To do list
              </span>
              <h1 className="text-left text-[28px] font-bold text-blue-200 tablet:text-[36px] pc:text-[48px]">
                Coworkers
              </h1>
            </div>
          </div>
          <Link
            href={"/noteam"}
            className="ml-6 max-h-12 w-[160px] flex-shrink-0 self-end rounded-xl bg-blue-200 py-[14px] text-center text-lg font-semibold text-white hover:bg-blue-300 pc:self-start"
          >
            지금 시작하기
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full justify-self-end"
        >
          <Image
            src="/images/landing-main1.png"
            width={1280}
            height={1080}
            className="hidden h-auto w-full pc:block"
            alt="대시보드 미리보기 이미지"
            priority
            quality={100}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="grid"
        >
          <Image
            src="/images/landing-main1-2.png"
            width={1282}
            height={959}
            className="col-start-1 row-start-1 h-auto w-full pc:hidden"
            alt="대시보드 미리보기 이미지"
            priority
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
}
