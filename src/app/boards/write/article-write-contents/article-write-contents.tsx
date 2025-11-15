"use client";

import { InputBox, ImageUpload, Button } from "@/components/index";

const ArticleWriteContents = () => {
  return (
    <div className="flex w-full flex-col gap-[48px] px-[22px] py-[45px] tablet:gap-[57px] tablet:px-[40px] tablet:py-[73px] pc:px-[70px]">
      <div className="flex flex-col gap-[32px]">
        <h2 className="text-xl font-bold text-blue-700">게시글 쓰기</h2>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-[6px]">
            <span className="text-lg font-bold text-blue-700">제목</span>
            <span className="text-red-200">*</span>
          </div>
          <InputBox placeholder="제목을 입력해주세요." />
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-[6px]">
            <span className="text-lg font-bold text-blue-700">내용</span>
            <span className="text-red-200">*</span>
          </div>
          <InputBox
            placeholder="내용을 입력하세요."
            height="h-[200px] tablet:h-[240px]"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="text-lg font-bold text-blue-700">이미지</span>
          <ImageUpload />
        </div>
      </div>
      <Button variant="solid" onSubmit={() => {}}>
        등록하기
      </Button>
    </div>
  );
};

export default ArticleWriteContents;
