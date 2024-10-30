import {
  Box,
  FormControlLabel,
  Checkbox, // Cambiar a Checkbox para selección múltiple
  Stack,
  Typography,
} from '@mui/material';
import theme from '@/src/app/theme';
import { ReactNode } from 'react';
import { Question } from '../../types/question.types';

interface CuestionBaseProps {
  question: Question;
  children?: ReactNode;
  answers: { [key: string]: any };
  handleAnswerChangeMultichose: (
    event: React.ChangeEvent<HTMLInputElement>,
    optionId: number // Añadir optionId para pasar el valor
  ) => void;
}

const CuestionBaseMultichose = ({
  question,
  children = null,
  answers,
  handleAnswerChangeMultichose,
}: CuestionBaseProps) => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h5" sx={{ pb: 1 }}>
          {question.question}
        </Typography>
        <Typography variant="body1">{question.smallQuestion}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.custom.paperElevationFour,
          borderRadius: 4,
          py: 3,
          px: 3,
        }}
      >
        {/* Cambiar RadioGroup a Checkboxes para múltiples selecciones */}
        {question.options?.map((option) => (
          <FormControlLabel
            control={
              <Checkbox
                name={question.nameState}
                checked={
                  answers[question.nameState]?.includes(option.id) || false
                } // Verificar si el id está seleccionado
                onChange={(event) => {
                  handleAnswerChangeMultichose(event, option.id);
                  console.log(event);
                }} // Pasar el event y el id de la opción
              />
            }
            label={option.name}
            key={option.id}
          />
        ))}
        {children}
      </Box>
    </Stack>
  );
};

export default CuestionBaseMultichose;
