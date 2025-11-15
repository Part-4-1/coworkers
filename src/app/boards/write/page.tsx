import cn from "@/utils/clsx";
import ArticleWriteContents from "./article-write-contents/article-write-contents";

const Page = () => {
  return (
    <div
      className={cn(
        "mx-auto my-[36px] w-full max-w-[343px] rounded-[20px] bg-white",
        "tablet:mb-[137px] tablet:mt-[117px] tablet:max-w-[620px]",
        "pc:my-[100px] pc:max-w-[900px]"
      )}
    >
      <ArticleWriteContents />
    </div>
  );
};

export default Page;
