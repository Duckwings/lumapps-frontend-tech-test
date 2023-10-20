import React from 'react';
import './index.scss';

const CharacterInfo = ({ character }) => (
    <div className="character_infos_container">  
        <img 
        className="character_picture"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`${character.name} picture`}
        />
        <div className="character_infos_right_part">
            <p className="character_name">{character.name}</p>
            <p className="character_description">{character.description}</p>
            <div className="character_additional_infos">
                <p><span># comics:</span> {character.comics.available}</p>
                <p><span># series:</span> {character.series.available}</p>
                <p><span># stories:</span> {character.stories.available}</p>
            </div>
        </div>
    </div>
);

export default CharacterInfo;
