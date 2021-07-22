import { Box, useColorModeValue } from '@chakra-ui/react';
import { format } from 'date-fns';
import Tags from '../Lib/Tags';
import BodyText from '../Typography/BodyText';

export default function ArticleSidebar({
	published_at,
	author,
	tags,
	readingTime,
}) {
	const borderColor = useColorModeValue('black', 'white');

	return (
		<Box
			w={['full', '100%', '18%']}
			pt={5}
			borderTop={`2px solid ${borderColor}`}
			alignSelf='flex-start'
			top={0}
			mb={10}
			height='auto'
			position={{ base: 'relative', md: 'sticky' }}>
			<BodyText>Written By:</BodyText>

			<BodyText fontWeight='bold' mt={1}>
				{author ?? 'Anonymous'}
			</BodyText>

			<BodyText fontSize='md' mt={4} color='gray.500'>
				{format(new Date(published_at), 'dd MMMM, Y')}
			</BodyText>

			<BodyText fontWeight='semibold' mt={4}>
				{readingTime} Min Read
			</BodyText>

			<Tags mt={5} tags={tags} />
		</Box>
	);
}
