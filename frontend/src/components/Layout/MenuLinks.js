import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import BodyText from '../Typography/BodyText';

function MenuLinks({ isOpen }) {
	return (
		<Box
			display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
			flexBasis={{ base: '100%', md: 'auto' }}>
			<Stack
				spacing={8}
				align='center'
				justify={['center', 'center', 'space-between']}
				direction='row'
				mt={[4, 4, 0]}
				pt={[3, 3, 0]}>
				<MenuItem to='/'>Stories</MenuItem>
				<MenuItem to='/article'>Article</MenuItem>
				<MenuItem to='/series'>Series</MenuItem>
			</Stack>
		</Box>
	);
}

function MenuItem({ children, to = '/', ...rest }) {
	const hoverColor = useColorModeValue('bg', 'light');

	return (
		<BodyText
			textStyle='title'
			fontSize='md'
			color='gray.500'
			display='block'
			_hover={{
				cursor: 'pointer',
				color: hoverColor,
			}}
			{...rest}>
			<Link href={to}>{children}</Link>
		</BodyText>
	);
}

export default MenuLinks;
