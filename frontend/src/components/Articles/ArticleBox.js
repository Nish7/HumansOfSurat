import { Box, Flex, HStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import Link from 'next/link';
import Tags from '../Lib/Tags';
import BodyText from '../Typography/BodyText';
import Heading2 from '../Typography/Heading-2';

function ArticleBox({ article }) {
	const { title, published_at, readingTime, previewQuote, tags, author, slug } =
		article;

	return (
		<Link passHref href={`/article/${slug}`}>
			<Box
				w={['100%', '42%', '21%']}
				_hover={{ cursor: 'pointer' }}
				borderRadius={10}
				mx={4}
				my={7}>
				<BodyText mb={3} color='gray.500' fontSize={['sm']}>
					{format(new Date(published_at), 'do MMM yyy')} • {readingTime} min
					read
				</BodyText>
				<Heading2 _hover={{ textDecoration: '1px underline' }} mb={3}>
					{title}
				</Heading2>
				{/* <BodyText fontSize={['sm']} fontWeight='bold' mb={4}>
					By {author?.fullName ?? 'Anonymous'}
				</BodyText> */}

				<BodyText mb={3} fontStyle='italic'>
					&quot;{previewQuote}&quot;
				</BodyText>

				<Tags tags={tags} />
			</Box>
		</Link>
	);
}

export default ArticleBox;
