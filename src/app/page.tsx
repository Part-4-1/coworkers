"use client";

import { Button, Icon } from "@/components/index";
import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";

// Next.js 환경을 고려하여 Image 컴포넌트 Link를 사용

/**
 * 1. Coworkers 메인 이미지 영역(landing-main1.png)
 */
function HeroVisual() {
  // 파일 경로를 'landing-main1.png'로 변경합니다.
  const imageSrc = "/images/landing-main1.png"; // 최상단 전체 이미지
  const [showImage, setShowImage] = useState(true);

  return (
    <div className="relative">
      {/* 이미지 소스를 'landing-main1.png'로 변경했습니다.
                alt 텍스트도 새 이미지에 맞게 수정했습니다.
                max-w-4xl 클래스는 큰 화면에서 이미지가 너무 커지는 것을 방지하고,
                w-full과 h-auto는 작은 화면에서 비율에 맞게 줄어들도록 하여
                반응형 웹을 구현합니다.
            */}
      <img
        src={imageSrc}
        alt="Coworkers 팀 대시보드 및 칸반보드 미리보기"
        className="mx-auto h-auto w-full max-w-[1330px] rounded-xl border border-gray-100 drop-shadow-xl"
        onError={() => setShowImage(false)}
      />
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
    <div className="rounded-2xl bg-white p-6 md:p-10">
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
    <div className="shadow-2xl rounded-2xl bg-white p-6 md:p-10">
      <img
        src="/images/landing-main3.png"
        alt="주간 업무 달력 보기 화면"
        className="mx-auto h-auto w-full max-w-[982px] rounded-xl"
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
    <div className="rounded-2xl bg-white p-6 md:p-10">
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
    <main className="min-h-screen bg-white text-gray-900 pc:ml-[-270px]">
      {/* 
               SECTION 1: HERO - 메인 소개 및 전체 이미지 (랜딩 페이지)
             */}
      <section className="bg-[#F5F8FF] py-20">
        <div className="mx-auto grid max-w-[1608px] items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Icon icon="board" className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-semibold text-blue-500">
                함께 만들어가는 To do list
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#4F7CFD]">
              Coworkers
            </h2>
          </div>
          {/* Hero Visual은 이미지 비율 유지를 위해 별도 컴포넌트로 분리 */}
          <div className="pt-10 md:pt-0">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 
               SECTION 2: FEATURE 1 - 칸반보드 관리 (landing-main2.png)
             */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1608px] items-center gap-16 px-6 py-28 md:grid-cols-2">
          <div className="md:order-2">
            <KanbanBoardSection />
          </div>
          <div className="md:order-1">
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
        <div className="mx-auto grid max-w-[1608px] items-center gap-16 px-6 py-28 text-white md:grid-cols-2">
          <CalendarSection />
          <div className="md:order-1">
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
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1608px] items-center gap-16 px-6 py-28 md:grid-cols-2">
          <div className="md:order-2">
            <TaskDetailSection />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-extrabold text-[#4F7CFD]">
              할 일 공유를 넘어 의견을 나누고 함께 결정해요
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              댓글로 진행상황을 기록하고 피드백을 주고받으며 함께 결졍을 내릴 수
              있어요.
            </p>
          </div>
        </div>
      </section>

      {/* 
               SECTION 5: CTA - 최종 시작하기
             */}
      <section className="bg-[#F5F8FF]">
        <div className="mx-auto max-w-[1608px] px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-[#4F7CFD]">
            지금 바로 시작해보세요
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
          </p>
        </div>
      </section>
    </main>
  );
}
