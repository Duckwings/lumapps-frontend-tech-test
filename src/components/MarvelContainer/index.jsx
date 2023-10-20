import React from 'react';
import CharacterInfo from '../CharacterInfo';

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;

const MarvelContainer = ({ marvelCharacters }) => {

    const mapAndDisplayCharacters = () => {
        return marvelCharacters.map(character => (
          <CharacterInfo character={character}/>
        ));
    };

    return (
        <div>
            {mapAndDisplayCharacters()}
        </div>
    );
}

export default MarvelContainer;
