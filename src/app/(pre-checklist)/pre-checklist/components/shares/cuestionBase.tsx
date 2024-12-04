import {
  Box,
  FormControlLabel,
  RadioGroup,
  Stack,
  Typography,
  Radio,
} from '@mui/material';
import theme from '@/src/app/theme';
import { ReactNode } from 'react';
import { Question } from '../../types/question.types';

interface CuestionBaseProps {
  question: Question;
  children?: ReactNode;
  answers: { [key: string]: any };
  handleAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CuestionBase = ({
  question,
  children = null,
  answers,
  handleAnswerChange,
}: CuestionBaseProps) => {
  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h5" sx={{ pb: 1 }} component={'p'}>
            {question.question}
          </Typography>
          <Typography variant="body1" component={'p'}>
            {question.smallQuestion}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.custom.paperElevationFour,
            borderRadius: 4,
            py: 3,
            px: 3,
          }}
        >
          <RadioGroup
            row
            name={question.nameState}
            onChange={handleAnswerChange}
            value={answers[question.nameState]}
          >
            {question.options?.map((option, index) => (
              <FormControlLabel
                control={<Radio />}
                label={'answer' in option ? option.name : option.name}
                key={'answer' in option ? option.name : option.name}
                value={'value' in option ? option.value : option.id}
              />
            ))}
          </RadioGroup>
          {children}
        </Box>
      </Stack>
    </>
  );
};

export default CuestionBase;
