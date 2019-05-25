import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 cardBackground">
            <img alt='robot' src={`https://robohash.org/${name}?set=set4`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;