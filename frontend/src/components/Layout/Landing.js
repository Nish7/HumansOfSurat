import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

function Landing({ children }) {
	const { colorMode } = useColorMode();

	return (
		<Flex
			sx={{
				backgroundImage: `url('/images/Map-${colorMode}.svg')`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundSize: ['500px 500px', '900px 900px'],
			}}
			height='90vh'
			align='center'
			justifyContent='center'
			flexDirection='column'>
			{children}
		</Flex>
	);
}

export default Landing;
