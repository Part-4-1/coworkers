"use client";

import { Button, Icon } from "@/components/index";
import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import TeamThumbnail from "@/assets/images/ic-thumbnail-team.svg";

/**
 * 1. Coworkers 메인 이미지 영역(landing-main1.png)
 */
function HeroVisual() {
  // 파일 경로를 'landing-main1.png'로 변경합니다.
  const imageSrc = "/images/landing-main1.png"; // 최상단 전체 이미지

  return (
    <div className="relative ml-auto w-full max-w-[1120px]">
      <img
        src={imageSrc}
        alt="Coworkers 팀 대시보드 및 칸반보드 미리보기"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-inset ring-white/60" />
      <div className="hero-visual-glow pointer-events-none absolute inset-x-12 bottom-[-40px] h-24 rounded-[999px]" />
    </div>
  );
}

/**
 * 2. 칸반보드 영역 (landing-main2.png)
 */
function KanbanBoardSection() {
  // 이미지 경로를 직접 사용합니다.
  const imageSrc = "/images/landing-main2.png";

  return (
    <div className="p-0">
      <img
        src="/images/landing-main2.png"
        alt="칸반보드 업무 목록 상세 화면"
        className="mx-auto h-auto w-full max-w-[1024px] rounded-xl border border-gray-100 drop-shadow-2xl"
      />
    </div>
  );
}

/**
 * 3. 캘린더/일정 영역 (landing-main3.png)
 */
function CalendarSection() {
  // 이미지 경로를 직접 사용합니다.
  const imageSrc = "/images/landing-main3.png";

  return (
    <div className="">
      <img
        src="/images/landing-main3.png"
        alt="주간 업무 달력 보기 화면"
        className="h-auto w-full max-w-none"
      />
    </div>
  );
}

/**
 * 4. 상세 업무/댓글 영역 (landing-main4.png)
 */
function TaskDetailSection() {
  // 이미지 경로를 직접 사용합니다.
  const imageSrc = "/images/landing-main4.png";

  return (
    <div className="">
      <img
        src="/images/landing-main4.png"
        alt="상세 업무 모달 및 댓글 기능"
        className="mx-auto h-auto w-full max-w-[940px] rounded-xl border border-gray-100 drop-shadow-2xl"
      />
    </div>
  );
}

// ===== Main App Component =====
export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 
               SECTION 1: HERO - 메인 소개 및 전체 이미지 (랜딩 페이지)
             */}
      <section className="relative overflow-hidden bg-[#F5F8FF] py-24">
        <div className="mx-auto grid max-w-[1608px] items-center gap-12 px-6 lg:grid-cols-[1fr_2fr]">
          <div className="relative z-10 order-1 space-y-4 lg:order-1 lg:space-y-6">
            <div className="flex flex-col items-start gap-2">
              <Icon icon="logoLight" className="h-12 w-12 text-blue-400" />
              <span className="text-lg text-gray-600">
                함께 만들어가는 To do list
              </span>
            </div>
            <div>
              <h2 className="md:text-5xl text-left text-4xl font-extrabold text-[#4F7CFD]">
                Coworkers
              </h2>
            </div>
            <div className="hidden lg:block">
              <Button className="mr-auto mt-8 !w-1/2 px-4 py-4 text-lg">
                지금 시작하기
              </Button>
            </div>
          </div>
          {/* Hero Visual */}
          <div className="relative z-10 order-2 pt-6 md:mr-[-24px] md:pt-0 lg:order-2">
            <HeroVisual />
            <div className="mt-2 flex justify-end lg:hidden">
              <Button className="!w-1/3 px-4 py-4 text-lg">
                지금 시작하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 
         SECTION 2: FEATURE 1 - 칸반보드 관리 (landing-main2.png)
        */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1608px] items-center gap-16 px-6 py-28 lg:grid-cols-[1fr_2fr]">
          <div className="order-2 md:order-2">
            <KanbanBoardSection />
          </div>
          <div className="order-1 md:order-1">
            <Icon icon="folderFill" className="h-12 w-12 text-blue-400" />
            <h2 className="text-3xl font-extrabold text-[#4F7CFD]">
              칸반보드로 함께 할 일 목록을 관리해요
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              팀원과 함께 실시간으로 할 일을 추가하고 지금 무엇을 해야 하는지
              한문에 볼 수 있어요.
            </p>
          </div>
        </div>
      </section>

      {/* 
         SECTION 3: FEATURE 2 - 캘린더/일정 관리 (landing-main3.png)
       */}
      <section className="bg-[#4F7CFD]">
        <div className="mx-auto grid max-w-[1608px] items-center gap-16 px-6 pb-0 pt-28 text-white lg:grid-cols-[2fr_1fr]">
          <div className="ml-0 self-end lg:ml-8">
            <CalendarSection />
          </div>
          <div className="md:order-1">
            <Icon icon="progressCheck" className="h-12 w-12 text-blue-400" />
            <h2 className="text-3xl font-extrabold">
              세부적으로 할 일들을 간편하게 체크해요
            </h2>
            <p className="mt-4 text-lg opacity-90">
              일정에 맞춰 해야 할 세부 항목을 정리하고, 하나씩 빠르게 완료해
              보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 
         SECTION 4: FEATURE 3 - 상세 업무/소통 (landing-main4.png)
        */}
      <section className="bg-[#F5F8FF]">
        <div className="mx-auto grid max-w-[1608px] items-center gap-16 px-6 pb-0 pt-28 lg:grid-cols-[1fr_2fr]">
          <div className="order-2 self-end md:order-2">
            <TaskDetailSection />
          </div>
          <div className="order-1 text-left md:order-1">
            <Icon icon="chatApp" className="h-12 w-12 text-blue-400" />
            <h2 className="text-left text-3xl font-extrabold text-[#4F7CFD]">
              할 일 공유를 넘어 의견을 나누고 함께 결정해요
            </h2>
            <p className="mt-4 text-left text-lg text-gray-600">
              댓글로 진행상황을 기록하고 피드백을 주고받으며 함께 결졍을 내릴 수
              있어요.
            </p>
          </div>
        </div>
      </section>

      {/* 
         SECTION 5: CTA - 최종 시작하기
      */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1608px] px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-[#4F7CFD]">
            지금 바로 시작해보세요
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
          </p>
          <Button className="mx-auto !w-1/3 px-4 py-4 text-lg">
            지금 시작하기
          </Button>
        </div>
      </section>
    </main>
  );
}
