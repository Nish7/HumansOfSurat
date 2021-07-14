import React, { useState } from 'react';
import axios from 'axios';
import Heading1 from '../Typography/Heading-1';
import Gallery from './Gallery';
import LoadMore from '../Buttons/LoadMore';

function LatestStories({ initialStories }) {
	const [stories, setStories] = useState(initialStories);
	const [next, setNext] = useState(6);
	const [isNext, setIsNext] = useState(initialStories.length > 5);

	// ?TODO: Load more button works... but unneccessary additional click required if num of posts fetched is multiple of 6.
	// ?TODO: ineffecient (re-renderers of exisiting story cards) and better solution needed
	const loadMore = async () => {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/stories?_sort=created_at:desc&_start=${next}&_limit=6`,
		);
		const newStories = res.data;
		const allStories = [...stories, ...newStories];
		setStories(allStories);
		setNext(next + 6);
		if (newStories.length < 5) {
			setIsNext(false);
		}
	};

	return (
		<>
			<Heading1 mb={10} align='center'>
				Latest Stories
			</Heading1>
			<Gallery stories={stories} />
			<LoadMore loadMore={loadMore} isNext={isNext} />
		</>
	);
}

export default LatestStories;
