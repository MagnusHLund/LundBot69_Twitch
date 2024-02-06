import React from 'react';
import './textField.css';
import cn from 'classnames';

// Define the props interface for the Navbar component
interface TextFieldProps {
    placeholder?: string
    editable?: boolean
    value?: string
    maxLength?: number
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

// Define the Navbar functional component
const TextField: React.FC<TextFieldProps> = ({ placeholder, editable, value, maxLength, onChange }) => {
    return (
            <input type="text" onChange={onChange} value={value} maxLength={maxLength} className={cn('text-field', {
                'disabled': !editable,
                'placeholder': placeholder,
            })}
            />
    );
};

export default TextField;
