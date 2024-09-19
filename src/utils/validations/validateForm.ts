import { fields, Fields } from './fieldsValidation';

export interface IValidateInput {
  test: boolean;
  textValidation: string;
}

export const validatefield = (field: keyof Fields, value: string) => {
  console.log('field', field);
  console.log('value', value);

  const validationsResponse = fields[field].validations.map((item) => {
    return {
      test: item.regex.test(value),
      textValidation: item.msgError,
    };
  });

  return validationsResponse;
};
