import { Flex } from '@chakra-ui/react';
import React from 'react';
import BodyText from '../Typography/BodyText';
// import Image from 'next/image';
import { Image } from '@chakra-ui/react';
import Link from 'next/link';

function Logo(props) {
	return (
		<Link passHref href='/'>
			<Flex {...props} align='center' _hover={{ cursor: 'pointer' }}>
				<Image
					src='/images/logo-bg.png'
					alt='logo'
					height='45px'
					width='50px'
					mr={4}
				/>
				<BodyText textStyle='title' fontSize='xl'>
					Humans of Surat
				</BodyText>
			</Flex>
		</Link>
	);
}

export default Logo;
