import { Divider, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import MenuToggle from '../Buttons/MenuToggle';
import MenuLinks from './MenuLinks';
import Logo from '../Lib/Logo';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<NavbarContainer>
				<Logo />
				<MenuToggle toggle={toggle} isOpen={isOpen} />

				<MenuLinks isOpen={isOpen} />
			</NavbarContainer>
			<Divider w='55%' textAlign='center' m='0 auto' />
		</>
	);
}

function NavbarContainer({ children }) {
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			w={['90%', '80%', '70%']}
			m='1rem auto 0.5rem auto'
			bg='transparent'
			colors='white'>
			{children}
		</Flex>
	);
}

export default Navbar;
