import React from 'react';
import { Steps } from 'components';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import FourthStep from './Steps/FourthStep';
import FifthStep from './Steps/FifthStep';

const steps = [
  {
    title: 'First',
    content: <FirstStep />
  },
  {
    title: 'Second',
    content: <SecondStep />
  },
  {
    title: 'Third',
    content: <ThirdStep />
  },
  {
    title: 'Forth',
    content: <FourthStep />
  },
  {
    title: 'Fifth',
    content: <FifthStep />
  }
];

const StepsPage = () => {
  return <Steps steps={steps} />;
};

export default StepsPage;
