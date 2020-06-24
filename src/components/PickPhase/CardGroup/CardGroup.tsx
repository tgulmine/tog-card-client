import * as React from 'react';
import PickCard from '../PickCard/PickCard';
import { GroupRegularCard, PickRegularCard } from '../../../hooks/useInterface';

interface CardGroupProps {
  cardGroup: GroupRegularCard;
}

const CardGroup: React.FC<CardGroupProps> = props => {
  const { cardGroup } = props;

  return (
    <div className="flex justify-around mx-6 mt-8">
      <PickCard card={cardGroup.cards[0]} />
      <PickCard card={cardGroup.cards[1]} />
      <PickCard card={cardGroup.cards[2]} />
    </div>
  );
};

export default CardGroup;
