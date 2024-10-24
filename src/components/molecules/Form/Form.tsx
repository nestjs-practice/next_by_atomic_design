import { FC } from 'react';
import Label from '@/components/atoms/Label/Label';
import Input from '@/components/atoms/Input/Input';
import Text from '@/components/atoms/Typography/Text'

interface FormProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const Form: FC<FormProps> = ({
                                         label,
                                         name,
                                         type = 'text',
                                         placeholder = '',
                                         required = false,
                                         error,
                                       }) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        {...(required ? { required } : {})}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </div>
  );
};

export default Form;