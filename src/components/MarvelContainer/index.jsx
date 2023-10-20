import React from 'react';
import CharacterInfo from '../CharacterInfo';
import './index.scss';

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;

const MarvelContainer = ({ marvelCharacters }) => {

    const mapAndDisplayCharacters = () => {
        return marvelCharacters.map(character => (
          <CharacterInfo character={character}/>
        ));
    };

    return (
        <div className="character_display_container">
            {mapAndDisplayCharacters()}
        </div>
    );
}

export default MarvelContainer;
