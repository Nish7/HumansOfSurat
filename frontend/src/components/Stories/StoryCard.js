import { format } from 'date-fns';
import {
	Flex,
	Box,
	Image,
	useColorModeValue,
	Icon,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import BodyText from '../Typography/BodyText';
import Heading2 from '../Typography/Heading-2';
import { FaUserAlt } from 'react-icons/fa';

// ?image Url will be changes in Prod (as image will be hosted)
export default function StoryCard({ story }) {
	const { author, image, title, body, published_at } = story;
	const bodyColor = useColorModeValue('gray.700', 'gray.400');
	const bgColor = useColorModeValue('gray.50', '#1c2430');
	const hoverColor = useColorModeValue('black', 'gray.100');

	return (
		<Box my={2} d='inline-block' bg={bgColor} p={8} borderRadius={10}>
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${story.image.url}`}
				alt={image.formats.thumbnail.hash}
				layout='fill'
				width='100%'
				borderRadius={5}
				maxHeight={96}
				mb={5}
			/>

			<Heading2 mb={5}>{title}</Heading2>

			<BodyText
				mb={5}
				lineHeight={1.7}
				color={bodyColor}
				_hover={{ color: hoverColor }}>
				{body}
			</BodyText>

			<StoryInfo fullname={author.fullName} published_at={published_at} />
		</Box>
	);
}

function StoryInfo({ fullname, published_at }) {
	return (
		<Flex align='center'>
			<Icon as={FaUserAlt} mr={4} color='gray.300' boxSize={5} />
			<Box>
				<BodyText fontWeight='bold' mb={1}>
					{fullname}
				</BodyText>

				<Text fontSize='xs' fontWeight='regular' color='gray.500'>
					{format(new Date(published_at), 'd MMM y')}
				</Text>
			</Box>
		</Flex>
	);
}