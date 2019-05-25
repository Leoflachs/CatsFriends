import React from 'react';
import Card from './card';

const CardList = ({ cats }) => {

    return (
        <div>
        {
        cats.map((element, i) => (
        <Card 
            key={i} 
            id={element.id} 
            name={element.name} 
            email={element.email}
        />
        )
        )}
        </div>
    )
}
export default CardList;