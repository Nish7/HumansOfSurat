import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
@font-face {
	font-family:'HK Grotesk';
	font-style: normal;
	font-weight: 700;
	src: url('/fonts/HKGrotesk-Bold.otf') format('OpenType');
}

@font-face {
	font-family:'HKGrotesk-BoldLegacy';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('/fonts/HKGrotesk-BoldLegacy.otf') format('OpenType');
}

@font-face {
	font-family:'HKGrotesk-Black';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('/fonts/HKGrotesk-Black.otf') format('OpenType');
}

@font-face {
	font-family:'Muli';
	font-style:normal;
	font-weight:700;
	font-display:swap;
	src: url('/fonts/Muli.ttf') format('TrueType');

}

@font-face {
	font-family: 'Thonburi';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('/fonts/Thonburi.ttc') format('ttc');
}
      `}
	/>
);

export default Fonts;
