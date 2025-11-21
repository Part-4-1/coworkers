"use client";

import KanbanBoardSection from "@/components/landing/kanban-board";
import CalendarSection from "@/components/landing/calendar";
import TaskDetailSection from "@/components/landing/task-detail";
import HeroSection from "@/components/landing/hero";
import CtaSection from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pc:ml-[-198px]">
      <HeroSection />
      <KanbanBoardSection />
      <CalendarSection />
      <TaskDetailSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
