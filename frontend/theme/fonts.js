// for local fonts
import { Global } from '@emotion/react';

// todo: Test remaining to check whether it works or not
export default function Fonts() {
	return (
		<Global
			styles={`
      /* HK Grotesk */
      @font-face {
        font-family: 'HK Grotesk';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/HKGrotesk-Regular.otf') format('otf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

       @font-face {
        font-family: 'HKGrotesk-BoldLegacy';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/HKGrotesk-BoldLegacy.otf') format('otf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

       @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Muli.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

       @font-face {
        font-family: 'Thonburi';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Thonburi.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
		/>
	);
}
