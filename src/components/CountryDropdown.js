import React, { useState, useEffect } from 'react';

const CountryDropdown = (props) => {
    return (
        <select>
            <option placeholder="Choose a Country">Choose a Country</option>
            {props.options.map(option => (
                <option
                key={option.value}
                value={option.value}
                >
                {option.name}
                </option>
            ))}
        </select>
    )
}

export default CountryDropdown



