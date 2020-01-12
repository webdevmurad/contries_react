import React from 'react'; 

const CountryInfo = props => (
    <div>
        {props.country === undefined ? (
            <div></div>
        ):(
            <div>
                <h2>Страна: {props.country}</h2>
                <p>Континент: {props.continent}</p>
                <p>Столица: {props.capital}</p>
                <p>Население: {props.population}</p>
                <p>Площадь: {props.area} кв.м.</p>
                <p>Валюта: {props.currency}</p>
            </div>
        )}
    </div>
)

export default CountryInfo;