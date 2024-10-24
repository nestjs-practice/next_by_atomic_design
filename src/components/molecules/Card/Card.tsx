import React, { FC } from 'react';
import Heading from '@/components/atoms/Typography/Heading';
import Button from '@/components/atoms/Button/Button';
import Text from '@/components/atoms/Typography/Text'
import Image from '@/components/atoms/Image/Image'


interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const Card: FC<CardProps> = ({
                               imageSrc,
                               imageAlt,
                               title,
                               description,
                               buttonLabel,
                               onButtonClick,
                             }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image src={imageSrc} alt={imageAlt} width={400} height={200} />
      <div className="p-4">
        <Heading level={3} className="mb-2">
          {title}
        </Heading>
        <Text className="mb-4">{description}</Text>
        <Button onClick={onButtonClick} variant="primary" size="medium">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default Card;