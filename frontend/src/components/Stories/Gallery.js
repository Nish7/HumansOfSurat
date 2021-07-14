import StoryCard from './StoryCard';
import Masonry from 'react-masonry-css';

function Gallery({ stories }) {
	return (
		<>
			<Masonry
				breakpointCols={{
					default: 3,
					1100: 3,
					700: 2,
					500: 1,
				}}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'>
				{stories.map((story) => (
					<StoryCard key={story.id} story={story} />
				))}
			</Masonry>
		</>
	);
}

export default Gallery;
