import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flags, population, area} = props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;