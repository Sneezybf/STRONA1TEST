import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, placeholder, value, onChange, required = false }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-muted mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-brand-light placeholder-brand-muted/50 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 outline-none"
      />
    </div>
  );
};

export default FormField;