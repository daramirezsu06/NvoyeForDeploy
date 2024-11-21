import theme from '@/src/app/theme';
import {
  AddTaskOutlined,
  ArchiveOutlined,
  Close,
  Save,
  TaskOutlined,
} from '@mui/icons-material';
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Icon,
  TextField,
  Divider,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import ReminderProperty from './taskproperties/ReminderProperty';
import DueDateProperty from './taskproperties/DueDateProperty';
import PriorityProperty from './taskproperties/PriorityProperty';
import CategoriesProperty from './taskproperties/CategoriesProperty';
import {
  IBackendTasks,
  ICategoryDetail,
  IDocument,
  ISubTask,
} from '../mocks/tasksMocks';
import AttachmentProperty from './taskproperties/AttachmentProperty';
import DescriptionProperty from './taskproperties/DescriptionProperty';
import SubTasksProperty from './taskproperties/SubTasksProperty';
import { priorities } from '../mocks/priorities';
import { backendHubs } from '@/src/app/(dashboard)/dashboard/guide/hubs/mocks/hubsMocks';
import NotesProperty from './taskproperties/NotesProperty';

type Props = {
  handleCloseNewTask: () => void;
  onAddTask: (newTask: IBackendTasks) => void;
};

interface ICreateTaskRequest {
  taskTypeId?: number;
  taskStatusId: number;
  priorityId: number | undefined;
  remindDate: string | null;
  dueDate: string | null;
  categories: ICategory[];
  documents: IDocument[];
  notes?: string;
  subTasks: ISubTask[];
  customTitle: string;
  description?: string;
}

interface ICategory {
  categoryId: number | undefined;
}

export default function NewTaskModal({ handleCloseNewTask, onAddTask }: Props) {
  const [title, setTitle] = useState<string>('');
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const [reminderDate, setReminderDate] = useState<Dayjs | null>(null);

  const [dueDate, setDueDate] = useState<Dayjs | null>(null);

  const [priority, setPriority] = useState<string>('');
  const priorityId: number | undefined = priorities.find(
    (p) => p.name === priority
  )?.id;

  const [categories, setCategories] = useState<ICategoryDetail[]>([]);

  const [filesAttached, setFilesAttached] = useState<IDocument[]>([]);

  const [description, setDescription] = useState<string>('');

  const [notes, setNotes] = useState<string>('');

  const [subTasks, setSubTasks] = useState<ISubTask[]>([]);
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

  const handleCreateTask = () => {
    //TODO connect to backend with -> {{url}}/tasks/create
    console.log('creating task');
    const newTask: IBackendTasks = {
      id: Date.now(), // Genera un ID único como número
      userId: 1, // Suplente, debe ser asignado según tu lógica de usuario
      taskTypeId: 1, // Tipo de tarea inicial (puedes ajustarlo)
      taskStatusId: 1, // Estado inicial, por ejemplo, "To do"
      remindDate: reminderDate ? reminderDate.toISOString() : null,
      dueDate: dueDate ? dueDate.toISOString() : null,
      priorityId, // Asignado desde el estado
      documents: filesAttached.map((file) => ({
        name: file.name,
        url: file.url || '', // Deja vacío si no hay URL
      })),
      notes,
      subTasks: subTasks.map((subTask) => ({
        title: subTask.title,
        status: subTask.status,
      })),
      customTitle: title,
      isActive: true, // La tarea estará activa por defecto
      createdAt: new Date().toISOString(), // Fecha de creación
      updatedAt: null, // Inicialmente sin actualizar
      taskStatus: {
        name: 'To do', // Ajusta según tu lógica
        description: 'Task is yet to be started', // Descripción correspondiente
      },
      taskType: {
        name: 'General', // Cambia según el tipo de tarea
        description: 'Default task type', // Descripción correspondiente
      },
      priority: {
        name: priorities.find((p) => p.name === priority)?.name || 'Low',
        description:
          priorities.find((p) => p.name === priority)?.description ||
          'Low priority',
      },
      categories: categories.map((category) => ({
        categoryId: backendHubs.find((h) => h.name === category.name)?.id || 0, // Asigna ID de categoría
        category: {
          name: category.name,
          description: category.description,
        },
      })),
    };

    console.log(newTask);
    onAddTask(newTask); // Agrega la nueva tarea
    handleCloseNewTask(); // Cierra el modal
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
      {/* title and close button  */}
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
        >
          Create new task
        </Typography>
        <IconButton onClick={handleCloseNewTask}>
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
          {/* title */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingBottom: 2,
            }}
          >
            <TextField
              variant="standard"
              value={title}
              onChange={handleTitleChange}
              sx={{
                backgroundColor: theme.custom.paperElevationFour,
                flex: 1,
                width: '100%',
              }}
              placeholder="Enter task title"
            />
          </Box>

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
            {/* reminder */}
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
            <NotesProperty notes={notes} setNotes={setNotes} />
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
      {/* buttons */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'stretch',
          justifyContent: 'center',
          gap: 4,
          paddingY: 3,
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Button
          variant="outlined"
          color="info"
          sx={{ textTransform: 'none', borderRadius: 2 }}
          onClick={handleCloseNewTask}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddTaskOutlined sx={{ mx: 0, my: 0 }} />}
          sx={{ textTransform: 'none', borderRadius: 2 }}
          onClick={handleCreateTask}
        >
          Create task
        </Button>
      </Stack>
    </Box>
  );
}
