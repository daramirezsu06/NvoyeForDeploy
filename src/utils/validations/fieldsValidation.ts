interface FieldValidations {
  required: boolean;
  type: string;
  validations: {
    regex: RegExp;
    msgError: string;
  }[];
}
export interface Fields {
  password: FieldValidations;
  // Agrega más campos según los vayas necesitando
  // name?: FieldValidations;
  // description?: FieldValidations;
  // ...
  newPassword: FieldValidations;
  confirmNewPassword: FieldValidations;
}

export const fields: Fields = {
  password: {
    required: true,
    type: 'text',
    validations: [
      {
        regex: /^.{8,}$/,
        msgError: 'At least 8 characters',
      },
      {
        regex: /^(?=.*[A-Z]).+$/,
        msgError: 'At least one capital letter',
      },
      {
        regex: /^(?=.*\d).+$/,
        msgError: 'At least one number',
      },
      {
        regex: /^(?=.*[@#%&*!$^?~]).+$/,
        msgError: 'At least one special character (@,#,%,etc.)',
      },
    ],
  },
  newPassword: {
    required: true,
    type: 'text',
    validations: [
      {
        regex: /^.{8,}$/,
        msgError: 'At least 8 characters',
      },
      {
        regex: /^(?=.*[A-Z]).+$/,
        msgError: 'At least one capital letter',
      },
      {
        regex: /^(?=.*\d).+$/,
        msgError: 'At least one number',
      },
      {
        regex: /^(?=.*[@#%&*!$^?~]).+$/,
        msgError: 'At least one special character (@,#,%,etc.)',
      },
    ],
  },
  confirmNewPassword: {
    required: true,
    type: 'text',
    validations: [
      {
        regex: /^.{8,}$/,
        msgError: 'At least 8 characters',
      },
    ],
  },
};
