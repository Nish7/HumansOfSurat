import React from 'react';
import { Button, Box } from '@chakra-ui/react';

function LoadMore({ isNext, loadMore }) {
	return (
		<>
			{isNext && (
				<Box align='center' mt={5}>
					<Button onClick={loadMore}>Load More</Button>
				</Box>
			)}
		</>
	);
}

export default LoadMore;
