// data/questions.js
const questions = [
  {
    id: 1,
    question: 'Would you like help finding housing when you arrive?',
    smallQuestion:
      'Tell us more about you to help us make your journey better and more personalized?',
    options: ['Yes, I need assistance', 'its already taken care of'],
  },
  {
    id: 2,
    question: 'Are you moving with your spouse?',
    options: ['Yes', 'No'],
  },
  {
    id: 3,
    question: 'Do you have children who will be moving with you?',
    options: ['Yes', 'No'],
  },
  {
    id: 4,
    question: 'Will you be bringing any pets with you?',
    options: ['Yes', 'No'],
  },
  {
    id: 5,
    question: 'Are you considering adopting a pet upon arrival?',
    options: ['Yes', 'No', 'Maybe'],
  },
  {
    id: 6,
    question: 'Do you have health insurance?',
    options: ['Yes', 'No'],
    conditionalQuestions: [
      {
        id: 7,
        question: 'What type of health insurance do you have?',
        options: ['Public', 'Private'],
        condition: 'Yes', // Solo se muestra si la respuesta a la pregunta 5 es "Yes"
      },
    ],
  },
  {
    id: 8,
    question: 'Any chronic or medical conditions?',
    options: ['Yes', 'No'],
    conditionalQuestions: [
      {
        id: 9,
        question: 'Please describe your conditions:',
        inputType: 'textarea', // Aquí usamos un campo de texto en lugar de opciones
        condition: 'Yes', // Solo se muestra si la respuesta a la pregunta 7 es "Yes"
      },
    ],
  },
  {
    id: 10,
    question: 'Do you plan to transport or move your vehicle?',
    options: ['Yes', 'No'],
  },
  {
    id: 11,
    question: 'What are your hobbies and favorite activities?',
    inputType: 'text', // Esta pregunta acepta una entrada de texto libre
  },
];

export default questions;
