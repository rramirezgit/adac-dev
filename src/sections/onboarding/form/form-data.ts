import uuidv4 from 'src/utils/uuidv4';
import { snakeCase } from 'src/utils/change-case';
import { IFormDataOnboarding, TSeccionForm, inputsOnboarding, textTypeOnboarding } from './types';

/* ______________________________________________________________________________________ */

const buttonsData = [
  {
    name: 'Casa/Departamento',
    options: ['Recámara', 'Sala de Tv', 'Comedor', 'Cine en Casa', 'Gimnasio', 'Otro'],
    texts: [
      {
        id: uuidv4(),
        type: textTypeOnboarding.title,
        value: '¿Qué tipo de espacio deseas adecuar, remodelar, acondicionar o diseñar?',
      },
      {
        id: uuidv4(),
        type: textTypeOnboarding.text,
        value: 'Selección del Tipo de Espacio.',
      },
    ],
  },
  {
    name: 'Hotel',
    options: [
      'Lobby',
      'Gimnasio',
      'Restaurante',
      'Cuarto de Hotel',
      'Pasillo',
      'Elevador',
      'Terraza',
      'Otro',
    ],
    texts: [
      {
        id: uuidv4(),
        type: textTypeOnboarding.title,
        value: '¿Qué tipo de espacio deseas adecuar, remodelar, acondicionar o diseñar?',
      },
      {
        id: uuidv4(),
        type: textTypeOnboarding.text,
        value: 'Selección del Tipo de Espacio.',
      },
    ],
  },
  {
    name: 'Restaurante',
    options: ['Cocina', 'Terraza', 'Interior', 'Otro'],
    texts: [
      {
        id: uuidv4(),
        type: textTypeOnboarding.title,
        value: '¿Qué tipo de espacio deseas adecuar, remodelar, acondicionar o diseñar?',
      },
      {
        id: uuidv4(),
        type: textTypeOnboarding.text,
        value: 'Selección del Tipo de Espacio.',
      },
    ],
  },
  {
    name: 'Corporativo/Oficina',
    options: ['Pasillo', 'Oficinas Privadas', 'Cubiculos', 'Zona de comer', 'Otro'],
    texts: [
      {
        id: uuidv4(),
        type: textTypeOnboarding.title,
        value: '¿Qué tipo de espacio deseas adecuar, remodelar, acondicionar o diseñar?',
      },
      {
        id: uuidv4(),
        type: textTypeOnboarding.text,
        value: 'Selección del Tipo de Espacio.',
      },
    ],
  },
  {
    name: 'Retail',
    options: [
      'Escaparates',
      'Puntos de Venta',
      'Estanterias y Anaqueles',
      'Probadores',
      'Back office',
      'Otro',
    ],
    texts: [
      {
        id: uuidv4(),
        type: textTypeOnboarding.title,
        value: '¿Qué tipo de espacio deseas adecuar, remodelar, acondicionar o diseñar?',
      },
      {
        id: uuidv4(),
        type: textTypeOnboarding.text,
        value: 'Selección del Tipo de Espacio.',
      },
    ],
  },
  {
    name: 'Otro',
    options: [],
  },
];

export const buttonsOnBoarding = buttonsData
  .map((item) => item.name)
  .map((name) => ({
    name,
    icon: `/assets/icons/onboarding/${snakeCase(name)}.svg`,
    options: buttonsData
      .find((item) => item.name === name)
      ?.options.map((option) => ({
        name: option,
        icon: `/assets/icons/onboarding/${snakeCase(name)}/${snakeCase(option)}.svg`,
      })) as any[],
    texts: buttonsData.find((item) => item.name === name)?.texts as any[],
  }));

/* ______________________________________________________________________________________ */

const FormDataSteps: IFormDataOnboarding[] = [
  /// Seccion: Información Personal
  {
    id: uuidv4(),
    title: TSeccionForm.PersonalInfo,
    content: [
      {
        name: 'PersonalInfo',
        texts: [
          {
            id: uuidv4(),
            type: textTypeOnboarding.title,
            value: 'Completa tu Información Personal ',
          },
        ],
        nextCondition: 'nextStep',
        fields: [
          {
            id: uuidv4(),
            nameFORMIK: 'ageRange',
            type: inputsOnboarding.number,
            placeholder: 'Edad',
          },
          {
            id: uuidv4(),
            nameFORMIK: 'gender',
            type: inputsOnboarding.select,
            placeholder: 'Género',
            options: ['Masculino', 'Femenino', 'No binario', 'Otro', 'Prefiero no decir'],
          },
          {
            id: uuidv4(),
            nameFORMIK: 'zipCode',
            type: inputsOnboarding.select,
            placeholder: 'País de Residencia',
            options: ['México', 'Colombia', 'Argentina', 'Chile', 'Perú'],
          },
        ],
      },
    ],
  },

  /// Seccion: Nivel de Educación
  {
    id: uuidv4(),
    title: TSeccionForm.Educacion,
    content: [
      {
        name: 'Educacion',
        texts: [
          {
            id: uuidv4(),
            type: textTypeOnboarding.title,
            value: 'Completa tu Nivel de Educación ',
          },
        ],
        nextCondition: 'nextStep',
        fields: [
          {
            id: uuidv4(),
            nameFORMIK: 'educationLevel',
            type: inputsOnboarding.select,
            placeholder: 'Nivel de Educación',
            options: [
              'Sin estudios formales',
              'Educación secundaria',
              'Formación profesional',
              'Estudios universitarios (grado)',
              'Posgrado (máster, doctorado)',
            ],
          },
          {
            id: uuidv4(),
            nameFORMIK: 'employmentStatus',
            type: inputsOnboarding.select,
            placeholder: 'Situación Laboral',
            options: [
              'Estudiante',
              'Empleado/a tiempo completo',
              'Empleado/a tiempo parcial',
              'Autónomo/a',
              'Desempleado/a',
              'Jubilado/a',
            ],
          },
        ],
      },
    ],
  },

  /// Seccion: Motivación de suscripción
  {
    id: uuidv4(),
    title: TSeccionForm.subscriptionReasons,
    content: [
      {
        name: 'MotivacionSuscripcion',
        texts: [
          {
            id: uuidv4(),
            type: textTypeOnboarding.title,
            value: '¿Qué te motiva a suscribirte al newslatter de ADAC?',
          },
          {
            id: uuidv4(),
            type: textTypeOnboarding.text,
            value: 'Selecciona las opciones que apliquen o añade la tuya en “Otros”.',
          },
        ],
        nextCondition: 'nextOptiomalStep',
        fields: [
          {
            id: uuidv4(),
            nameFORMIK: 'subscriptionReasons',
            type: inputsOnboarding.multiChecbok,
            placeholder: 'Nivel de Educación',
          },
        ],
      },
    ],
  },

  /// Seccion: Motivación de suscripción
  {
    id: uuidv4(),
    title: TSeccionForm.whatsApp,
    content: [
      {
        name: 'whatsapp',
        texts: [
          {
            id: uuidv4(),
            type: textTypeOnboarding.title,
            value: '¿Quieres también recibir la ultimas noticas via WhatsApp?',
          },
        ],
        nextCondition: 'finish',
        fields: [
          {
            id: uuidv4(),
            nameFORMIK: 'whatsapp',
            type: inputsOnboarding.telfNumber,
            placeholder: 'Nivel de Educación',
          },
        ],
      },
    ],
  },
];

export { FormDataSteps };
