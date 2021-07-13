import React from 'react';
import Heading1 from '../Typography/Heading-1';
import Gallery from './Gallery';

function LatestStories({ stories }) {
	return (
		<>
			<Heading1 mb={4} align='center'>
				Latest Stories
			</Heading1>
			<Gallery stories={stories} />
		</>
	);
}

export default LatestStories;
