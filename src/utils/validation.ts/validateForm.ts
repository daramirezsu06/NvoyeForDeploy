import { fields, Fields } from './fieldsValidation';

export interface IValidateInput {
  test: boolean;
  textValidation: string;
}

export const validatefield = (field: keyof Fields, value: string) => {
  console.log('field', field);
  console.log('value', value);
  // console.log("fields[field].required", (fields[field].required && (!value || value.toString().trim() === '')));

  //   if (fields[field].required && (!value || value.toString().trim() === ''))
  //     return 'Requerido';

  const validationsResponse = fields[field].validations.map((item) => {
    return {
      test: item.regex.test(value),
      textValidation: item.msgError,
    };
  });

  return validationsResponse;
};
