import { Flex, Icon, Link } from '@chakra-ui/react';
import ColorModeButton from '../Buttons/ColorMode';
import BodyText from '../Typography/BodyText';
import { FaHeart } from 'react-icons/fa';

function Footer() {
	return (
		<>
			<Flex align='center' justify='space-between' w='98%' m='10px auto'>
				<ColorModeButton />
				<BodyText color='gray.500' fontSize={['xs', 'sm']}>
					&copy; {new Date().getFullYear()} Humans of Surat | Developed with{' '}
					<Icon as={FaHeart} color='red.400' /> by{' '}
					<Link href='https://www.instagram.com/iam_nish7/'>Nish</Link>
				</BodyText>
			</Flex>
		</>
	);
}

export default Footer;
