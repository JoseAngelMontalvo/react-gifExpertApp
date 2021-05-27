import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategorie = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 2) {
            setCategories((cats) => [inputValue, ...cats]);
        }
        setinputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategorie.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
