import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';

const Header = ({inputValue, setInputValue}) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search inputValue={inputValue} setInputValue={setInputValue} />
		</FlexBox>
	</header>
);

export default Header;
