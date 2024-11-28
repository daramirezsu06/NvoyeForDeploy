import theme from '@/src/app/theme';
import { AddTaskOutlined } from '@mui/icons-material';
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Icon,
  TextField,
  Divider,
  Button,
  Autocomplete,
  Modal,
} from '@mui/material';
import React, { useState } from 'react';

import { IBackendTasks } from '../mocks/tasksMocks';

import {
  IRecomendedTask,
  recomendedTasksMocks,
} from '../mocks/recomendedTasks';
import CreateCustomTaskForm from './CreateCustomTaskForm';
import RecomendedTaskDetail from './recomendedTask/RecomendedTaskDetail';

type Props = {
  handleCloseNewTask: () => void;
  onAddTask: (newTask: IBackendTasks) => void;
};

export default function NewTaskModal({ handleCloseNewTask, onAddTask }: Props) {
  const [selectedTask, setSelectedTask] = useState<IRecomendedTask | null>(
    null
  );
  const [isCreateCustomTaskOpen, setIsCreateCustomTaskOpen] = useState(false);

  const handleCreateCustomTask = () => {
    setIsCreateCustomTaskOpen(true);
  };

  const handleCloseCreateCustomTask = () => {
    setIsCreateCustomTaskOpen(false);
  };

  const [isSelectedTask, setIsSelectedTask] = useState(false);
  const handleCloseRecomendedTaskDetail = () => {
    setIsSelectedTask(false);
  };
  const handleAddRecomendedTaskToChecklist = () => {
    //TODO send this recomended task to checklist
    console.log(selectedTask);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: { xs: '90%', md: '600px' },
        maxWidth: '800px',
        height: { xs: '600px', md: '600px' },
        borderRadius: 2,
        backgroundColor: theme.custom.paperElevationOne,
      }}
    >
      {/* title and close button  */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
          paddingX: { xs: 2, sm: 4 },
          paddingY: 1,
          paddingTop: 4,
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}
          component={'h2'}
        >
          Search a task, topic, or keyword
        </Typography>
        {/* <IconButton onClick={handleCloseNewTask}>
          <Icon>
            <Close />
          </Icon>
        </IconButton> */}
      </Stack>

      {/* // content */}
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
          <Autocomplete
            options={recomendedTasksMocks} // Lista de opciones
            getOptionLabel={(option) => option.taskType.name || ''} // Especificar qué propiedad mostrar
            isOptionEqualToValue={(option, value) => option.id === value.id} // Comparar objetos correctamente
            value={selectedTask}
            onChange={(event, newValue) => {
              setSelectedTask(newValue);
              setIsSelectedTask(true);
            }}
            renderInput={(params) => (
              <TextField {...params} label="e.g. insurance" />
            )}
            sx={{
              width: '100%',
            }}
          />
        </Stack>
        {selectedTask && (
          <Modal
            open={isSelectedTask}
            onClose={handleCloseRecomendedTaskDetail}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
            }}
          >
            <RecomendedTaskDetail
              handleAddRecomendedTaskToChecklist={
                handleAddRecomendedTaskToChecklist
              }
              recomendedTask={selectedTask}
              handleCloseRecomendedTaskDetail={handleCloseRecomendedTaskDetail}
            />
          </Modal>
        )}
      </Box>
      {/* buttons */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'stretch',
          justifyContent: 'center',
          gap: 1,
          paddingBottom: 2,
          paddingTop: { xs: 1, sm: 1 },
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: theme.custom.paperElevationTwo,
          borderRadius: 2,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderEndRadius: 2,
        }}
      >
        <Typography variant="body2">
          Or create a custom checklist task
        </Typography>

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'center',
            gap: 4,
            // paddingY: 3,
            // borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <Button
            variant="text"
            color="info"
            sx={{ textTransform: 'none', borderRadius: 2 }}
            onClick={handleCloseNewTask}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="primary"
            endIcon={<AddTaskOutlined sx={{ mx: 0, my: 0 }} />}
            sx={{ textTransform: 'none', borderRadius: 2 }}
            onClick={handleCreateCustomTask}
          >
            Create custom task
          </Button>
        </Stack>
      </Stack>
      <Modal
        open={isCreateCustomTaskOpen} //modificar
        onClose={handleCloseCreateCustomTask} //modificar
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        }}
      >
        <CreateCustomTaskForm
          handleCloseNewTask={handleCloseNewTask}
          handleCloseCreateCustomTask={handleCloseCreateCustomTask}
          onAddTask={onAddTask}
        />
      </Modal>
    </Box>
  );
}
