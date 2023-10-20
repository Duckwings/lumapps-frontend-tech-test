import React from 'react';

const CharacterInfo = ({ character }) => (
    <div>  
        <img 
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`${character.name} picture`}
        />
        <div>
        <p>{character.name}</p>
        <p>{character.description}</p>
        <div>
            <p># comics: {character.comics.available}</p>
            <p># series: {character.series.available}</p>
            <p># stories: {character.stories.available}</p>
        </div>
        </div>
    </div>
);

export default CharacterInfo;
