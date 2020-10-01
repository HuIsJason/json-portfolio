import React from 'react';

interface Props {
  count?: number;
}

const Tab: React.FC = () => <>&nbsp;&nbsp;</>;

const TabBuilder: React.FC<Props> = ({ count = 1 }) => {
  const tabs = [];

  while (count > 0) {
    tabs.push(<Tab key={count} />);
    count--;
  }

  return <>{tabs}</>;
};

export default TabBuilder;
