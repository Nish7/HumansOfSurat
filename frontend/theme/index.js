// Theme Entrypoint
import { extendTheme } from '@chakra-ui/react';
import { colors, layerStyles, fonts, textStyles } from './foundational';
import styles from './global';

export const config = {
	initialColorMode: 'system',
	useSystemColorMode: false,
};

const overrides = {
	// config
	config,

	// Global Styles
	styles,

	// Foundational Styles
	colors,
	fonts,
	layerStyles,
	textStyles,

	// Component Styles
	components: {
		// Component Styles
	},
};

export default extendTheme(overrides);
