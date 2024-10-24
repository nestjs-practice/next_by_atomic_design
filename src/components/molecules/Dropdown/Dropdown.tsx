import React, { FC, useState, useRef, useEffect } from 'react';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon/Icon';

interface DropdownProps {
  label: string;
  items: { label: string; onClick: () => void }[];
}

const Dropdown: FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button onClick={toggleDropdown} variant="primary" size="medium">
        {label}
        <Icon name="dropdown" className="ml-2 w-4 h-4" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;