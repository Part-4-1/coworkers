import { Icon } from "@/components";
import Link from "next/link";
import imgHero from "../../../public/images/landing-main1.png";
import imgHero2 from "../../../public/images/landing-main1-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gray-50 pl-8">
      <div className="mx-auto grid items-center px-0 pc:grid-cols-[1fr_3fr] pc:gap-x-12 pc:pl-6">
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col gap-72 tablet:mb-12 pc:mb-[120px]"
        >
          <div className="flex flex-col pt-9 tablet:pt-24 pc:gap-1">
            <Icon
              icon="logoLight"
              className="h-9 w-9 text-blue-400 pc:h-12 pc:w-12"
            />
            <div className="pl-6">
              <span className="text-md font-medium text-gray-700 tablet:text-lg pc:text-xl">
                함께 만들어가는 To do list
              </span>
              <h1 className="text-left text-[28px] font-bold text-blue-200 tablet:text-[36px] pc:text-[48px]">
                Coworkers
              </h1>
            </div>
          </div>
          <Link
            href={"/noteam"}
            className="ml-6 hidden max-w-[160px] rounded-xl bg-blue-200 py-[14px] text-center text-lg font-semibold text-white hover:bg-blue-300 pc:block"
          >
            지금 시작하기
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="justify-self-end"
        >
          <Image
            src={imgHero}
            className="hidden pc:block"
            alt="대시보드 미리보기 이미지"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="grid"
        >
          <Image
            src={imgHero2}
            className="col-start-1 row-start-1 pc:hidden"
            alt="대시보드 미리보기 이미지"
          />
          <div className="z-10 col-start-1 row-start-1 self-end justify-self-end px-10 py-[3vw] pc:hidden">
            <Link
              href={"/noteam"}
              className="w-fit self-end justify-self-center rounded-[1vw] bg-blue-200 px-[2.7vw] py-[1.1vw] text-center text-[1.3vw] font-semibold text-white hover:bg-blue-300"
            >
              지금 시작하기
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
