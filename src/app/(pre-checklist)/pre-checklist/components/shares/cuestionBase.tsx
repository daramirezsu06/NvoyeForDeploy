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

interface CuestionBaseProps {
  question: {
    question: string;
    smallQuestion?: string;
    nameState: string;
    options: string[];
  };
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
      <>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h5">{question.question}</Typography>
            <Typography variant="body1">{question.smallQuestion}</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: theme.custom.paperElevationFour,
              borderRadius: 2,
              py: 3,
              px: 3,
            }}
          >
            <RadioGroup
              row
              name={question.nameState}
              onChange={handleAnswerChange}
              value={answers[question.nameState] || ''}
            >
              {question.options?.map((option, index) => (
                <FormControlLabel
                  control={<Radio />}
                  label={option}
                  key={option}
                  value={option}
                />
              ))}
            </RadioGroup>
            <> {children || null}</>
          </Box>
        </Stack>
      </>
    </>
  );
};

export default CuestionBase;