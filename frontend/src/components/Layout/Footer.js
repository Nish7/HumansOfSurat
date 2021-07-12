import { Flex } from '@chakra-ui/react';
import ColorModeButton from '../Buttons/ColorMode';
import BodyText from '../Typography/BodyText';

function Footer() {
	return (
		<>
			<Flex alignItems='center' justifyContent='space-between'>
				<BodyText>
					&copy; {new Date().getFullYear()} Humans of Surat | Developed with
					love by nish
				</BodyText>

				<ColorModeButton />
			</Flex>
		</>
	);
}

export default Footer;
