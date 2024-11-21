import { Dispatch, SetStateAction, useState } from 'react';
import { IBackendTasks } from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';

export const useTaskActions = (
  tasks: IBackendTasks[],
  setTasks: Dispatch<SetStateAction<IBackendTasks[]>>
) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    taskId: null as number | null,
    previousStatus: '',
    severity: 'success' as 'success' | 'warning' | 'info' | 'error',
  });

  const closeSnackbar = () => {
    setSnackbar({
      open: false,
      message: '',
      taskId: null,
      previousStatus: '',
      severity: 'success',
    });
  };

  const handleMarkAsComplete = (taskId: number) => {
    //TODO mark the task as completed and send it to backend
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              taskStatus: {
                name: 'Completed',
                description: 'Task completed successfully',
              },
            }
          : task
      )
    );
    triggerSnackbar(taskId, 'Completed', 'success');
  };

  const handleMarkAsIncomplete = (taskId: number) => {
    //TODO mark the task as incompleted and send it to backend
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              taskStatus: {
                name: 'In Progress',
                description: 'Task in progress',
              },
            }
          : task
      )
    );
    triggerSnackbar(taskId, 'In Progress', 'info');
  };

  const handleMarkAsArchived = (taskId: number) => {
    //TODO mark the task as archived and send it to backend
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              taskStatus: { name: 'Archived', description: 'Task archived' },
            }
          : task
      )
    );
    triggerSnackbar(taskId, 'Archived', 'warning');
  };

  const triggerSnackbar = (
    taskId: number,
    newStatus: string,
    severity: 'success' | 'warning' | 'info' | 'error'
  ) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setSnackbar({
        open: true,
        message: `Task "${task.customTitle}" marked as ${newStatus}!`,
        taskId,
        previousStatus: task.taskStatus.name,
        severity,
      });
    }
  };

  const handleUndo = () => {
    //TODO undo the task and send it to backend
    if (snackbar.taskId !== null && snackbar.previousStatus) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === snackbar.taskId
            ? {
                ...task,
                taskStatus: {
                  name: snackbar.previousStatus,
                  description: `Task restored to ${snackbar.previousStatus}`,
                },
              }
            : task
        )
      );
      closeSnackbar();
    }
  };

  return {
    handleMarkAsComplete,
    handleMarkAsIncomplete,
    handleMarkAsArchived,
    handleUndo,
    snackbar,
    closeSnackbar,
  };
};
