import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

function ColorModeButtons() {
	const { colorMode, toggleColorMode } = useColorMode();
	const icon = colorMode === 'light' ? <SunIcon /> : <MoonIcon />;
	return (
		<Button onClick={toggleColorMode} variant='ghost'>
			{icon}
		</Button>
	);
}

export default ColorModeButtons;
