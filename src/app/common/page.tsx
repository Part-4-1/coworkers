"use client";

import {
  Badge,
  Button,
  Calendar,
  CalendarTime,
  Checkbox,
  Dropdown,
  Icon,
  ImageUpload,
  InputBox,
  InputReply,
  PostCard,
  Profile,
  ProfileEdit,
  ProfileMember,
  Progressbar,
  Reply,
  TaskCard,
  TaskChip,
  TaskHeader,
  TextInput,
  TaskModal,
} from "@/components/index";
import {
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "@/constants/regex";

import List from "@/components/list/list";
import { useImageUpload } from "@/hooks/image-upload/use-image-upload";
import useToast from "@/hooks/use-toast";
import { useCreateComment } from "@/hooks/api/comments/use-create-comment";
import { mockComments } from "@/mocks/comment-data";
import { mockGroupData } from "@/mocks/group-data";
import { mockListData } from "@/mocks/list-data";
import { mockUserData } from "@/mocks/user-data";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { previews } = useImageUpload({ maxCount: 5 });
  const { success, error, warning } = useToast();
  const singleComment = mockComments[0];
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { mutate: createComment, isPending } = useCreateComment(26355);
  const {
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    setUploadedImages(previews.map((preview) => preview.url));
  }, [previews]);

  return (
    <div className="mb-[300px] mt-10 w-full gap-4 flex-col-center">
      <form className="mt-10 w-full gap-4 flex-col-center">
        <TextInput
          id="email"
          type="email"
          placeholder="이메일을 입력하세요."
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: EMAIL_REGEX,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
        />

        <TextInput
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력하세요."
          errorMessage={errors.password?.message}
          rightIconClassName="pr-2"
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon
                icon={showPassword ? "visible" : "invisible"}
                className="h-6 w-6 text-gray-800"
              />
            </button>
          }
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: PASSWORD_REGEX,
              message: "영문, 숫자, !@#$%^&*만 사용할 수 있습니다.",
            },
            minLength: {
              value: PASSWORD_MIN_LENGTH,
              message: "비밀번호는 최소 8자 이상입니다.",
            },
          })}
        />

        <TextInput
          id="email-readonly"
          type="email"
          value="user@example.com"
          readOnly
        />

        <TextInput
          id="password-readonly"
          type="password"
          value="********"
          readOnly
          rightIcon={<Button size="sm">변경하기</Button>}
        />
      </form>
      <Reply comment={singleComment} />
      <InputReply
        onSubmit={(text) => createComment(text)}
        disabled={isPending}
      />
      <div className="w-[300px] gap-2 flex-col-center">
        <Button>생성하기</Button>
        <Button variant="outlined">생성하기</Button>
        <Button variant="outlined-secondary">생성하기</Button>
        <Button variant="alert">삭제하기</Button>
        <Button
          variant="outlined"
          className="w-fit rounded-lg px-3 py-2 text-md"
        >
          생성하기
        </Button>
        <Button className="w-fit rounded-[40px] pl-[16px] pr-5 text-md">
          <Icon icon="checkInverse" className="h-4 w-4" />
          완료 취소하기
        </Button>
        <Button variant="none" className="h-8 w-8 rounded-full bg-gray-300">
          <Icon icon="smallPencil" className="h-4 w-3" />
        </Button>
        <Button variant="outlined" size="sm">
          변경하기
        </Button>
      </div>
      <div className="flex gap-5">
        <Profile></Profile>
        <Profile image={mockUserData[0].image}></Profile>
        <Profile size="md"></Profile>
        <Profile image={mockUserData[1].image} size="md"></Profile>
        <Profile size="sm"></Profile>
        <Profile image={mockUserData[2].image} size="sm"></Profile>
        <Profile size="lg"></Profile>
        <Profile image={mockUserData[2].image} size="lg"></Profile>
      </div>
      <div className="flex items-center justify-center bg-gray-600 px-3 py-3">
        <ProfileEdit />
        <ProfileEdit image={mockUserData[0].image} />
      </div>
      <div className="flex gap-5">
        <ProfileMember
          userImage={mockGroupData[0].members[0].userImage}
          userEmail={mockGroupData[0].members[0].userEmail}
          userName={mockGroupData[0].members[0].userName}
        />
        <ProfileMember
          userEmail={mockGroupData[0].members[0].userEmail}
          userName={mockGroupData[0].members[0].userName}
        />
      </div>
      <div>
        <CalendarTime />
      </div>
      <div className="flex gap-5">
        <Dropdown
          items={[
            { label: "법인 등기", addon: <Badge total={5} completed={3} /> },
            { label: "법인 설립", addon: <Badge total={5} completed={5} /> },
            { label: "정기 주총", addon: <Badge total={10} completed={2} /> },
          ]}
          isWidthFull
          defaultTriggerClassName="w-[241px] h-[54px] font-medium"
        />
        <Dropdown
          items={[{ label: "최신순" }, { label: "좋아요 많은순" }]}
          isWidthFull={true}
          defaultTriggerClassName="w-[130px] h-[48px]"
        ></Dropdown>
        <Dropdown
          trigger={<Profile></Profile>}
          items={[
            { label: "마이 히스토리" },
            { label: "계정 설정" },
            { label: "팀 참여" },
            { label: "로그아웃" },
          ]}
          isWidthFull={false}
        />
      </div>
      <div className="flex flex-col gap-5 flex-center">
        <Button size="sm" onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
          캘린더 토글
        </Button>
        <div className={isCalendarOpen ? "" : "hidden"}>
          <Calendar />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Progressbar progressRate={100} />
        <Progressbar progressRate={25} />
        <Progressbar progressRate={0} />
      </div>
      <div className="w-[300px]">
        <TaskHeader
          btnClick={() => {
            alert("버튼 클릭");
          }}
          todoName="할 일"
        />
      </div>
      <InputBox
        placeholder="메모를 입력해주세요."
        width="w-full max-w-[336px]"
      />
      <InputBox placeholder="내용을 입력하세요" width="w-full max-w-[336px]" />
      <div className="flex gap-2 bg-slate-600 px-4 py-4">
        <Badge total={0} completed={0} />
        <Badge total={5} completed={3} />
        <Badge total={5} completed={5} />
      </div>
      <div className="flex gap-2 bg-slate-600 px-4 py-4">
        <Badge total={0} completed={0} size="lg" className="bg-gray-300" />
        <Badge total={5} completed={3} size="lg" />
        <Badge total={5} completed={5} size="lg" />
      </div>
      <div className="w-[300px]">
        <TaskChip
          id="task-1"
          radioName="task"
          taskName="오늘 할 일"
          count={5}
        />
        <TaskChip id="task-2" radioName="task" taskName="진행 중" count={2} />
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[600px]">
          <ImageUpload maxCount={5} />
        </div>
      </div>
      <div>
        <Checkbox id={12345} isDone={"2025-11-07T00:00:00Z"} />
        <Checkbox
          id={12346}
          taskName="법인 설립 안내드리기"
          isDone={null}
          size="sm"
        />
        <Checkbox
          id={12347}
          taskName="법인 설립 안내드리기"
          size="lg"
          isDone={null}
        />
        <Checkbox
          id={12348}
          taskName="법인 설립 안내드리기"
          size="sm"
          isDone={"2025-11-07T00:00:00Z"}
        />
      </div>
      <div className="w-[500px]">
        <TaskCard taskTitle="법인 설립" total={5} completed={4} />
        <TaskCard
          taskTitle="법인 설립"
          total={5}
          completed={2}
          taskList={[
            { id: 12345, taskName: "법인 설립 안내 드리기", isDone: null },
            { id: 12346, taskName: "법인 설립 안내 드리기2", isDone: null },
            {
              id: 12347,
              taskName:
                "긴 텍스트 말줄임표 테스트긴 텍스트 말줄임표 테스트긴 텍스트 말줄임표 테스트긴 텍스트 말줄임표 테스트",
              isDone: "2025-11-01T10:00:00Z",
            },
          ]}
          onClickCheckbox={(e: MouseEvent<HTMLLIElement>) =>
            console.log(e.currentTarget.dataset.id)
          }
        />
      </div>
      <div className="w-[340px]">
        <PostCard
          imgUrl="https://randomuser.me/api/portraits/men/12.jpg"
          title="커피머신 고장 신고합니다 ☕️"
          content={`오늘 아침 출근과 동시에 알게 된 사실...
커피머신이 고장났습니다. 이로 인해 많은 직원들이 커피를 마시지 못하고 있어 업무 효율이 떨어지고 있습니다.
빠른 수리 부탁드립니다.`}
          writer="황휘태"
          createdAt="2025-11-07T22:26:18Z"
          likes={123}
          isLiked={false}
        />
        <PostCard
          imgUrl="https://randomuser.me/api/portraits/men/12.jpg"
          title="커피머신 고장 신고합니다 ☕️"
          content={`오늘 아침 출근과 동시에 알게 된 사실...
커피머신이 고장났습니다. 이로 인해 많은 직원들이 커피를 마시지 못하고 있어 업무 효율이 떨어지고 있습니다.
빠른 수리 부탁드립니다.`}
          writer="황휘태"
          createdAt="2025-11-07T22:26:18Z"
          likes={1230}
          isLiked={true}
          isBest
        />
        <PostCard
          title="커피머신 고장 신고합니다 ☕️"
          content={`오늘 아침 출근과 동시에 알게 된 사실...
커피머신이 고장났습니다. 이로 인해 많은 직원들이 커피를 마시지 못하고 있어 업무 효율이 떨어지고 있습니다.
빠른 수리 부탁드립니다.`}
          writer="황휘태"
          createdAt="2025-11-07T22:26:18Z"
          likes={1230}
          isLiked={true}
          isBest
        />
      </div>
      <TaskModal
        groupId={3304}
        taskListId={4712}
        onSuccess={() => success("할 일이 생성되었습니다!")}
      />
      {mockListData.tasks.map((task) => {
        return (
          <List
            key={task.id}
            id={task.id}
            name={task.name}
            date={task.date}
            doneAt={task.doneAt}
            commentCount={task.commentCount}
            frequency={task.frequency}
          />
        );
      })}
      <div className="mt-8 w-full max-w-[300px] gap-2 flex-col-center">
        <Button
          className="bg-emerald-400"
          onClick={() => success("성공적으로 실행되었습니다 !")}
        >
          성공 토스트
        </Button>
        <Button
          variant="alert"
          onClick={() => error("앗, 실패하였습니다. 다시 시도해주세요 !")}
        >
          오류 토스트
        </Button>
        <Button
          className="bg-orange"
          onClick={() => warning("저장하지 않은 변경사항이 있어요 !")}
        >
          경고 토스트
        </Button>
      </div>
    </div>
  );
};

export default Page;
