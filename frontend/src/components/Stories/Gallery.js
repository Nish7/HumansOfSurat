import StoryCard from './StoryCard';
import Masonry from 'react-masonry-css';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';

function Gallery({ stories }) {
	return (
		<>
			<TransitionGroup>
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
						<Fade key={story.id} distance='2em' bottom>
							<StoryCard key={story.id} story={story} />
						</Fade>
					))}
				</Masonry>
			</TransitionGroup>
		</>
	);
}

export default Gallery;
