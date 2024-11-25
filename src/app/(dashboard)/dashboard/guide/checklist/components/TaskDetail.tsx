'use client';
import React, { useState } from 'react';
import {
  IBackendTasks,
  ICategoryDetail,
  IDocument,
  ISubTask,
} from '../mocks/tasksMocks';
import {
  Box,
  Divider,
  Icon,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import theme from '@/src/app/theme';
import dayjs, { Dayjs } from 'dayjs';
import ReminderProperty from './taskproperties/ReminderProperty';
import DueDateProperty from './taskproperties/DueDateProperty';
import PriorityProperty from './taskproperties/PriorityProperty';
import CategoriesProperty from './taskproperties/CategoriesProperty';
import TaskDetailsButtons from './TaskDetailsButtons';
import AttachmentProperty from './taskproperties/AttachmentProperty';
import TitleProperty from './taskproperties/TitleProperty';
import DescriptionProperty from './taskproperties/DescriptionProperty';
import SubTasksProperty from './taskproperties/SubTasksProperty';

interface Iprops {
  task: IBackendTasks;
  handleCloseTaskDetail: () => void;
  onMarkAsComplete: (taskId: number) => void;
  onMarkAsIncomplete: (taskId: number) => void;
  onMarkAsArchived: (taskId: number) => void;
}

export default function TaskDetail({
  task,
  handleCloseTaskDetail,
  onMarkAsComplete,
  onMarkAsIncomplete,
  onMarkAsArchived,
}: Iprops) {
  const [reminderDate, setReminderDate] = useState<Dayjs | null>(
    task.remindDate ? dayjs(task.remindDate) : null
  );
  const [dueDate, setDueDate] = useState<Dayjs | null>(
    task.dueDate ? dayjs(task.dueDate) : null
  );

  const [priority, setPriority] = useState<string>(task.priority.name);

  const [categories, setCategories] = useState<ICategoryDetail[]>(
    task.categories ? task.categories.map((category) => category.category) : []
  );

  const [filesAttached, setFilesAttached] = useState<IDocument[]>(
    task.documents
  );

  const [description, setDescription] = useState<string>(
    task.taskType.description
  );

  const [title, setTitle] = useState<string>(task.customTitle);
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

  const [subTasks, setSubTasks] = useState<ISubTask[]>(task.subTasks);

  const handleSubTaskStatusChange = (index: number) => {
    const updatedSubTasks = [...subTasks];
    updatedSubTasks[index].status =
      updatedSubTasks[index].status === 'completed' ? 'pending' : 'completed';
    setSubTasks(updatedSubTasks);
  };

  const handleAddSubTask = (title: string) => {
    const newSubTask = {
      title,
      status: 'not-started',
    };
    setSubTasks([...subTasks, newSubTask]);
  };

  const handleDeleteSubTask = (index: number) => {
    const updatedSubTasks = [...subTasks];
    updatedSubTasks.splice(index, 1);
    setSubTasks(updatedSubTasks);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: { xs: '100%', md: '800px' },
        maxWidth: '800px',
        borderRadius: 2,
        backgroundColor: theme.custom.paperElevationOne,
        height: 'auto',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'stretch',
          paddingX: { xs: 2, sm: 4 },
          paddingY: 1,
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}
          component={'h2'}
        >
          {title}
        </Typography>
        <IconButton onClick={handleCloseTaskDetail}>
          <Icon>
            <Close />
          </Icon>
        </IconButton>
      </Stack>

      {/* // task content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          flex: 1,
          paddingTop: { xs: 2, sm: 4 },
          maxHeight: '600px',
          overflowY: 'auto',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            paddingX: { xs: 2, md: 6 },
            paddingBottom: 3,
          }}
        >
          <TitleProperty
            title={title}
            setTitle={setTitle}
            isEditingTitle={isEditingTitle}
            setIsEditingTitle={setIsEditingTitle}
          />

          {/* //task properties */}
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
              alignSelf: 'stretch',
              maxWidth: '500px',
            }}
          >
            <ReminderProperty
              reminderDate={reminderDate}
              setReminderDate={setReminderDate}
            />
            <DueDateProperty dueDate={dueDate} setDueDate={setDueDate} />
            <PriorityProperty priority={priority} setPriority={setPriority} />
            <CategoriesProperty
              categories={categories}
              setCategories={setCategories}
            />
            <AttachmentProperty
              filesAttached={filesAttached}
              setFilesAttached={setFilesAttached}
            />
          </Stack>
        </Stack>

        {/* //others */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            paddingX: { xs: 2, md: 6 },
            paddingY: { xs: 2, md: 2 },
            backgroundColor: theme.custom.paperElevationTwo,
            gap: 2,
          }}
        >
          {/* description */}
          <DescriptionProperty
            description={description}
            setDescription={setDescription}
          />

          <Divider orientation="horizontal" flexItem />

          {/* subtasks */}
          <SubTasksProperty
            subTasks={subTasks}
            handleSubTaskStatusChange={handleSubTaskStatusChange}
            handleAddSubTask={handleAddSubTask}
            handleDeleteSubTask={handleDeleteSubTask}
          />
        </Stack>
      </Box>

      {/* //buttons */}
      <TaskDetailsButtons
        task={task}
        onMarkAsComplete={onMarkAsComplete}
        onMarkAsIncomplete={onMarkAsIncomplete}
        onMarkAsArchived={onMarkAsArchived}
      />
    </Box>
  );
}
