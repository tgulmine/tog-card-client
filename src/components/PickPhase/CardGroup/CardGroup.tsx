import * as React from 'react';
import PickCard from '../PickCard/PickCard';

const CardGroup: React.FC = () => {
  return (
    <div className="flex justify-around mx-6 mt-8">
      <PickCard />
      <PickCard />
      <PickCard />
    </div>
  );
};

export default CardGroup;
