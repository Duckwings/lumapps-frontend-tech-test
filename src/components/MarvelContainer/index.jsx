import React from 'react';
import CharacterInfo from '../CharacterInfo';
import PaginationComponent from '../PaginationComponent';

import './index.scss';
const loading = require("../../images/oval.svg");

const MarvelContainer = ({ marvelCharacters, numberOfPages, currentPage, setCurrentPage, isLoading }) => {
    const sliceMarvelDataWithPage = characters => {
        const lowerIndex = currentPage * 4 - 4;
        const upperIndex = currentPage * 4;
        return characters.slice(lowerIndex, upperIndex);
    };

    const mapAndDisplayCharacters = () => {
        const filteredMarvelCharacters = sliceMarvelDataWithPage(marvelCharacters);
        return filteredMarvelCharacters.map(character => (
          <CharacterInfo key={character.id} character={character}/>
        ));
    };

    return (
        <div className="character_display_container">
            {isLoading ? 
                    <img className="loading_data" src={loading} alt="loading gif"/>
                :
                    mapAndDisplayCharacters()
            }
            {numberOfPages >= 1 && 
                <PaginationComponent 
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            }
        </div>
    );
}

export default MarvelContainer;
