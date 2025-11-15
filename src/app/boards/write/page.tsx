import ArticleWriteContents from "./article-write-contents/article-write-contents";

const Page = () => {
  return (
    <div className="mx-auto my-[100px] w-full max-w-[343px] rounded-[20px] bg-white tablet:max-w-[620px] pc:max-w-[900px]">
      <ArticleWriteContents />
    </div>
  );
};

export default Page;
