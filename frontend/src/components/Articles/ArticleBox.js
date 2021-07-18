import { Box, Flex, HStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import BodyText from '../Typography/BodyText';
import Heading2 from '../Typography/Heading-2';

function ArticleBox({ article }) {
	const { title, published_at, readingTime, previewQuote, tags } = article;

	return (
		<Box w='21%' m={5}>
			<BodyText mb={3} color='gray.500' fontSize={['sm']}>
				{format(new Date(published_at), 'do MMM yyy')} • {readingTime} min read
			</BodyText>
			<Heading2 textDecoration='1px underline' mb={3}>
				{title}
			</Heading2>
			<BodyText mb={3} fontStyle='italic'>
				&quot;{previewQuote}&quot;
			</BodyText>

			<HStack spacing={3}>
				{tags.split(',').map((tag) => (
					<BodyText color='gray.500' key={tag}>
						#{tag.trim()}
					</BodyText>
				))}
			</HStack>
		</Box>
	);
}

export default ArticleBox;
