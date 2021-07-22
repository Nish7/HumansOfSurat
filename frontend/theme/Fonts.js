import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
@font-face {
	font-family:'HK Grotesk';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('/fonts/HKGrotesk-Regular.otf') format('otf');
}
@font-face {
	font-family:'HKGrotesk-BoldLegacy';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('/fonts/HKGrotesk-BoldLegacy.otf') format('otf');
}
@font-face {
	font-family:'Muli';
	font-style:normal;
	font-weight:700;
	font-display:swap;
	src: url('/fonts/Muli.ttf') format('ttf');

}
@font-face {
	font-family: 'Thonburi';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('/fonts/Thonburi.ttf') format('ttf');
}
      `}
	/>
);

export default Fonts;
