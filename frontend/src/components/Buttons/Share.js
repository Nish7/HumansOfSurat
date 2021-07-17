import { Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaRegHeart } from 'react-icons/fa';

function Share({ isOpen }) {
	const col = useColorModeValue('gray.700', 'gray.300');
	return (
		<Button
			d={{ base: isOpen ? 'block' : 'none', md: 'inline-block' }}
			mt={[5, 5, 0]}
			color={col}
			borderRadius={15}
			mx={['auto', 'auto', '0']}>
			<Icon as={FaRegHeart} color='red.400' mr={3} />
			Share your story
		</Button>
	);
}

export default Share;
