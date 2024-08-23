interface QuestionBase {
  id: number;
  nameState: string;
  question: string;
  smallQuestion?: string;
  inputType: string; // Puede ser 'select', 'radio', 'text', etc.
}

export interface MultipleChoiceQuestion extends QuestionBase {
  options: string[];
  condition?: {
    stateCondition: string;
    expectedAnswer: string;
  };
  conditionalQuestions?: MultipleChoiceQuestion[];
}

interface SectionQuestions {
  id: number;
  section: string;
  image: string;
  questions: MultipleChoiceQuestion[];
}

const questionsUpdated: SectionQuestions[] = [
  {
    id: 1,
    section: 'Housing',
    image: '/images/Housing.png',
    questions: [
      {
        id: 1,
        nameState: 'hepWhenArrive',
        question: 'Would you like help finding housing when you arrive?',
        smallQuestion:
          'Tell us more about you to help us make your journey better and more personalized?',
        inputType: 'radio',
        options: ['Yes, I need assistance', "It's already taken care of"],
      },
    ],
  },
  {
    id: 2,
    section: 'Family care',
    image: '/images/Family_care.png',
    questions: [
      {
        id: 1,
        nameState: 'isMovingWithPartner',
        question: 'Are you moving with your spouse?',
        smallQuestion:
          'Is your partner planning to join you both now or in the future, during your mission??',
        inputType: 'radio',
        options: ['Yes', 'No'],
      },
      {
        id: 2,
        nameState: 'hasChildrenMoving',
        question: 'Do you have children who will be moving with you?',
        inputType: 'radio',
        options: ['Yes', 'No'],
      },
    ],
  },
  {
    id: 3,
    section: 'Pets',
    image: '/images/Pets.png',
    questions: [
      {
        id: 1,
        nameState: 'isBringingPets',
        question: 'Will you be bringing any pets with you?',
        inputType: 'radio',
        options: ['Yes', 'No'],
        conditionalQuestions: [
          {
            id: 1,
            question: 'Please specify:',
            nameState: 'typeOfPets',
            inputType: 'select',
            options: ['Cat', 'Bird', 'Dog', 'Rabbit'],
            condition: {
              stateCondition: 'isBringingPets',
              expectedAnswer: 'Yes',
            },
          },
          {
            id: 2,
            question: 'Are you considering adopting a pet upon arrival?',
            nameState: 'wantAdoptingPet',
            inputType: 'radio',
            options: ['Yes', 'No', 'Maybe'],
            condition: {
              stateCondition: 'isBringingPets',
              expectedAnswer: 'No',
            },
          },
        ],
      },
    ],
  },
  {
    id: 4,
    section: 'Healthcare',
    image: '/images/Healthcare.png',
    questions: [
      {
        id: 1,
        nameState: 'hasHealthInsurance',
        question: 'Do you have health insurance?',
        smallQuestion:
          ' It could be a health insurance from your home country or an international health insurance',
        inputType: 'radio',
        options: ['Yes', 'No'],
        conditionalQuestions: [
          {
            id: 1,
            question: 'Please specify:',
            inputType: 'select',
            nameState: 'TypeOfInsurance',
            options: ['Home country insurance', 'International insurance'],
            condition: {
              stateCondition: 'hasHealthInsurance',
              expectedAnswer: 'Yes',
            },
          },
        ],
      },

      {
        id: 2,
        nameState: 'hasChronicConditions',
        question: 'Any chronic or medical conditions?',
        smallQuestion:
          ' Please let us know if you, your partner, or children have any chronic or medical conditions',
        inputType: 'radio',
        options: ['Yes', 'No'],
        conditionalQuestions: [
          {
            id: 1,
            question: 'Please specify:',
            nameState: 'ChronicConditions',
            inputType: 'select',
            options: ['Cancer', 'Diabetes', 'Hypertension', 'Asthma'],
            condition: {
              stateCondition: 'hasChronicConditions',
              expectedAnswer: 'Yes',
            },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    section: 'Transportation',
    image: '/images/Transportation.png',
    questions: [
      {
        id: 1,
        nameState: 'isTransportingVehicle',
        question: 'Do you plan to transport or move your vehicle?',
        smallQuestion:
          ' Choose Yes, if you intend to move a car, bike, or bicycle to your new place of posting.',
        inputType: 'radio',
        options: ['Yes', 'No'],
        conditionalQuestions: [
          {
            id: 1,
            question: 'Please specify:',
            nameState: 'typeOfVehicle',
            inputType: 'select',
            options: ['Bicycle', 'Car', 'Motorbike'],
            condition: {
              stateCondition: 'isTransportingVehicle',
              expectedAnswer: 'Yes',
            },
          },
        ],
      },
    ],
  },
  {
    id: 6,
    section: 'General living',
    image: '/images/General_living.png',
    questions: [
      {
        id: 1,
        nameState: 'hobbiesAndActivities',
        question: 'What are your hobbies and favorite activities?',
        smallQuestion:
          ' Feel free to select multiple options for both your hobbies and activities.',
        inputType: 'select',
        options: [
          'Reading',
          'Cooking',
          'Traveling',
          'Photography',
          'Gardening',
          'Hiking',
          'Painting',
          'Drawing',
          'Writing',
          'Playing musical instruments',
          'Dancing',
          'Knitting',
          'Sewing',
          'Woodworking',
          'Cycling',
          'Running',
          'Swimming',
        ],
      },
    ],
  },
];

export default questionsUpdated;
