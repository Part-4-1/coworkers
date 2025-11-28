import NotFoundView from "@/components/not-found/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  description: "요청하신 페이지가 존재하지 않습니다.",
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = () => {
  return (
    <main>
      <NotFoundView />
    </main>
  );
};

export default NotFound;
