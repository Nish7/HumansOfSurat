import { Flex } from '@chakra-ui/react';
import ColorModeButton from './Buttons/ColorModeButton';

function Footer() {
	return (
		<>
			<Flex alignItems='center' justifyContent='space-between'>
				<div>
					&copy; {new Date().getFullYear()} Humans of Surat | Developed with
					love by nish
				</div>

				<ColorModeButton />
			</Flex>
		</>
	);
}

export default Footer;
