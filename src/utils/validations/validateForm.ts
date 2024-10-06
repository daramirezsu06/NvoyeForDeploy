import { fields, Fields } from './fieldsValidation';

export interface IValidateInput {
  test: boolean;
  textValidation: string;
}

export const validatefield = (
  field: keyof Fields,
  value: string,
  compareValue?: string
) => {
  // console.log('field', field);
  // console.log('value', value);

  const validationsResponse = fields[field].validations.map((item) => {
    return {
      test: item.regex.test(value),
      textValidation: item.msgError,
    };
  });
  if (field === 'confirmNewPassword' && compareValue !== value) {
    validationsResponse.push({
      test: false,
      textValidation: 'Passwords do not match',
    });
  }

  return validationsResponse;
};
