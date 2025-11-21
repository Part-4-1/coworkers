import { TaskList } from "@/types/taskList";

export const getTasksTodo = (taskLists: TaskList[]): number => {
  return taskLists.reduce((sum, taskList) => sum + taskList.tasks.length, 0);
};

export const getTasksDone = (taskLists: TaskList[]): number => {
  return taskLists.reduce((sum, taskList) => {
    const doeCount = taskList.tasks.filter(
      (task) => task.doneAt !== null
    ).length;
    return sum + doeCount;
  }, 0);
};
