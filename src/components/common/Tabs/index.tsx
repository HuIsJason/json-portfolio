import React from 'react';

interface Props {
  count?: number;
}

const Tabs: React.FC<Props> = ({ count = 1 }) => (
  <>
    {Array.from({ length: count }, (_, i) => (
      <React.Fragment key={i}>&nbsp;&nbsp;</React.Fragment>
    ))}
  </>
);

export default Tabs;
