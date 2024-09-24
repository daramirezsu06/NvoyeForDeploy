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

interface questiondropdownMenuProps {
  question: {
    question: string;
    smallQuestion?: string;
    nameState: string;
    options: { id: number; name: string; description: string }[]; // Estructura de las opciones
    multiple: boolean; // Indica si es selección múltiple
  };
  answers: { [key: string]: any };
  handleChangeOptions: (event: SelectChangeEvent<number[] | number>) => void; // Ajustado para manejar diferentes tipos
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
    const value = question.multiple
      ? event.target.value
      : parseInt(event.target.value);
    setOptionsChosen(value); // Actualizamos el estado local

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
        renderValue={(selected) =>
          question.multiple ? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {(selected as number[]).map((value) => {
                // Buscamos el nombre correspondiente al id
                const option = question.options.find(
                  (option) => option.id === value
                );
                return (
                  <Chip key={value} label={option?.name} /> // Usamos el nombre de la opción
                );
              })}
            </Box>
          ) : (
            // Para selección única
            question.options.find((option) => option.id === selected)?.name // Buscamos y mostramos el nombre
          )
        }
      >
        {question.options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownMenu1;
