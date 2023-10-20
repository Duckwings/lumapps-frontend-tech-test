import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';
const marvelLogo = require("../../images/marvel.png");

const Header = ({inputValue, setInputValue}) => (
	<header className="lumx-spacing-padding-big header">
		<img className="marvel_logo" src={marvelLogo} alt="marvel logo on header"/>	
		<FlexBox vAlign={Alignment.right}>
			<Search inputValue={inputValue} setInputValue={setInputValue} />
		</FlexBox>
	</header>
);

export default Header;
