import React, { FC } from 'react';
import Card from '@/components/molecules/Card/Card';


interface CardItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
}

interface CardListProps {
  items: CardItem[];
  onButtonClick: (id: number) => void;
}

const CardList: FC<CardListProps> = ({ items, onButtonClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card
          key={item.id}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          title={item.title}
          description={item.description}
          buttonLabel={item.buttonLabel}
          onButtonClick={() => onButtonClick(item.id)}
        />
      ))}
    </div>
  );
};

export default CardList;