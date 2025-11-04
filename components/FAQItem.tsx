import React, { useState } from 'react';
import type { FAQItem } from '../types.ts';
import { ChevronDownIcon } from './icons.tsx';

interface FAQItemProps {
  item: FAQItem;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-primary/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left text-brand-light group"
      >
        <span className="text-lg font-semibold group-hover:text-brand-primary transition-colors">{item.question}</span>
        <ChevronDownIcon
          className={`w-6 h-6 text-brand-muted transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-brand-primary' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-4 text-brand-muted text-base">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItemComponent;