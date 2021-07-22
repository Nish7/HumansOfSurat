import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { config } from '@/theme/index';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preload'
						href='/fonts/HKGrotesk-Regular.otf'
						as='font'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/HKGrotesk-BoldLegacy.otf'
						as='font'
						crossOrigin=''
					/>

					<link rel='preload' href='/fonts/Muli.ttf' as='font' crossOrigin='' />

					<link
						rel='preload'
						href='/fonts/Thonburi.ttf'
						as='font'
						crossOrigin=''
					/>
				</Head>
				<body>
					{/* <ColorModeScript initialColorMode={config.initialColorMode} /> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
