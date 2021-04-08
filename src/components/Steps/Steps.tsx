import React, { useState } from 'react';
import { Steps as AntDSteps, Button } from 'antd';
import styled from 'styled-components';

const { Step } = AntDSteps;

const StyledStepsContent = styled.div`
  margin-top: 15px;
`;
interface Step {
  title: string;
  content: JSX.Element;
}

export const Steps = ({ steps }: { steps: Step[] }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <AntDSteps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </AntDSteps>
      <StyledStepsContent className="steps-content">{steps[current].content}</StyledStepsContent>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            // onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
