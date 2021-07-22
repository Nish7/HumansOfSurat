// Global Styles
import { mode } from '@chakra-ui/theme-tools';

export default global = {
	global: (props) => ({
		body: {
			fontFamily: 'body',
			color: mode('gray.800', 'whiteAlpha.900')(props),
			bg: mode('white', 'gray.800')(props),
			lineHeight: 'base',
		},

		'a:hover': {
			cursor: 'pointer',
		},
		'.my-masonry-grid': {
			display: 'flex',
			marginLeft: '0px' /* gutter size offset */,
			width: 'auto',
		},
		'.my-masonry-grid_column': {
			paddingLeft: '10px' /* gutter size */,
			backgroundClip: 'padding-box',
		},

		'@font-face': {
			fontFamily: 'HK Grotesk',
			fontStyle: 'normal',
			fontWeight: 700,
			fontDisplay: 'swap',
			src: 'url("/fonts/HKGrotesk-Regular.otf") format("otf")',
		},

		'@font-face': {
			fontFamily: 'HKGrotesk-BoldLegacy',
			fontStyle: 'normal',
			fontWeight: 700,
			fontDisplay: 'swap',
			src: 'url("/fonts/HKGrotesk-BoldLegacy.otf") format("otf")',
		},

		'@font-face': {
			fontFamily: 'Muli',
			fontStyle: 'normal',
			fontWeight: 700,
			fontDisplay: 'swap',
			src: 'url("/fonts/Muli.ttf") format("ttf")',
		},

		'@font-face': {
			fontFamily: 'Thonburi',
			fontStyle: 'normal',
			fontWeight: 700,
			fontDisplay: 'swap',
			src: 'url("/fonts/Thonburi.ttf") format("ttf")',
		},
	}),
};
