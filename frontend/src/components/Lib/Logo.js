import { Flex } from '@chakra-ui/react';
import React from 'react';
import BodyText from '../Typography/BodyText';
// import Image from 'next/image';
import { Image } from '@chakra-ui/react';

function Logo(props) {
	return (
		<Flex {...props} align='center'>
			<Image
				src='/images/logo-bg.png'
				alt='logo'
				height='45px'
				width='50px'
				mr={4}
			/>
			<BodyText textStyle='title' fontSize='2xl'>
				Humans of Surat
			</BodyText>
		</Flex>
	);
}

export default Logo;
