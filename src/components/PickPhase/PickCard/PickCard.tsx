import * as React from 'react';
import { PickRegularCard } from '../../../hooks/useInterface';

interface PickCardProps {
  card: PickRegularCard;
}

const PickCard: React.FC<PickCardProps> = props => {
  const { card } = props;

  const cardWidth = 120;
  const cardHeight = 200;

  return (
    <div
      className="bg-green-400 mx-3"
      style={{
        width: cardWidth,
        height: cardHeight
      }}
    >
      {card.regularCard.name}
    </div>
  );
};

export default PickCard;
