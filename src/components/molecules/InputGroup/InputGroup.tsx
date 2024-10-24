import { FC } from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

interface InputGroupProps {
  placeholder?: string;
  buttonLabel: string;
  onButtonClick: () => void;
  required?: boolean;
  error?: string;
  name: string;
}

const InputGroup: FC<InputGroupProps> = ({
                                           placeholder = '',
                                           buttonLabel,
                                           onButtonClick,
                                           required = false,
                                           error,
                                           name,
                                         }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Input
          name={name}
          placeholder={placeholder}
          required={required}
          className="flex-1 rounded-r-none"
        />
        <Button
          type="button"
          onClick={onButtonClick}
          className="rounded-l-none"
        >
          {buttonLabel}
        </Button>
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default InputGroup;