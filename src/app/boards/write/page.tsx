import ArticleWriteContents from "./article-write-contents/article-write-contents";

const Page = () => {
  return (
    <div className="mx-auto my-[100px] w-full max-w-[343px] gap-[48px] rounded-[20px] bg-white tablet:max-w-[620px] tablet:gap-[57px] pc:max-w-[900px]">
      <ArticleWriteContents />
    </div>
  );
};

export default Page;
