import {
  Box,
  FormControlLabel,
  RadioGroup,
  Stack,
  Typography,
  Radio,
} from '@mui/material';
import { MultipleChoiceQuestion } from './arrayChecklist';
import React from 'react';
import DropdownMenu from './dropdownMenu';
import theme from '@/src/app/theme';
import { UseAnswers } from './useAnswers';

interface QuestionProps {
  question: MultipleChoiceQuestion;
  selectConditional?: MultipleChoiceQuestion | null | false;
}

const Question: React.FC<QuestionProps> = ({ question, selectConditional }) => {
  const { answers, handleAnswerChange } = UseAnswers();

  if (!question) {
    return <Typography variant="h6">No question available</Typography>;
  }

  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6">{question.question}</Typography>
          <Typography variant="body2">{question.smallQuestion}</Typography>
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
          {selectConditional && <DropdownMenu question={selectConditional} />}
        </Box>
      </Stack>
    </>
  );
};
export default Question;
