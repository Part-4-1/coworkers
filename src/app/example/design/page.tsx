import cn from "@/utils/clsx";

const ColorBox = ({ className }: { className: string }) => {
  return (
    <div className={cn("h-[100px] w-[100px] rounded-3xl", className)}></div>
  );
};

const Page = () => {
  return (
    <div className="flex justify-evenly pt-5">
      <div>
        <p className="mb-5 text-2xl font-medium text-white">Color</p>
        <div className="flex">
          <ColorBox className="bg-blue-200" />
          <ColorBox className="bg-gray-200" />
          <ColorBox className="bg-blue-500" />
        </div>
        <div className="flex">
          <ColorBox className="bg-purple" />
          <ColorBox className="bg-cyan" />
          <ColorBox className="bg-pink" />
          <ColorBox className="bg-red-200" />
          <ColorBox className="bg-orange" />
          <ColorBox className="bg-yellow" />
        </div>
        <div className="flex">
          <ColorBox className="bg-white" />
          <ColorBox className="bg-gray-50" />
          <ColorBox className="bg-gray-300" />
          <ColorBox className="border border-gray-300 bg-white" />
        </div>
        <div className="flex">
          <ColorBox className="bg-gray-700" />
          <ColorBox className="bg-blue-300" />
          <ColorBox className="bg-blue-400" />
        </div>
        <div>
          <ColorBox className="bg-gray-100/50" />
        </div>
        <div className="flex">
          <ColorBox className="bg-blue-700" />
          <ColorBox className="bg-blue-600" />
          <ColorBox className="border border-gray-300 bg-blue-800" />
          <ColorBox className="bg-gray-800" />
          <ColorBox className="border border-gray-300 bg-white" />
          <ColorBox className="border border-gray-300 bg-gray-700" />
        </div>
        <div>
          <ColorBox className="bg-red-100" />
        </div>
        <div className="flex">
          <ColorBox className="border border-gray-300 bg-gray-800" />
          <ColorBox className="bg-gray-100" />
          <ColorBox className="bg-blue-100" />
        </div>
      </div>
      <div>
        <p className="mb-5 text-2xl text-white">Font</p>
        <div className="mb-24 flex flex-col gap-4">
          <p className="text-4xl font-medium text-white">
            Text-4xl&nbsp; 40px/48px&nbsp; medium
          </p>
          <p className="text-3xl font-bold text-white">
            Text-4xl&nbsp; 32px/38px&nbsp; bold
          </p>
          <p className="text-3xl font-semibold text-white">
            Text-3xl&nbsp; 32px/38px&nbsp; semibold
          </p>
          <p className="text-2xl font-bold text-white">
            Text-2xl&nbsp; 24px/28px&nbsp; bold
          </p>
          <p className="text-2xl font-semibold text-white">
            Text-2xl&nbsp; 24px/28px&nbsp; semibold
          </p>
          <p className="text-2xl font-medium text-white">
            Text-2xl&nbsp; 24px/28px&nbsp; medium
          </p>
          <p className="text-2xl text-white">
            Text-2xl&nbsp; 24px/28px&nbsp; regular
          </p>
          <p className="text-xl font-bold text-white">
            Text-xl&nbsp; 20px/24px&nbsp; bold
          </p>
          <p className="text-xl font-semibold text-white">
            Text-xl&nbsp; 20px/24px&nbsp; semibold
          </p>
          <p className="text-xl font-medium text-white">
            Text-xl&nbsp; 20px/24px&nbsp; medium
          </p>
          <p className="text-xl text-white">
            Text-xl&nbsp; 20px/24px&nbsp; regular
          </p>
          <p className="text-2lg font-bold text-white">
            Text-2lg&nbsp; 18px/21px&nbsp; bold
          </p>
          <p className="text-2lg font-semibold text-white">
            Text-2lg&nbsp; 18px/21px&nbsp; semibold
          </p>
          <p className="text-2lg font-medium text-white">
            Text-2lg&nbsp; 18px/21px&nbsp; medium
          </p>
          <p className="text-2lg text-white">
            Text-2lg&nbsp; 18px/21px&nbsp; regular
          </p>
          <p className="text-lg font-bold text-white">
            Text-lg&nbsp; 16px/19px&nbsp; bold
          </p>
          <p className="text-lg font-semibold text-white">
            Text-lg&nbsp; 16px/19px&nbsp; semibold
          </p>
          <p className="text-lg font-medium text-white">
            Text-lg&nbsp; 16px/19px&nbsp; medium
          </p>
          <p className="text-lg text-white">
            Text-lg&nbsp; 16px/19px&nbsp; regular
          </p>
          <p className="text-md font-bold text-white">
            Text-md&nbsp; 14px/17px&nbsp; bold
          </p>
          <p className="text-md font-semibold text-white">
            Text-md&nbsp; 14px/17px&nbsp; semibold
          </p>
          <p className="text-md font-medium text-white">
            Text-md&nbsp; 14px/17px&nbsp; medium
          </p>
          <p className="text-md text-white">
            Text-md&nbsp; 14px/17px&nbsp; regular
          </p>
          <p className="text-sm font-semibold text-white">
            Text-md&nbsp; 13px/16px&nbsp; semibold
          </p>
          <p className="text-sm font-medium text-white">
            Text-md&nbsp; 13px/16px&nbsp; medium
          </p>
          <p className="text-xs font-medium text-white">
            Text-md&nbsp; 13px/16px&nbsp; medium
          </p>
          <p className="text-xs text-white">
            Text-md&nbsp; 13px/16px&nbsp; regular
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
