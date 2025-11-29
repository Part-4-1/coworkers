import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../markdown.module.css";
import { ChangeEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { TaskChip } from "@/components";

interface TaskDetailMarkdownEditorProps {
  name: string;
  description: string;
  handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  newDescriptionRef: string;
}

const TaskDetailMarkdownEditor = ({
  name,
  description,
  handleDescriptionChange,
  newDescriptionRef,
}: TaskDetailMarkdownEditorProps) => {
  const [isMdPreview, setIsMdPreview] = useState<boolean>(
    description ? true : false
  );

  return (
    <div className={styles.markdown}>
      <div className="flex flex-col">
        <div className="mb-4 flex items-center gap-2">
          <TaskChip
            radioName="view-type"
            taskName="Text"
            id="text"
            onClick={() => setIsMdPreview(false)}
            defaultChecked={!isMdPreview}
          />
          <TaskChip
            radioName="view-type"
            taskName="Preview"
            id="preview"
            onClick={() => setIsMdPreview(true)}
            defaultChecked={isMdPreview}
          />
        </div>
        {isMdPreview ? (
          <Markdown rehypePlugins={[remarkGfm]}>
            {newDescriptionRef ? newDescriptionRef : description}
          </Markdown>
        ) : (
          <TextareaAutosize
            name={`${name} description`}
            defaultValue={description}
            placeholder="할 일 내용을 입력하세요."
            onChange={handleDescriptionChange}
            className="h-auto w-full resize-none text-md focus:outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default TaskDetailMarkdownEditor;
