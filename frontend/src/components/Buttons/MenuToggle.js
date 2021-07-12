import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

function MenuToggle({ toggle, isOpen }) {
	return (
		<Box display={['block', 'block', 'none']} onClick={toggle}>
			{isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={5} />}
		</Box>
	);
}

export default MenuToggle;
