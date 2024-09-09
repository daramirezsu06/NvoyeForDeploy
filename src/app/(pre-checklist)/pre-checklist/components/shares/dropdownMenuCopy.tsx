import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Box,
  Chip,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';

interface questiondropdownMenuProps {
  question: {
    question: string;
    smallQuestion?: string;
    nameState: string;
    options: string[];
    multiple: boolean;
  };
  answers: { [key: string]: any };
  handleChangeOptions: (event: SelectChangeEvent<string[]>) => void;
}

const DropdownMenu1: React.FC<questiondropdownMenuProps> = ({
  question,
  answers,
  handleChangeOptions,
}) => {
  // Sincronizamos el estado local con el estado global (redux)
  const [optionsChosen, setOptionsChosen] = useState<string[]>(
    answers[question.nameState] || []
  );

  useEffect(() => {
    setOptionsChosen(answers[question.nameState] || []);
  }, [answers, question.nameState]);

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="example">{question.question}</InputLabel>
      <Select
        labelId="example"
        multiple={question.multiple}
        value={optionsChosen} // Usamos el estado local
        onChange={handleChangeOptions}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        name={question.nameState}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
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

export default DropdownMenu1;
