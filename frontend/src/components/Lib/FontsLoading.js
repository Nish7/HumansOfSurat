import React from 'react';

function FontsLoading() {
	return (
		<>
			{/* HK Grotesk Black */}
			<link
				rel='preload'
				href='/fonts/HKGrotesk-Black.otf'
				as='font'
				crossOrigin=''
			/>

			{/* HK Grotesk Bold */}

			<link
				rel='preload'
				href='/fonts/HKGrotesk-Regular.otf'
				as='font'
				crossOrigin=''
			/>

			{/* HK Grotesk Bold Legacy */}

			<link
				rel='preload'
				href='/fonts/HKGrotesk-BoldLegacy.otf'
				as='font'
				crossOrigin=''
			/>

			{/* Muli  */}

			<link rel='preload' href='/fonts/Muli.ttf' as='font' crossOrigin='' />

			{/* Muli Bold*/}
			<link
				rel='preload'
				href='/fonts/Muli-Bold.ttf'
				as='font'
				crossOrigin=''
			/>

			{/* Muli SemiBold*/}
			<link
				rel='preload'
				href='/fonts/Muli-SemiBold.ttf'
				as='font'
				crossOrigin=''
			/>

			{/* Thonburi*/}

			<link rel='preload' href='/fonts/Thonburi.ttc' as='font' crossOrigin='' />
		</>
	);
}

export default FontsLoading;
