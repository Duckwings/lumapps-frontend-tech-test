import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const Search = ({inputValue, setInputValue}) => {
	return (
		<TextField 
			theme={Theme.dark}
			placeholder="Search ..." 
			icon={mdiMagnify}
			value={inputValue}
			onChange={e => setInputValue(e)} 
		/>
	);
};

export default Search;
