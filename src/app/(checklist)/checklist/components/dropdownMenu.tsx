import { MultipleChoiceQuestion } from './arrayChecklist';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { UseAnswers } from './useAnswers';
interface QuestionProps {
  question: MultipleChoiceQuestion;
}
const DropdownMenu: React.FC<QuestionProps> = ({ question }) => {
  const { handleAnswerChange, answers } = UseAnswers();
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="example"> {question.question}</InputLabel>
      <Select
        labelId="example"
        value={answers[question.nameState] || ''}
        onChange={handleAnswerChange}
        name={question.nameState}
      >
        {question.options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownMenu;
