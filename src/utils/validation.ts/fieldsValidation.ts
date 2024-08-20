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

  //   name: {
  //     regex: /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]{3,150}$/,
  //     msgError: 'Debe tener entre 3 y 150 caracteres',
  //     type: 'text',
  //     required: true,
  //   },
  //   description: {
  //     regex: /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ,]{3,255}$/,
  //     msgError: 'Debe tener entre 3 y 255 caracteres',
  //     type: 'text',
  //     required: true,
  //   },
  //   lastname: {
  //     regex: /^[0-9a-zA-Z\sáéíóúÁÉÍÓÚñÑ]{3,150}$/,
  //     msgError: 'Debe tener entre 3 y 150 caracteres',
  //     type: 'text',
  //     required: true,
  //   },
  //   identification: {
  //     regex: /^[0-9-]{3,15}$/,
  //     msgError: 'Debe tener entre 3 y 150 caracteres',
  //     type: 'text',
  //     required: true,
  //   },
  //   address: {
  //     regex: /^[0-9a-zA-Z\sáéíóúÁÉÍÓÚñÑ,.-/#]{3,255}$/,
  //     msgError: 'Debe tener entre 3 y 255 caracteres',
  //     type: 'text',
  //     required: true,
  //   },
  //   email: {
  //     regex:
  //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  //     msgError: 'Email inválido',
  //     required: true,
  //     type: 'text',
  //   },
  //   indetification: {
  //     regex: /^[0-9]{7,8}$/,
  //     msgError: 'Solo números',
  //     required: true,
  //     type: 'text',
  //   },
  //   confPassword: {
  //     regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[!@#$%^&*_])/,
  //     msgError:
  //       'Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un caracter (!@#$%^&*_)',
  //     required: true,
  //     type: 'text',
  //   },

  //   phone: {
  //     regex: /^[0-9()+-]{8,15}$/,
  //     msgError: 'Solo números y guiones',
  //     required: true,
  //     type: 'text',
  //   },
  //   date: {
  //     regex: /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/,
  //     msgError: 'Debe ingresar una fecha válida',
  //     required: true,
  //     type: 'text',
  //   },
};
