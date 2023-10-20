/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';

const MARVEL_URL = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=';
const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;

function App() {
	const [inputValue, setInputValue] = useState('');
	const [marvelCharacters, setMarvelCharacters] = useState([]);

	const fetchMarvelData = query => {
		const apiUrl = `${MARVEL_URL}${query}&apikey=${API_KEY}`;

		fetch(apiUrl)
		.then((res) => res.json())
		.then((res) => {
			setMarvelCharacters(res.data.results);
		});
	};

	useEffect(() => {
		if(!inputValue || !inputValue.length) return setMarvelCharacters([]);
		const waitUntilStopTyping = setTimeout(() => {
			fetchMarvelData(inputValue);
			}, 500)
		
		return () => clearTimeout(waitUntilStopTyping)
	}, [inputValue]);
	

	return (
		<>
			<Router>
				<Header inputValue={inputValue} setInputValue={setInputValue}  />
				<Switch>
					<Route
						exact
						path="/"
					>
						<section className="lumx-spacing-padding-horizontal-huge" />
						test
					</Route>
				</Switch>
			</Router>
		</>
	);	
}

export default App;
