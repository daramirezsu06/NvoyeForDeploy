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
import theme from '@/src/app/theme';
import { Question } from '../../types/question.types';

interface questiondropdownMenuProps {
  question: Question;
  answers: { [key: string]: any };
  handleChangeOptions: (event: SelectChangeEvent<number | number[]>) => void; // Ajustado para manejar diferentes tipos
}

const DropdownMenu1: React.FC<questiondropdownMenuProps> = ({
  question,
  answers,
  handleChangeOptions,
}) => {
  // Sincronizamos el estado local con el estado global (redux)
  const [optionsChosen, setOptionsChosen] = useState<number | number[]>(
    answers[question.nameState]
  );

  useEffect(() => {
    setOptionsChosen(
      answers[question.nameState] || (question.multiple ? [] : 0)
    ); // Si es múltiple, inicializar como array vacío, de lo contrario, como número 0
  }, [answers, question.nameState, question.multiple]);

  const handleChange = (event: SelectChangeEvent<number[] | number>) => {
    // Manejo del cambio de valor
    const value = question.multiple
      ? event.target.value
      : parseInt(event.target.value as string);

    // Asegúrate de que value sea el tipo correcto
    if (question.multiple && Array.isArray(value)) {
      setOptionsChosen(value);
    } else {
      setOptionsChosen(value as number); // Convertir a number si no es múltiple
    }

    handleChangeOptions(event); // Llamamos a la función de manejo de cambios para Redux
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel
        id="example"
        sx={{ backgroundColor: theme.custom.paperElevationThree }}
      >
        {question.question}
      </InputLabel>
      <Select
        labelId="example"
        multiple={question.multiple}
        value={optionsChosen} // Usamos el estado local
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        name={question.nameState}
        renderValue={(selected) => {
          if (question.multiple && Array.isArray(question.options)) {
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {(selected as number[]).map((value) => {
                  const option = question.options.find(
                    (option) => option.id === value // Usamos el ID directamente
                  );
                  return (
                    <Chip key={value} label={option?.name} /> // Usamos el nombre de la opción
                  );
                })}
              </Box>
            );
          } else if (question.options) {
            // Para selección única
            const singleOption = question.options.find(
              (option) => option.id === (selected as number)
            );
            return singleOption ? singleOption.name : ''; // Usamos el nombre de la opción
          }
          return null; // Si options es undefined, retornar null
        }}
      >
        {question.options &&
          question.options.map(
            (
              item // Verificamos si options está definido
            ) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            )
          )}
      </Select>
    </FormControl>
  );
};

export default DropdownMenu1;
