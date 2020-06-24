export interface RegularCard {
  name: string;
}

export interface PickRegularCard {
  regularCard: RegularCard;
  isActive: boolean;
}

export interface GroupRegularCard {
  cards: PickRegularCard[];
}

export interface ServerState {
  pickBoard: {
    deckRegGroup1: GroupRegularCard[];
  };
}
