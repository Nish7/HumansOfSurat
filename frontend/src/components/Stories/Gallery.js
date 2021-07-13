import { Box } from '@chakra-ui/react';
import StoryCard from './StoryCard';

function Gallery({ stories }) {
	return (
		<Box
			sx={{ columnCount: [1, 2, 3], columnGap: '20px' }}
			padding={4}
			w='100%'
			maxW={{ base: '100%', md: '92%' }}
			mx='auto'>
			{stories.map((story) => (
				<StoryCard key={story.id} story={story} />
			))}
		</Box>
	);
}

export default Gallery;
